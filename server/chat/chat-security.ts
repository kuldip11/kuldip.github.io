import { NextResponse } from 'next/server';

import { siteConfig } from '@/constants/site';

const MAX_REQUEST_BYTES = 8_192;

type BodyReadResult = { ok: true; body: unknown } | { ok: false; response: NextResponse<{ error: string }> };

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
