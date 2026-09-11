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
  <div className="border-t border-[#71f6b51a] bg-[#07110f99] p-4">
    <form
      className="flex items-center gap-2 rounded-2xl border border-[#31453f] bg-[#0d1b18] p-1.5 pl-4 transition focus-within:border-[#71f6b58c]"
      onSubmit={onSubmit}
    >
      <input
        aria-label="Message Kuldip's portfolio assistant"
        className="min-w-0 flex-1 bg-transparent py-2 text-[13px] text-[#f2f4ee] outline-none placeholder:text-[#6f8179]"
        maxLength={chatbotConfig.maxMessageLength}
        onChange={(event) => onInput(event.target.value)}
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
      {CHAT_UI_COPY.disclaimer}
    </p>
  </div>
);
