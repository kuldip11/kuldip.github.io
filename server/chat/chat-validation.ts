import { chatbotConfig } from '@/constants/chatbot';

export type ValidChatRequest = { readonly message: string; readonly stateToken?: string };
export type ChatRequestValidation =
  | { readonly valid: true; readonly value: ValidChatRequest }
  | { readonly valid: false; readonly error: string; readonly status: 400 };

export const normalizeChatValue = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, '')
    .replace(/\s+/g, ' ')
    .trim();

export const getChatTriggers = () => (process.env.SECRET_TEXT ?? '').split(',').map(normalizeChatValue).filter(Boolean);

export const validateChatRequestBody = (body: unknown): ChatRequestValidation => {
  if (!body || typeof body !== 'object') return { valid: false, error: 'Invalid request.', status: 400 };

  const requestBody = body as { message?: unknown; stateToken?: unknown };
  const message = typeof requestBody.message === 'string' ? requestBody.message.trim() : '';
  const stateToken = typeof requestBody.stateToken === 'string' ? requestBody.stateToken : undefined;

  if (!message) return { valid: false, error: 'Please enter a question.', status: 400 };
  if (message.length > chatbotConfig.maxMessageLength)
    return { valid: false, error: 'Your question is too long.', status: 400 };

  return { valid: true, value: { message, stateToken } };
};
