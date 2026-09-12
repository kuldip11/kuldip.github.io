import type { ChatMessage as ChatMessageType } from '@/types/chat.types';

import { ChatComposer } from './ChatComposer';
import { ChatError } from './ChatError';
import { ChatHeader } from './ChatHeader';
import { ChatMessage } from './ChatMessage';
import { ChatSuggestions } from './ChatSuggestions';
import { ChatTypingIndicator } from './ChatTypingIndicator';

import type { FormEvent, RefObject } from 'react';

type ChatPanelProps = Readonly<{
  messages: readonly ChatMessageType[];
  input: string;
  loading: boolean;
  error: string;
  endRef: RefObject<HTMLDivElement | null>;
  inputRef: RefObject<HTMLInputElement | null>;
  onClose: () => void;
  onInput: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onSuggestion: (suggestion: string) => void;
}>;

export const ChatPanel = ({
  messages,
  input,
  loading,
  error,
  endRef,
  inputRef,
  onClose,
  onInput,
  onSubmit,
  onSuggestion,
}: ChatPanelProps) => (
  <section
    id="portfolio-assistant-dialog"
    aria-label="Portfolio assistant"
    aria-modal="false"
    role="dialog"
    className="flex h-[min(690px,calc(100vh-96px))] w-[min(430px,calc(100vw-24px))] flex-col overflow-hidden rounded-[30px] border border-[#71f6b52e] bg-[#091613f2] shadow-[0_32px_90px_rgba(0,0,0,.55)] backdrop-blur-2xl"
  >
    <ChatHeader onClose={onClose} />
    <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5 [scrollbar-color:#39524a_transparent] [scrollbar-width:thin]">
      {messages.map((message) => (
        <ChatMessage message={message} key={message.id} />
      ))}
      {messages.length === 1 ? <ChatSuggestions onSelect={onSuggestion} /> : null}
      {loading ? <ChatTypingIndicator /> : null}
      {error ? <ChatError error={error} /> : null}
      <div ref={endRef} />
    </div>
    <ChatComposer input={input} loading={loading} inputRef={inputRef} onInput={onInput} onSubmit={onSubmit} />
  </section>
);
