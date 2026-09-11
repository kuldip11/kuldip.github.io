'use client';

import { useEffect, useRef, useState } from 'react';

import { chatbotConfig } from '@/constants/chatbot';
import type { ChatMessage, ChatResponsePayload } from '@/types/chat.types';

import type { FormEvent } from 'react';

const initialMessages: ChatMessage[] = [{ id: 0, role: 'assistant', content: chatbotConfig.greeting }];

export const usePortfolioChat = () => {
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

    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [open]);

  const sendMessage = async (rawMessage: string) => {
    const message = rawMessage.trim();
    if (!message || loading) return;

    const userMessage: ChatMessage = { id: nextId.current++, role: 'user', content: message };
    setMessages((current) => [...current, userMessage]);
    setInput('');
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, stateToken: stateToken || undefined }),
      });
      const payload = (await response.json()) as ChatResponsePayload;
      const responseMessage = payload.message;
      if (!response.ok || !responseMessage)
        throw new Error(payload.error ?? 'The portfolio assistant is unavailable right now.');

      if (payload.stateToken) setStateToken(payload.stateToken);
      else if (payload.clearState) setStateToken('');

      setMessages((current) => [...current, { id: nextId.current++, role: 'assistant', content: responseMessage }]);
    } catch (requestError) {
      setError(
        requestError instanceof Error ? requestError.message : 'The portfolio assistant is unavailable right now.',
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void sendMessage(input);
  };

  return {
    open,
    messages,
    input,
    loading,
    error,
    rootRef,
    endRef,
    inputRef,
    setInput,
    close: () => setOpen(false),
    toggleOpen: () => setOpen((current) => !current),
    sendMessage,
    handleSubmit,
  };
};
