import { CHAT_UI_COPY } from '@/constants/pages/chat.constants';

export const ChatTypingIndicator = () => (
  <div className="flex justify-start" role="status" aria-label={CHAT_UI_COPY.thinkingLabel}>
    <div className="flex items-center gap-1.5 rounded-[6px_20px_20px_20px] border border-border bg-surface-muted px-4 py-4">
      {[0, 1, 2].map((dot) => (
        <span
          className="size-1.5 animate-pulse rounded-full bg-primary motion-reduce:animate-none"
          key={dot}
          style={{ animationDelay: `${dot * 140}ms` }}
        />
      ))}
    </div>
  </div>
);
