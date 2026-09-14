import { AppIcon } from '@/components/portfolio/AppIcon';
import { Button } from '@/components/ui';
import { chatbotConfig } from '@/constants/chatbot';
import { CHAT_UI_COPY } from '@/constants/pages/chat.constants';

import type { FormEvent, RefObject } from 'react';

export const ChatComposer = ({
  input,
  loading,
  inputRef,
  onInput,
  onSubmit,
}: {
  input: string;
  loading: boolean;
  inputRef: RefObject<HTMLInputElement | null>;
  onInput: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) => (
  <div className="border-t border-border bg-surface p-4 sm:p-5">
    <form
      className="flex items-center gap-2 rounded-2xl border border-border-strong bg-surface-raised p-1.5 pl-4 transition focus-within:border-primary focus-within:ring-3 focus-within:ring-primary-soft"
      onSubmit={onSubmit}
    >
      <input
        aria-label={CHAT_UI_COPY.inputLabel}
        className="min-w-0 flex-1 bg-transparent py-2 text-[14px] text-foreground outline-none placeholder:text-foreground-muted"
        maxLength={chatbotConfig.maxMessageLength}
        onChange={(event) => onInput(event.target.value)}
        placeholder={chatbotConfig.placeholder}
        ref={inputRef}
        value={input}
      />
      <Button aria-label={CHAT_UI_COPY.sendLabel} disabled={!input.trim() || loading} size="icon" type="submit">
        <AppIcon name="arrow-up" className="size-[18px]" strokeWidth={2.2} />
      </Button>
    </form>
    <p className="mt-2.5 text-center text-[10px] tracking-[.04em] text-foreground-muted">{CHAT_UI_COPY.disclaimer}</p>
  </div>
);
