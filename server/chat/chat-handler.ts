import { NextResponse } from 'next/server';

import { chatbotInstructions } from '@/constants/chatbot';

import { aiResponse } from './chat-response';
import { CHALLENGE_TTL_MS, createStateToken, PRIVATE_TTL_MS, readStateToken } from './chat-state';
import { getChatTriggers, normalizeChatValue, validateChatRequestBody } from './chat-validation';

export const handleChatRequest = async (request: Request) => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return NextResponse.json({ error: 'The portfolio assistant is not configured yet.' }, { status: 503 });

  const body: unknown = await request.json().catch(() => null);
  const validation = validateChatRequestBody(body);
  if (!validation.valid) return NextResponse.json({ error: validation.error }, { status: validation.status });

  const { message, stateToken } = validation.value;
  const secretCode = process.env.SECRET_CODE?.trim();
  const privateInstructions = process.env.PRIVATE_CHATBOT_INSTRUCTIONS?.trim();
  const signingSecret = process.env.CHAT_SESSION_SECRET?.trim();
  const normalizedMessage = normalizeChatValue(message);
  const triggers = getChatTriggers();
  const isPrivateTrigger = triggers.some((trigger) => normalizedMessage.includes(trigger));

  if (secretCode && privateInstructions && signingSecret) {
    const state = await readStateToken(stateToken, signingSecret);

    if (state?.mode === 'private') {
      return aiResponse(apiKey, message, privateInstructions, {
        stateToken: await createStateToken({ mode: 'private', expiresAt: Date.now() + PRIVATE_TTL_MS }, signingSecret),
      });
    }

    if (state?.mode === 'challenge') {
      if (normalizeChatValue(secretCode) === normalizedMessage) {
        return aiResponse(apiKey, state.pendingMessage, privateInstructions, {
          stateToken: await createStateToken(
            { mode: 'private', expiresAt: Date.now() + PRIVATE_TTL_MS },
            signingSecret,
          ),
        });
      }
      return aiResponse(apiKey, message, chatbotInstructions, { clearState: true });
    }

    if (isPrivateTrigger) {
      return NextResponse.json({
        message: "What's your name?",
        stateToken: await createStateToken(
          { mode: 'challenge', pendingMessage: message, expiresAt: Date.now() + CHALLENGE_TTL_MS },
          signingSecret,
        ),
      });
    }

    if (normalizeChatValue(secretCode) === normalizedMessage) {
      return NextResponse.json({
        message: 'That value can only be used after a private-mode prompt.',
        clearState: true,
      });
    }
  }

  return aiResponse(apiKey, message, chatbotInstructions, stateToken ? { clearState: true } : {});
};
