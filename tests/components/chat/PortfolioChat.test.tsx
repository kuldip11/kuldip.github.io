import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { PortfolioChat } from '@/components/chat/PortfolioChat';

const fetchMock = vi.fn();
afterEach(() => {
  fetchMock.mockReset();
  vi.unstubAllGlobals();
});

describe('PortfolioChat', () => {
  it('sends no history and manages one in-memory state token', async () => {
    vi.stubGlobal('fetch', fetchMock);
    fetchMock
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ message: "What's your name?", stateToken: 'challenge' }),
      })
      .mockResolvedValueOnce({ ok: true, json: async () => ({ message: 'Public reply', clearState: true }) })
      .mockResolvedValueOnce({ ok: true, json: async () => ({ message: 'Next reply' }) });
    render(<PortfolioChat />);
    fireEvent.click(screen.getByRole('button', { name: 'Open portfolio assistant' }));
    const input = screen.getByRole('textbox', { name: "Message Kuldip's portfolio assistant" });
    const send = async (value: string, reply: string) => {
      fireEvent.change(input, { target: { value } });
      fireEvent.click(screen.getByRole('button', { name: 'Send message' }));
      await screen.findByText(reply);
    };
    await send('Do you love me', "What's your name?");
    await send('wrong', 'Public reply');
    await send('Next', 'Next reply');
    expect(JSON.parse(fetchMock.mock.calls[0][1].body as string)).toEqual({ message: 'Do you love me' });
    expect(JSON.parse(fetchMock.mock.calls[1][1].body as string)).toEqual({
      message: 'wrong',
      stateToken: 'challenge',
    });
    expect(JSON.parse(fetchMock.mock.calls[2][1].body as string)).toEqual({ message: 'Next' });
  });
});
