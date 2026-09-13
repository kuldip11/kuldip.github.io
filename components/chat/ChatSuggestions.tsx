import { AppIcon } from '@/components/portfolio/AppIcon';
import { chatbotSuggestions } from '@/constants/chatbot';
import { ACCESSIBILITY_COPY } from '@/constants/ui/accessibility.constants';

export const ChatSuggestions = ({ onSelect }: { onSelect: (suggestion: string) => void }) => (
  <div className="grid gap-2 pt-1" aria-label={ACCESSIBILITY_COPY.suggestedQuestionsLabel}>
    {chatbotSuggestions.map((suggestion) => (
      <button
        className="group flex min-h-11 items-center justify-between gap-3 rounded-2xl border border-border bg-surface px-4 py-3 text-left text-xs leading-5 text-foreground-secondary transition hover:border-primary-muted hover:bg-primary-soft hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        key={suggestion}
        onClick={() => onSelect(suggestion)}
        type="button"
      >
        <span>{suggestion}</span>
        <span aria-hidden="true" className="text-primary transition-transform group-hover:translate-x-0.5">
          <AppIcon name="arrow-right" className="size-4" />
        </span>
      </button>
    ))}
  </div>
);
