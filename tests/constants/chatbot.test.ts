import { describe, expect, it } from 'vitest';

import { chatbotConfig, chatbotInstructions, chatbotSuggestions } from '@/constants/chatbot';

describe('chatbot constants', () => {
  it('keeps the assistant scoped to Kuldip portfolio information', () => {
    expect(chatbotConfig.title).toBe('Ask about Kuldip');
    expect(chatbotConfig.model).toBe('gemini-3.5-flash-lite');
    expect(chatbotSuggestions).toHaveLength(4);
    expect(chatbotInstructions).toContain("Kuldip's professional profile");
    expect(chatbotInstructions).toContain('PORTFOLIO CONTEXT');
  });
});
