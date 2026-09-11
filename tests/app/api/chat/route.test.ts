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

function configure() {
  process.env.GEMINI_API_KEY = 'test-key';
  process.env.SECRET_TEXT = 'private trigger one, private trigger two';
  process.env.SECRET_CODE = 'private-code';
  process.env.PRIVATE_CHATBOT_INSTRUCTIONS = 'Private instructions.';
  process.env.CHAT_SESSION_SECRET = 'independent-long-test-signing-secret';
  vi.stubGlobal('fetch', fetchMock);
}

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

  it('unlocks private mode without forwarding the code', async () => {
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
});
