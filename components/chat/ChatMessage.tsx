import type { ChatMessage as ChatMessageType } from '@/types/chat.types';

export const ChatMessage = ({ message }: { message: ChatMessageType }) => {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={
          isUser
            ? 'max-w-[86%] rounded-[20px_20px_6px_20px] bg-primary px-4 py-3 text-[13px] leading-6 text-primary-foreground'
            : 'max-w-[91%] rounded-[6px_20px_20px_20px] border border-border bg-surface-muted px-4 py-3 text-[13px] leading-6 whitespace-pre-wrap text-foreground-secondary'
        }
      >
        {message.content}
      </div>
    </div>
  );
};
