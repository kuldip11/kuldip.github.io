import { NextResponse } from 'next/server';

import { chatbotConfig, chatbotInstructions } from '@/constants/chatbot';

type GeminiInteractionResponse = {
  steps?: Array<{ type?: string; content?: Array<{ type?: string; text?: string }> }>;
};
type GateState =
  { mode: 'challenge'; pendingMessage: string; expiresAt: number } | { mode: 'private'; expiresAt: number };

const encoder = new TextEncoder();
const CHALLENGE_TTL_MS = 5 * 60 * 1000;
const PRIVATE_TTL_MS = 30 * 60 * 1000;

function normalize(value: string) {
  return value.trim().toLocaleLowerCase().replace(/\s+/g, ' ');
}

function getChatTriggers() {
  return (process.env.SECRET_TEXT ?? '').split(',').map(normalize).filter(Boolean);
}

async function sign(value: string, signingSecret: string) {
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(signingSecret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  return new Uint8Array(await crypto.subtle.sign('HMAC', key, encoder.encode(value)));
}

function toBase64Url(value: Uint8Array | string) {
  return Buffer.from(value).toString('base64url');
}

function timingSafeEqual(left: Uint8Array, right: Uint8Array) {
  if (left.length !== right.length) return false;
  let difference = 0;
  for (let index = 0; index < left.length; index += 1) difference |= left[index] ^ right[index];
  return difference === 0;
}

async function createStateToken(state: GateState, signingSecret: string) {
  const payload = toBase64Url(JSON.stringify(state));
  return `${payload}.${toBase64Url(await sign(payload, signingSecret))}`;
}

async function readStateToken(token: string | undefined, signingSecret: string): Promise<GateState | null> {
  if (!token || token.length > 2_000) return null;
  const separator = token.lastIndexOf('.');
  if (separator < 1) return null;
  const payload = token.slice(0, separator);
  const suppliedSignature = token.slice(separator + 1);
  if (!suppliedSignature) return null;

  const expected = await sign(payload, signingSecret);
  const supplied = new Uint8Array(Buffer.from(suppliedSignature, 'base64url'));
  if (!timingSafeEqual(supplied, expected)) return null;

  try {
    const parsed = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8')) as Partial<GateState>;
    if (typeof parsed.expiresAt !== 'number' || parsed.expiresAt <= Date.now()) return null;
    if (parsed.mode === 'private') return { mode: 'private', expiresAt: parsed.expiresAt };
    if (
      parsed.mode === 'challenge' &&
      typeof parsed.pendingMessage === 'string' &&
      parsed.pendingMessage.length <= chatbotConfig.maxMessageLength
    ) {
      return { mode: 'challenge', pendingMessage: parsed.pendingMessage, expiresAt: parsed.expiresAt };
    }
  } catch {
    return null;
  }
  return null;
}

async function askGemini(apiKey: string, message: string, systemInstruction: string) {
  const response = await fetch('https://generativelanguage.googleapis.com/v1beta/interactions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
    body: JSON.stringify({
      model: chatbotConfig.model,
      input: message,
      system_instruction: systemInstruction,
      store: true,
      generation_config: { max_output_tokens: 420 },
    }),
  });
  if (!response.ok) {
    console.error('Gemini API error', { status: response.status, statusText: response.statusText });
    return { error: 'The portfolio assistant could not answer right now.' } as const;
  }
  const payload = (await response.json()) as GeminiInteractionResponse;
  const answer = payload.steps
    ?.filter((step) => step.type === 'model_output')
    .flatMap((step) => step.content ?? [])
    .filter((content) => content.type === 'text' && typeof content.text === 'string')
    .map((content) => content.text as string)
    .join('\n')
    .trim();
  return answer ? ({ answer } as const) : ({ error: 'The portfolio assistant returned an empty response.' } as const);
}

async function aiResponse(apiKey: string, message: string, instructions: string, extra: Record<string, unknown> = {}) {
  try {
    const result = await askGemini(apiKey, message, instructions);
    if ('error' in result) return NextResponse.json({ error: result.error }, { status: 502 });
    return NextResponse.json({ message: result.answer, ...extra });
  } catch (error) {
    console.error('Gemini request failed', error);
    return NextResponse.json({ error: 'The portfolio assistant could not answer right now.' }, { status: 502 });
  }
}

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return NextResponse.json({ error: 'The portfolio assistant is not configured yet.' }, { status: 503 });

  const body: unknown = await request.json().catch(() => null);
  if (!body || typeof body !== 'object') return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  const requestBody = body as { message?: unknown; stateToken?: unknown };
  const message = typeof requestBody.message === 'string' ? requestBody.message.trim() : '';
  const stateToken = typeof requestBody.stateToken === 'string' ? requestBody.stateToken : undefined;
  if (!message) return NextResponse.json({ error: 'Please enter a question.' }, { status: 400 });
  if (message.length > chatbotConfig.maxMessageLength) {
    return NextResponse.json({ error: 'Your question is too long.' }, { status: 400 });
  }

  const secretCode = process.env.SECRET_CODE?.trim();
  const privateInstructions = process.env.PRIVATE_CHATBOT_INSTRUCTIONS?.trim();
  const signingSecret = process.env.CHAT_SESSION_SECRET?.trim();
  const normalizedMessage = normalize(message);

  if (secretCode && privateInstructions && signingSecret) {
    const state = await readStateToken(stateToken, signingSecret);
    if (state?.mode === 'private') {
      return aiResponse(apiKey, message, privateInstructions, {
        stateToken: await createStateToken({ mode: 'private', expiresAt: Date.now() + PRIVATE_TTL_MS }, signingSecret),
      });
    }
    if (state?.mode === 'challenge') {
      if (normalize(secretCode) === normalizedMessage) {
        return aiResponse(apiKey, state.pendingMessage, privateInstructions, {
          stateToken: await createStateToken(
            { mode: 'private', expiresAt: Date.now() + PRIVATE_TTL_MS },
            signingSecret,
          ),
        });
      }
      return aiResponse(apiKey, message, chatbotInstructions, { clearState: true });
    }
    if (getChatTriggers().includes(normalizedMessage)) {
      return NextResponse.json({
        message: "What's your name?",
        stateToken: await createStateToken(
          { mode: 'challenge', pendingMessage: message, expiresAt: Date.now() + CHALLENGE_TTL_MS },
          signingSecret,
        ),
      });
    }
    if (normalize(secretCode) === normalizedMessage) {
      return NextResponse.json({
        message: 'That value can only be used after a private-mode prompt.',
        clearState: true,
      });
    }
  }

  return aiResponse(apiKey, message, chatbotInstructions, stateToken ? { clearState: true } : {});
}
