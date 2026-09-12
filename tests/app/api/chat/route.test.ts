import { afterEach, describe, expect, it, vi } from 'vitest';

import { POST } from '@/app/api/chat/route';

const fetchMock = vi.fn();
const names = [
  'GEMINI_API_KEY',
  'SECRET_TEXT',
  'SECRET_CODE',
  'PRIVATE_CHATBOT_INSTRUCTIONS',
  'CHAT_SESSION_SECRET',
] as const;
const originals = Object.fromEntries(names.map((name) => [name, process.env[name]]));
const geminiResponse = (text: string) => ({
  ok: true,
  json: async () => ({ steps: [{ type: 'model_output', content: [{ type: 'text', text }] }] }),
});
const request = (message: string, extra = {}) =>
  POST(
    new Request('http://localhost/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message, ...extra }),
    }),
  );

const configure = () => {
  process.env.GEMINI_API_KEY = 'test-key';
  process.env.SECRET_TEXT = 'private trigger one, private trigger two';
  process.env.SECRET_CODE = 'private-code';
  process.env.PRIVATE_CHATBOT_INSTRUCTIONS = 'Private instructions.';
  process.env.CHAT_SESSION_SECRET = 'independent-long-test-signing-secret';
  vi.stubGlobal('fetch', fetchMock);
};

afterEach(() => {
  fetchMock.mockReset();
  vi.unstubAllGlobals();
  for (const name of names) {
    const original = originals[name];
    if (original === undefined) delete process.env[name];
    else process.env[name] = original;
  }
});

describe('POST /api/chat', () => {
  it('uses normalized substring triggers without calling Gemini', async () => {
    configure();

    const payload = await (await request('  PRIVATE   TRIGGER ONE  ')).json();

    expect(payload).toMatchObject({ message: "What's your name?" });
    expect(payload.stateToken).toBeTruthy();
    expect(fetchMock).not.toHaveBeenCalled();

    fetchMock.mockResolvedValue(geminiResponse('Public'));

    const embeddedTrigger = await (await request('Hey, private trigger one?')).json();

    expect(embeddedTrigger).toMatchObject({ message: "What's your name?" });
    expect(embeddedTrigger.stateToken).toBeTruthy();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('unlocks private mode without forwarding the code or storing provider interactions', async () => {
    configure();

    const challenge = await (await request('Private trigger one')).json();

    fetchMock.mockResolvedValue(geminiResponse('Private response.'));

    const unlocked = await (
      await request('private-code', {
        stateToken: challenge.stateToken,
        history: ['ignored'],
      })
    ).json();

    const sent = JSON.parse(fetchMock.mock.calls[0][1].body as string);

    expect(unlocked.stateToken).toBeTruthy();
    expect(sent.input).toBe('Private trigger one');
    expect(sent.system_instruction).toBe('Private instructions.');
    expect(sent.store).toBe(false);
    expect(JSON.stringify(sent)).not.toContain('private-code');
  });

  it('falls back to professional mode after an incorrect answer', async () => {
    configure();

    const challenge = await (await request('Private trigger two')).json();

    fetchMock.mockResolvedValue(geminiResponse('Public response.'));

    const payload = await (
      await request('wrong', {
        stateToken: challenge.stateToken,
      })
    ).json();

    expect(payload.clearState).toBe(true);
    expect(JSON.parse(fetchMock.mock.calls[0][1].body as string).system_instruction).toContain('professional profile');
  });

  it('rejects oversized request bodies before parsing', async () => {
    configure();
    const response = await POST(
      new Request('http://localhost/api/chat', {
        method: 'POST',
        headers: { 'content-length': '9000', 'x-forwarded-for': 'oversize-test' },
        body: JSON.stringify({ message: 'hello' }),
      }),
    );

    expect(response.status).toBe(413);
    expect(await response.json()).toEqual({ error: 'Request is too large.' });
  });

  it('rejects cross-origin browser requests before provider work', async () => {
    configure();
    const response = await POST(
      new Request('http://localhost/api/chat', {
        method: 'POST',
        headers: { origin: 'https://example.invalid', 'x-forwarded-for': 'cross-origin-test' },
        body: JSON.stringify({ message: 'hello' }),
      }),
    );

    expect(response.status).toBe(403);
    expect(await response.json()).toEqual({ error: 'Cross-origin requests are not allowed.' });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('rejects a streamed oversized body even without a content-length header', async () => {
    configure();
    const response = await POST(
      new Request('http://localhost/api/chat', {
        method: 'POST',
        headers: { 'x-forwarded-for': 'stream-oversize-test' },
        body: JSON.stringify({ message: 'x'.repeat(9_000) }),
      }),
    );

    expect(response.status).toBe(413);
    expect(await response.json()).toEqual({ error: 'Request is too large.' });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('rejects malformed JSON without calling Gemini', async () => {
    configure();
    const response = await POST(
      new Request('http://localhost/api/chat', {
        method: 'POST',
        headers: { 'x-forwarded-for': 'invalid-json-test' },
        body: '{not-json',
      }),
    );

    expect(response.status).toBe(400);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('returns a safe gateway error when Gemini fails', async () => {
    configure();
    fetchMock.mockRejectedValue(new Error('provider unavailable'));

    const response = await POST(
      new Request('http://localhost/api/chat', {
        method: 'POST',
        headers: { 'x-forwarded-for': 'provider-failure-test' },
        body: JSON.stringify({ message: 'Tell me about React' }),
      }),
    );

    expect(response.status).toBe(502);
    expect(await response.json()).toEqual({ error: 'The portfolio assistant could not answer right now.' });
  });

  it('rate limits repeated requests from the same client', async () => {
    configure();
    fetchMock.mockResolvedValue(geminiResponse('Public response.'));

    let response: Response | undefined;
    for (let index = 0; index < 21; index += 1) {
      response = await POST(
        new Request('http://localhost/api/chat', {
          method: 'POST',
          headers: { 'x-forwarded-for': 'rate-limit-test' },
          body: JSON.stringify({ message: `Question ${index}` }),
        }),
      );
    }

    expect(response?.status).toBe(429);
    expect(response?.headers.get('Retry-After')).toBeTruthy();
  });
});
