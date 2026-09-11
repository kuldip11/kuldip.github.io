import { chatbotConfig } from '@/constants/chatbot';
import type { GateState } from '@/types/chat.types';

const encoder = new TextEncoder();
export const CHALLENGE_TTL_MS = 5 * 60 * 1000;
export const PRIVATE_TTL_MS = 30 * 60 * 1000;

const sign = async (value: string, signingSecret: string) => {
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(signingSecret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  return new Uint8Array(await crypto.subtle.sign('HMAC', key, encoder.encode(value)));
};

const toBase64Url = (value: Uint8Array | string) => Buffer.from(value).toString('base64url');

const timingSafeEqual = (left: Uint8Array, right: Uint8Array) => {
  if (left.length !== right.length) return false;
  let difference = 0;
  for (let index = 0; index < left.length; index += 1) difference |= left[index] ^ right[index];
  return difference === 0;
};

export const createStateToken = async (state: GateState, signingSecret: string) => {
  const payload = toBase64Url(JSON.stringify(state));
  return `${payload}.${toBase64Url(await sign(payload, signingSecret))}`;
};

export const readStateToken = async (token: string | undefined, signingSecret: string): Promise<GateState | null> => {
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
};
