'use client';

import { usePortfolioChat } from '@/hooks/usePortfolioChat';

import { ChatComposer } from './ChatComposer';
import { ChatError } from './ChatError';
import { ChatHeader } from './ChatHeader';
import { ChatLauncher } from './ChatLauncher';
import { ChatMessage } from './ChatMessage';
import { ChatSuggestions } from './ChatSuggestions';
import { ChatTypingIndicator } from './ChatTypingIndicator';

export const PortfolioChat = () => {
  const {
    open,
    messages,
    input,
    loading,
    error,
    rootRef,
    endRef,
    inputRef,
    setInput,
    close,
    toggleOpen,
    sendMessage,
    handleSubmit,
  } = usePortfolioChat();

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
          <ChatHeader onClose={close} />
          <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5 [scrollbar-color:#39524a_transparent] [scrollbar-width:thin]">
            {messages.map((message) => (
              <ChatMessage message={message} key={message.id} />
            ))}
            {messages.length === 1 ? <ChatSuggestions onSelect={(suggestion) => void sendMessage(suggestion)} /> : null}
            {loading ? <ChatTypingIndicator /> : null}
            {error ? <ChatError error={error} /> : null}
            <div ref={endRef} />
          </div>
          <ChatComposer
            input={input}
            loading={loading}
            inputRef={inputRef}
            onInput={setInput}
            onSubmit={handleSubmit}
          />
        </section>
      ) : null}
      <ChatLauncher open={open} onToggle={toggleOpen} />
    </div>
  );
};
