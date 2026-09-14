import { AppIcon } from '@/components/portfolio/AppIcon';
import { CHAT_UI_COPY } from '@/constants/pages/chat.constants';

import type { RefObject } from 'react';

export const ChatLauncher = ({
  open,
  onToggle,
  launcherRef,
}: {
  open: boolean;
  onToggle: () => void;
  launcherRef: RefObject<HTMLButtonElement | null>;
}) => (
  <button
    ref={launcherRef}
    aria-controls="portfolio-assistant-dialog"
    aria-expanded={open}
    aria-label={open ? CHAT_UI_COPY.closeLabel : CHAT_UI_COPY.openLabel}
    className="group grid size-13 place-items-center rounded-2xl border border-border-strong bg-surface text-primary shadow-card transition duration-200 hover:-translate-y-0.5 hover:border-primary-muted hover:bg-primary-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    onClick={onToggle}
    title={CHAT_UI_COPY.launcherTitle}
    type="button"
  >
    <AppIcon name={open ? 'x' : 'message-circle'} className="size-5" strokeWidth={2} />
    <span className="sr-only">{CHAT_UI_COPY.launcherSubtitle}</span>
  </button>
);
