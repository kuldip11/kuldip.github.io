'use client';

import dynamic from 'next/dynamic';

import { usePortfolioChat } from '@/hooks/usePortfolioChat';

import { ChatLauncher } from './ChatLauncher';

const ChatPanel = dynamic(() => import('./ChatPanel').then((module) => module.ChatPanel));

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
    launcherRef,
    setInput,
    close,
    toggleOpen,
    sendMessage,
    handleSubmit,
  } = usePortfolioChat();

  return (
    <div
      ref={rootRef}
      className="fixed right-5 bottom-5 z-[80] flex flex-col items-end gap-3 max-phone:right-3 max-phone:bottom-3"
    >
      {open ? (
        <ChatPanel
          messages={messages}
          input={input}
          loading={loading}
          error={error}
          endRef={endRef}
          inputRef={inputRef}
          onClose={close}
          onInput={setInput}
          onSubmit={handleSubmit}
          onSuggestion={(suggestion) => void sendMessage(suggestion)}
        />
      ) : null}
      <ChatLauncher open={open} onToggle={toggleOpen} launcherRef={launcherRef} />
    </div>
  );
};
