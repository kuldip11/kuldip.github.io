import { AppIcon } from '@/components/portfolio/AppIcon';
import { Button } from '@/components/ui';
import { chatbotConfig } from '@/constants/chatbot';
import { CHAT_UI_COPY } from '@/constants/pages/chat.constants';

export const ChatHeader = ({ onClose }: { onClose: () => void }) => (
  <div className="border-b border-border bg-surface px-5 py-4 sm:px-6 sm:py-5">
    <div className="flex items-start justify-between gap-4">
      <div className="flex min-w-0 items-center gap-3">
        <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary">
          <AppIcon name="message-circle" className="size-5" strokeWidth={2} />
        </div>
        <div className="min-w-0">
          <p className="text-[11px] font-semibold tracking-[.12em] text-primary uppercase">{chatbotConfig.eyebrow}</p>
          <h2 className="mt-0.5 truncate text-[17px] font-semibold tracking-[-.02em] text-foreground">
            {chatbotConfig.title}
          </h2>
          <p className="mt-0.5 text-[12px] text-foreground-muted">{CHAT_UI_COPY.groundedLabel}</p>
        </div>
      </div>
      <Button aria-label={CHAT_UI_COPY.closeLabel} onClick={onClose} size="icon" variant="secondary">
        <AppIcon name="x" className="size-4" strokeWidth={2} />
      </Button>
    </div>
  </div>
);
