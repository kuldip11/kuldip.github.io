import { afterEach, describe, expect, it, vi } from 'vitest';

import { POST } from '@/app/api/chat/route';

const fetchMock = vi.fn();
const originalApiKey = process.env.GEMINI_API_KEY;

afterEach(() => {
  fetchMock.mockReset();
  vi.unstubAllGlobals();
  if (originalApiKey === undefined) delete process.env.GEMINI_API_KEY;
  else process.env.GEMINI_API_KEY = originalApiKey;
});

describe('POST /api/chat', () => {
  it('returns 503 when the Gemini key is missing', async () => {
    delete process.env.GEMINI_API_KEY;

    const response = await POST(
      new Request('http://localhost/api/chat', {
        method: 'POST',
        body: JSON.stringify({ message: 'Tell me about Kuldip.' }),
      }),
    );

    expect(response.status).toBe(503);
    await expect(response.json()).resolves.toEqual({ error: 'The portfolio assistant is not configured yet.' });
  });

  it('validates empty messages', async () => {
    process.env.GEMINI_API_KEY = 'test-key';

    const response = await POST(
      new Request('http://localhost/api/chat', {
        method: 'POST',
        body: JSON.stringify({ message: '   ' }),
      }),
    );

    expect(response.status).toBe(400);
  });

  it('logs Gemini upstream errors without exposing them to the client', async () => {
    process.env.GEMINI_API_KEY = 'test-key';
    vi.stubGlobal('fetch', fetchMock);
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => undefined);

    fetchMock.mockResolvedValue({
      ok: false,
      status: 429,
      statusText: 'Too Many Requests',
      text: async () => '{"error":{"message":"quota exceeded"}}',
    });

    const response = await POST(
      new Request('http://localhost/api/chat', {
        method: 'POST',
        body: JSON.stringify({ message: 'Who is Kuldip?' }),
      }),
    );

    expect(response.status).toBe(502);
    await expect(response.json()).resolves.toEqual({
      error: 'The portfolio assistant could not answer right now.',
    });
    expect(consoleError).toHaveBeenCalledWith('Gemini API error', {
      status: 429,
      statusText: 'Too Many Requests',
      body: '{"error":{"message":"quota exceeded"}}',
    });

    consoleError.mockRestore();
  });

  it('returns the text produced by Gemini', async () => {
    process.env.GEMINI_API_KEY = 'test-key';
    vi.stubGlobal('fetch', fetchMock);
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({
        steps: [
          {
            type: 'model_output',
            content: [{ type: 'text', text: 'Kuldip is a Senior Frontend Engineer.' }],
          },
        ],
      }),
    });

    const response = await POST(
      new Request('http://localhost/api/chat', {
        method: 'POST',
        body: JSON.stringify({ message: 'Who is Kuldip?' }),
      }),
    );

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ message: 'Kuldip is a Senior Frontend Engineer.' });
    expect(fetchMock).toHaveBeenCalledWith(
      'https://generativelanguage.googleapis.com/v1beta/interactions',
      expect.objectContaining({
        method: 'POST',
        headers: expect.objectContaining({ 'x-goog-api-key': 'test-key' }),
        body: expect.stringContaining('gemini-3.5-flash-lite'),
      }),
    );
  });
});
