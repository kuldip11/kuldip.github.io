import { CHAT_UI_COPY } from '@/constants/pages/chat.constants';
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
    aria-label={CHAT_UI_COPY.dialogLabel}
    aria-modal="false"
    role="dialog"
    className="flex h-[min(650px,calc(100dvh-92px))] w-[min(430px,calc(100vw-24px))] flex-col overflow-hidden rounded-feature border border-border bg-surface shadow-feature max-phone:w-[calc(100vw-24px)]"
  >
    <ChatHeader onClose={onClose} />
    <div className="flex-1 space-y-4 overflow-y-auto bg-surface-raised px-5 py-5 [scrollbar-color:var(--color-border-strong)_transparent] [scrollbar-width:thin] sm:px-6">
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
