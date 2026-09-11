import { AppIcon } from '@/components/portfolio/AppIcon';
import { chatbotSuggestions } from '@/constants/chatbot';

export const ChatSuggestions = ({ onSelect }: { onSelect: (suggestion: string) => void }) => (
  <div className="grid gap-2 pt-1">
    {chatbotSuggestions.map((suggestion) => (
      <button
        className="group flex items-center justify-between gap-3 rounded-2xl border border-[#263b34] bg-[#0c1a17] px-4 py-3 text-left text-xs leading-5 text-[#b9c7c0] transition hover:border-[#71f6b55c] hover:bg-[#10221d] hover:text-[#f2f4ee]"
        key={suggestion}
        onClick={() => onSelect(suggestion)}
        type="button"
      >
        <span>{suggestion}</span>
        <span aria-hidden="true" className="text-[#71f6b5] transition-transform group-hover:translate-x-0.5">
          <AppIcon name="arrow-right" className="size-4" />
        </span>
      </button>
    ))}
  </div>
);
