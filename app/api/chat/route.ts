import { NextResponse } from 'next/server';

import { chatbotConfig, chatbotInstructions } from '@/constants/chatbot';

type GeminiInteractionResponse = {
  steps?: Array<{
    type?: string;
    content?: Array<{ type?: string; text?: string }>;
  }>;
};

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'The portfolio assistant is not configured yet.' }, { status: 503 });
  }

  const message = await request
    .json()
    .then((body: { message?: unknown }) => (typeof body.message === 'string' ? body.message.trim() : ''))
    .catch(() => null);

  if (message === null) {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  if (!message) {
    return NextResponse.json({ error: 'Please enter a question.' }, { status: 400 });
  }

  if (message.length > chatbotConfig.maxMessageLength) {
    return NextResponse.json({ error: 'Your question is too long.' }, { status: 400 });
  }

  try {
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/interactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey,
      },
      body: JSON.stringify({
        model: chatbotConfig.model,
        input: message,
        system_instruction: chatbotInstructions,
        store: false,
        generation_config: {
          max_output_tokens: 420,
          thinking_level: 'minimal',
        },
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text().catch(() => 'Unable to read Gemini error response.');

      console.error('Gemini API error', {
        status: response.status,
        statusText: response.statusText,
        body: errorBody,
      });

      return NextResponse.json({ error: 'The portfolio assistant could not answer right now.' }, { status: 502 });
    }

    const payload = (await response.json()) as GeminiInteractionResponse;
    const answer = payload.steps
      ?.filter((step) => step.type === 'model_output')
      .flatMap((step) => step.content ?? [])
      .filter((content) => content.type === 'text' && typeof content.text === 'string')
      .map((content) => content.text as string)
      .join('\n')
      .trim();

    if (!answer) {
      return NextResponse.json({ error: 'The portfolio assistant returned an empty response.' }, { status: 502 });
    }

    return NextResponse.json({ message: answer });
  } catch (error) {
    console.error('Gemini request failed', error);

    return NextResponse.json({ error: 'The portfolio assistant could not answer right now.' }, { status: 502 });
  }
}
