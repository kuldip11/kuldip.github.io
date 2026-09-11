import { chatbotConfig } from '@/constants/chatbot';
import { CHAT_UI_COPY } from '@/constants/pages/chat.constants';

export const ChatHeader = ({ onClose }: { onClose: () => void }) => (
  <div className="relative overflow-hidden border-b border-[#71f6b51f] px-5 pt-5 pb-4">
    <div className="pointer-events-none absolute -top-20 -right-14 size-44 rounded-full bg-[#71f6b51f] blur-3xl" />
    <div className="relative flex items-start justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="relative grid size-11 shrink-0 place-items-center rounded-2xl border border-[#71f6b54f] bg-[#71f6b511] font-mono text-xs font-bold text-[#71f6b5]">
          KS
          <span className="absolute -right-0.5 -bottom-0.5 size-3 rounded-full border-2 border-[#091613] bg-[#71f6b5]" />
        </div>
        <div>
          <p className="font-mono text-[9px] tracking-[.14em] text-[#71f6b5] uppercase">{chatbotConfig.eyebrow}</p>
          <h2 className="mt-1 text-[17px] font-semibold tracking-[-.02em] text-[#f2f4ee]">{chatbotConfig.title}</h2>
          <p className="mt-0.5 text-[11px] text-[#8fa29a]">{CHAT_UI_COPY.groundedLabel}</p>
        </div>
      </div>
      <button
        aria-label="Close portfolio assistant"
        className="grid size-9 shrink-0 place-items-center rounded-full border border-[#31453f] text-lg text-[#a9b8b1] transition hover:border-[#71f6b5] hover:text-[#71f6b5]"
        onClick={onClose}
        type="button"
      >
        ×
      </button>
    </div>
  </div>
);
