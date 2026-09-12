import { chatbotConfig } from '@/constants/chatbot';
import type { GeminiInteractionResponse } from '@/types/chat.types';

export const askGemini = async (apiKey: string, message: string, systemInstruction: string) => {
  const response = await fetch('https://generativelanguage.googleapis.com/v1beta/interactions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': apiKey },
    signal: AbortSignal.timeout(10_000),
    body: JSON.stringify({
      model: chatbotConfig.model,
      input: message,
      system_instruction: systemInstruction,
      store: false,
      generation_config: { max_output_tokens: 420 },
    }),
  });

  if (!response.ok) {
    console.error('Gemini API error', { status: response.status, statusText: response.statusText });
    return { error: 'The portfolio assistant could not answer right now.' } as const;
  }

  const payload = (await response.json()) as GeminiInteractionResponse;
  const answer = payload.steps
    ?.filter((step) => step.type === 'model_output')
    .flatMap((step) => step.content ?? [])
    .filter((content) => content.type === 'text' && typeof content.text === 'string')
    .map((content) => content.text as string)
    .join('\n')
    .trim();

  return answer ? ({ answer } as const) : ({ error: 'The portfolio assistant returned an empty response.' } as const);
};
