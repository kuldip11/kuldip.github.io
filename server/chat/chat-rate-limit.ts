import { createHash } from 'node:crypto';

import { NextResponse } from 'next/server';

const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1_000;
const RATE_LIMIT_MAX_REQUESTS = 20;
const SHARED_LIMITER_TIMEOUT_MS = 2_000;
const RATE_LIMIT_SCRIPT = `
local count = redis.call('INCR', KEYS[1])
if count == 1 then
  redis.call('PEXPIRE', KEYS[1], ARGV[1])
end
local ttl = redis.call('PTTL', KEYS[1])
return { count, ttl }
`;

type RateLimitEntry = { count: number; resetAt: number };
type RateLimitState = { count: number; resetAt: number };
type UpstashResponse = { result?: [number, number] | null; error?: string };

const rateLimitStore = new Map<string, RateLimitEntry>();

const trustForwardedHeaders = () =>
  process.env.VERCEL === '1' || process.env.TRUST_PROXY_HEADERS?.trim().toLowerCase() === 'true';

const getClientIdentifier = (request: Request) => {
  if (!trustForwardedHeaders()) return 'untrusted-proxy';

  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip')?.trim() ||
    'unknown'
  );
};

const getRateLimitKey = (request: Request) => {
  const digest = createHash('sha256').update(getClientIdentifier(request)).digest('hex').slice(0, 32);
  return `portfolio:chat:rate-limit:${digest}`;
};

const getLocalRateLimitState = (key: string): RateLimitState => {
  const now = Date.now();
  const current = rateLimitStore.get(key);
  const entry = !current || current.resetAt <= now ? { count: 0, resetAt: now + RATE_LIMIT_WINDOW_MS } : current;

  entry.count += 1;
  rateLimitStore.set(key, entry);

  return entry;
};

const getSharedRateLimitState = async (key: string): Promise<RateLimitState | null> => {
  const url = process.env.UPSTASH_REDIS_REST_URL?.trim().replace(/\/$/, '');
  const token = process.env.UPSTASH_REDIS_REST_TOKEN?.trim();
  if (!url || !token) return null;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(['EVAL', RATE_LIMIT_SCRIPT, '1', key, String(RATE_LIMIT_WINDOW_MS)]),
      signal: AbortSignal.timeout(SHARED_LIMITER_TIMEOUT_MS),
      cache: 'no-store',
    });

    if (!response.ok) return null;

    const payload = (await response.json()) as UpstashResponse;
    if (!payload.result || payload.error) return null;

    const [count, ttl] = payload.result;
    if (!Number.isFinite(count) || !Number.isFinite(ttl)) return null;

    const remainingMs = Math.max(1, ttl);
    return { count, resetAt: Date.now() + remainingMs };
  } catch {
    return null;
  }
};

const createRateLimitResponse = (state: RateLimitState) => {
  if (state.count <= RATE_LIMIT_MAX_REQUESTS) return null;

  const retryAfterSeconds = Math.max(1, Math.ceil((state.resetAt - Date.now()) / 1_000));
  return NextResponse.json(
    { error: 'Too many requests. Please try again shortly.' },
    {
      status: 429,
      headers: {
        'Retry-After': String(retryAfterSeconds),
        'X-RateLimit-Limit': String(RATE_LIMIT_MAX_REQUESTS),
        'X-RateLimit-Remaining': '0',
      },
    },
  );
};

export const enforceChatRateLimit = async (request: Request) => {
  const key = getRateLimitKey(request);
  const sharedState = await getSharedRateLimitState(key);
  const state = sharedState ?? getLocalRateLimitState(key);

  return createRateLimitResponse(state);
};

export const resetChatRateLimitForTests = () => {
  if (process.env.NODE_ENV === 'test') rateLimitStore.clear();
};
