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
    aria-label={open ? 'Close portfolio assistant' : 'Open portfolio assistant'}
    className="group flex items-center gap-3 rounded-full border border-[#71f6b54a] bg-[#0a1714ee] py-2.5 pr-4 pl-2.5 text-text-primary shadow-[0_18px_55px_rgba(0,0,0,.42)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-accent-bright hover:bg-[#10221d]"
    onClick={onToggle}
    type="button"
  >
    <span className="relative grid size-9 place-items-center rounded-full bg-accent-bright font-mono text-[10px] font-bold text-[#07110f]">
      AI
      <span className="absolute -right-0.5 -bottom-0.5 size-2.5 rounded-full border-2 border-[#0a1714] bg-[#f2f4ee]" />
    </span>
    <span className="text-left">
      <span className="block text-xs font-semibold">{CHAT_UI_COPY.launcherTitle}</span>
      <span className="block font-mono text-[8px] tracking-[.08em] text-[#82958c] uppercase">
        {CHAT_UI_COPY.launcherSubtitle}
      </span>
    </span>
  </button>
);
