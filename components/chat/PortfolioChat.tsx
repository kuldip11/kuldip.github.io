'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';

import { chatbotConfig, chatbotSuggestions } from '@/constants/chatbot';

type ChatMessage = {
  id: number;
  role: 'assistant' | 'user';
  content: string;
};

const initialMessages: ChatMessage[] = [
  {
    id: 0,
    role: 'assistant',
    content: chatbotConfig.greeting,
  },
];

export function PortfolioChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [stateToken, setStateToken] = useState('');
  const nextId = useRef(1);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    endRef.current?.scrollIntoView?.({ behavior: 'smooth', block: 'nearest' });
  }, [messages, loading, open]);

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [open]);

  async function sendMessage(rawMessage: string) {
    const message = rawMessage.trim();
    if (!message || loading) return;

    const userMessage: ChatMessage = {
      id: nextId.current++,
      role: 'user',
      content: message,
    };

    setMessages((current) => [...current, userMessage]);
    setInput('');
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message,
          stateToken: stateToken || undefined,
        }),
      });

      const payload = (await response.json()) as {
        message?: string;
        error?: string;
        stateToken?: string;
        clearState?: boolean;
      };
      if (!response.ok || !payload.message) {
        throw new Error(payload.error ?? 'The portfolio assistant is unavailable right now.');
      }

      const responseMessage = payload.message;

      if (payload.stateToken) setStateToken(payload.stateToken);
      else if (payload.clearState) setStateToken('');

      setMessages((current) => [
        ...current,
        {
          id: nextId.current++,
          role: 'assistant',
          content: responseMessage,
        },
      ]);
    } catch (requestError) {
      setError(
        requestError instanceof Error ? requestError.message : 'The portfolio assistant is unavailable right now.',
      );
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  return (
    <div
      ref={rootRef}
      className="fixed right-5 bottom-5 z-[80] flex flex-col items-end gap-3 max-[650px]:right-3 max-[650px]:bottom-3"
    >
      {open ? (
        <section
          aria-label="Portfolio assistant"
          className="flex h-[min(690px,calc(100vh-96px))] w-[min(430px,calc(100vw-24px))] flex-col overflow-hidden rounded-[30px] border border-[#71f6b52e] bg-[#091613f2] shadow-[0_32px_90px_rgba(0,0,0,.55)] backdrop-blur-2xl"
        >
          <div className="relative overflow-hidden border-b border-[#71f6b51f] px-5 pt-5 pb-4">
            <div className="pointer-events-none absolute -top-20 -right-14 size-44 rounded-full bg-[#71f6b51f] blur-3xl" />
            <div className="relative flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="relative grid size-11 shrink-0 place-items-center rounded-2xl border border-[#71f6b54f] bg-[#71f6b511] font-mono text-xs font-bold text-[#71f6b5]">
                  KS
                  <span className="absolute -right-0.5 -bottom-0.5 size-3 rounded-full border-2 border-[#091613] bg-[#71f6b5]" />
                </div>
                <div>
                  <p className="font-mono text-[9px] tracking-[.14em] text-[#71f6b5] uppercase">
                    {chatbotConfig.eyebrow}
                  </p>
                  <h2 className="mt-1 text-[17px] font-semibold tracking-[-.02em] text-[#f2f4ee]">
                    {chatbotConfig.title}
                  </h2>
                  <p className="mt-0.5 text-[11px] text-[#8fa29a]">Grounded in this portfolio</p>
                </div>
              </div>
              <button
                aria-label="Close portfolio assistant"
                className="grid size-9 shrink-0 place-items-center rounded-full border border-[#31453f] text-lg text-[#a9b8b1] transition hover:border-[#71f6b5] hover:text-[#71f6b5]"
                onClick={() => setOpen(false)}
                type="button"
              >
                ×
              </button>
            </div>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5 [scrollbar-color:#39524a_transparent] [scrollbar-width:thin]">
            {messages.map((message) => (
              <div className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`} key={message.id}>
                <div
                  className={
                    message.role === 'user'
                      ? 'max-w-[86%] rounded-[20px_20px_6px_20px] bg-[#71f6b5] px-4 py-3 text-[13px] leading-6 text-[#07110f] shadow-[0_10px_30px_rgba(113,246,181,.12)]'
                      : 'max-w-[91%] rounded-[6px_20px_20px_20px] border border-[#263b34] bg-[#10201c] px-4 py-3 text-[13px] leading-6 whitespace-pre-wrap text-[#dce5e0]'
                  }
                >
                  {message.content}
                </div>
              </div>
            ))}

            {messages.length === 1 ? (
              <div className="grid gap-2 pt-1">
                {chatbotSuggestions.map((suggestion) => (
                  <button
                    className="group flex items-center justify-between gap-3 rounded-2xl border border-[#263b34] bg-[#0c1a17] px-4 py-3 text-left text-xs leading-5 text-[#b9c7c0] transition hover:border-[#71f6b55c] hover:bg-[#10221d] hover:text-[#f2f4ee]"
                    key={suggestion}
                    onClick={() => void sendMessage(suggestion)}
                    type="button"
                  >
                    <span>{suggestion}</span>
                    <span
                      aria-hidden="true"
                      className="text-[#71f6b5] transition-transform group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </button>
                ))}
              </div>
            ) : null}

            {loading ? (
              <div className="flex justify-start" role="status" aria-label="Kuldip assistant is thinking">
                <div className="flex items-center gap-1.5 rounded-[6px_20px_20px_20px] border border-[#263b34] bg-[#10201c] px-4 py-4">
                  {[0, 1, 2].map((dot) => (
                    <span
                      className="size-1.5 animate-pulse rounded-full bg-[#71f6b5]"
                      key={dot}
                      style={{ animationDelay: `${dot * 140}ms` }}
                    />
                  ))}
                </div>
              </div>
            ) : null}

            {error ? (
              <p
                className="rounded-xl border border-[#ff927b3d] bg-[#ff927b0d] px-3 py-2 text-xs leading-5 text-[#ffb3a4]"
                role="alert"
              >
                {error}
              </p>
            ) : null}
            <div ref={endRef} />
          </div>

          <div className="border-t border-[#71f6b51a] bg-[#07110f99] p-4">
            <form
              className="flex items-center gap-2 rounded-2xl border border-[#31453f] bg-[#0d1b18] p-1.5 pl-4 transition focus-within:border-[#71f6b58c]"
              onSubmit={handleSubmit}
            >
              <input
                aria-label="Message Kuldip's portfolio assistant"
                className="min-w-0 flex-1 bg-transparent py-2 text-[13px] text-[#f2f4ee] outline-none placeholder:text-[#6f8179]"
                maxLength={chatbotConfig.maxMessageLength}
                onChange={(event) => setInput(event.target.value)}
                placeholder={chatbotConfig.placeholder}
                ref={inputRef}
                value={input}
              />
              <button
                aria-label="Send message"
                className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#71f6b5] text-lg font-bold text-[#07110f] transition hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-40"
                disabled={!input.trim() || loading}
                type="submit"
              >
                ↑
              </button>
            </form>
            <p className="mt-2 text-center font-mono text-[8px] tracking-[.08em] text-[#64766e] uppercase">
              AI responses · Portfolio context only
            </p>
          </div>
        </section>
      ) : null}

      <button
        aria-expanded={open}
        aria-label={open ? 'Close portfolio assistant' : 'Open portfolio assistant'}
        className="group flex items-center gap-3 rounded-full border border-[#71f6b54a] bg-[#0a1714ee] py-2.5 pr-4 pl-2.5 text-[#f2f4ee] shadow-[0_18px_55px_rgba(0,0,0,.42)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-[#71f6b5] hover:bg-[#10221d]"
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        <span className="relative grid size-9 place-items-center rounded-full bg-[#71f6b5] font-mono text-[10px] font-bold text-[#07110f]">
          AI
          <span className="absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full border-2 border-[#0a1714] bg-[#f2f4ee]" />
        </span>
        <span className="text-left">
          <span className="block text-xs font-semibold">Ask about Kuldip</span>
          <span className="block font-mono text-[8px] tracking-[.08em] text-[#82958c] uppercase">
            Experience · projects · skills
          </span>
        </span>
      </button>
    </div>
  );
}
