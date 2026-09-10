import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { PortfolioChat } from '@/components/chat/PortfolioChat';

const fetchMock = vi.fn();

afterEach(() => {
  fetchMock.mockReset();
  vi.unstubAllGlobals();
});

describe('PortfolioChat', () => {
  it('opens with portfolio suggestions and closes accessibly', () => {
    render(<PortfolioChat />);

    const launcher = screen.getByRole('button', { name: 'Open portfolio assistant' });
    fireEvent.click(launcher);

    expect(screen.getByRole('region', { name: 'Portfolio assistant' })).toBeInTheDocument();
    expect(screen.getByText('What makes Kuldip a strong Senior React Engineer?')).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: "Message Kuldip's portfolio assistant" })).toHaveFocus();

    const panel = screen.getByRole('region', { name: 'Portfolio assistant' });
    fireEvent.click(within(panel).getByRole('button', { name: 'Close portfolio assistant' }));
    expect(screen.queryByRole('region', { name: 'Portfolio assistant' })).not.toBeInTheDocument();
  });

  it('closes when the user clicks outside the open assistant', () => {
    render(
      <div>
        <button type="button">Outside target</button>
        <PortfolioChat />
      </div>,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Open portfolio assistant' }));
    expect(screen.getByRole('region', { name: 'Portfolio assistant' })).toBeInTheDocument();

    fireEvent.pointerDown(screen.getByRole('button', { name: 'Outside target' }));

    expect(screen.queryByRole('region', { name: 'Portfolio assistant' })).not.toBeInTheDocument();
  });

  it('sends a question and renders the assistant response', async () => {
    vi.stubGlobal('fetch', fetchMock);
    fetchMock.mockResolvedValue({
      ok: true,
      json: async () => ({ message: 'Kuldip specializes in React, Next.js and scalable frontend architecture.' }),
    });

    render(<PortfolioChat />);
    fireEvent.click(screen.getByRole('button', { name: 'Open portfolio assistant' }));

    const input = screen.getByRole('textbox', { name: "Message Kuldip's portfolio assistant" });
    fireEvent.change(input, { target: { value: 'What does Kuldip specialize in?' } });
    fireEvent.click(screen.getByRole('button', { name: 'Send message' }));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith('/api/chat', expect.objectContaining({ method: 'POST' }));
    });

    expect(await screen.findByText(/Kuldip specializes in React/)).toBeInTheDocument();
  });

  it('shows API errors without losing the conversation', async () => {
    vi.stubGlobal('fetch', fetchMock);
    fetchMock.mockResolvedValue({
      ok: false,
      json: async () => ({ error: 'The portfolio assistant is not configured yet.' }),
    });

    render(<PortfolioChat />);
    fireEvent.click(screen.getByRole('button', { name: 'Open portfolio assistant' }));
    fireEvent.click(screen.getByRole('button', { name: 'Tell me about Servora.' }));

    expect(await screen.findByRole('alert')).toHaveTextContent('not configured');
    expect(screen.getByText('Tell me about Servora.')).toBeInTheDocument();
  });
});
