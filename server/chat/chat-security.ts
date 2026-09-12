import { NextResponse } from 'next/server';

import { siteConfig } from '@/constants/site';

const MAX_REQUEST_BYTES = 8_192;
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1_000;
const RATE_LIMIT_MAX_REQUESTS = 20;

type RateLimitEntry = { count: number; resetAt: number };
type BodyReadResult = { ok: true; body: unknown } | { ok: false; response: NextResponse<{ error: string }> };

const rateLimitStore = new Map<string, RateLimitEntry>();

const getClientKey = (request: Request) =>
  request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
  request.headers.get('x-real-ip')?.trim() ||
  'unknown';

const getConfiguredOrigin = () => new URL(siteConfig.url).origin;

export const rejectCrossOriginChatRequest = (request: Request) => {
  const origin = request.headers.get('origin');
  if (!origin || origin === getConfiguredOrigin()) return null;

  return NextResponse.json({ error: 'Cross-origin requests are not allowed.' }, { status: 403 });
};

export const rejectOversizedChatRequest = (request: Request) => {
  const rawLength = request.headers.get('content-length');
  const contentLength = rawLength ? Number(rawLength) : 0;

  return Number.isFinite(contentLength) && contentLength > MAX_REQUEST_BYTES
    ? NextResponse.json({ error: 'Request is too large.' }, { status: 413 })
    : null;
};

export const readChatRequestBody = async (request: Request): Promise<BodyReadResult> => {
  if (!request.body) return { ok: true, body: null };

  const reader = request.body.getReader();
  const decoder = new TextDecoder();
  let byteLength = 0;
  let text = '';

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    byteLength += value.byteLength;
    if (byteLength > MAX_REQUEST_BYTES) {
      await reader.cancel();
      return { ok: false, response: NextResponse.json({ error: 'Request is too large.' }, { status: 413 }) };
    }
    text += decoder.decode(value, { stream: true });
  }

  text += decoder.decode();
  try {
    return { ok: true, body: JSON.parse(text) as unknown };
  } catch {
    return { ok: true, body: null };
  }
};

export const enforceChatRateLimit = (request: Request) => {
  const now = Date.now();
  const key = getClientKey(request);
  const current = rateLimitStore.get(key);
  const entry = !current || current.resetAt <= now ? { count: 0, resetAt: now + RATE_LIMIT_WINDOW_MS } : current;

  entry.count += 1;
  rateLimitStore.set(key, entry);

  if (entry.count <= RATE_LIMIT_MAX_REQUESTS) return null;

  const retryAfterSeconds = Math.max(1, Math.ceil((entry.resetAt - now) / 1_000));
  return NextResponse.json(
    { error: 'Too many requests. Please try again shortly.' },
    { status: 429, headers: { 'Retry-After': String(retryAfterSeconds) } },
  );
};
