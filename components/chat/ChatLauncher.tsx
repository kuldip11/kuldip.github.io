import { useEffect, useState } from 'react';
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
}) => {
  const [isCollapsed, setIsCollapsed] = useState(!open);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (open || isHovered) {
      setIsCollapsed(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsCollapsed(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [open, isHovered]);

  // Combined state determines if the visual container should expand
  const shouldExpand = open || !isCollapsed || isHovered;

  return (
    <button
      ref={launcherRef}
      aria-controls="portfolio-assistant-dialog"
      aria-expanded={open}
      aria-label={open ? 'Close portfolio assistant' : 'Open portfolio assistant'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group flex items-center rounded-full border border-[#71f6b54a] bg-[#0a1714ee] p-2.5 text-text-primary shadow-[0_18px_55px_rgba(0,0,0,.42)] backdrop-blur-xl transition-all duration-1000 ease-in-out hover:-translate-y-0.5 hover:border-accent-bright hover:bg-[#10221d]
        ${shouldExpand ? 'pr-4' : 'pr-2.5'}
      `}
      onClick={onToggle}
      type="button"
    >
      {/* AI Circle Icon */}
      <span className="relative grid size-9 shrink-0 place-items-center rounded-full bg-accent-bright font-mono text-[10px] font-bold text-[#07110f]">
        AI
        
        {/* Magic Sparkle Star Element */}
        <span className="absolute -right-1 -bottom-1 flex size-4 items-center justify-center rounded-md bg-[#0a1714] p-0.5 text-accent-bright shadow-sm ring-1 ring-[#71f6b533]">
          <svg
            className="size-full fill-current animate-pulse"
            viewBox="0 0 24 24"
            xmlns="http://w3.org"
          >
            <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" />
          </svg>
        </span>
      </span>

      {/* Collapsible Text Container */}
      <span
        className={`flex flex-col text-left overflow-hidden whitespace-nowrap transition-all duration-1000 ease-in-out
          ${shouldExpand 
            ? 'max-w-[200px] opacity-100 pl-3' 
            : 'max-w-0 opacity-0 pl-0 md:max-w-[200px] md:opacity-100 md:pl-3'
          }
        `}
      >
        <span className="block text-xs font-semibold">{CHAT_UI_COPY.launcherTitle}</span>
        <span className="block font-mono text-[8px] tracking-[.08em] text-[#82958c] uppercase">
          {CHAT_UI_COPY.launcherSubtitle}
        </span>
      </span>
    </button>
  );
};
