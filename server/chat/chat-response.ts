import { NextResponse } from 'next/server';

import { askGemini } from './chat.service';

export const aiResponse = async (
  apiKey: string,
  message: string,
  instructions: string,
  extra: Readonly<Record<string, unknown>> = {},
  storeInteraction = true,
) => {
  try {
    const result = await askGemini(apiKey, message, instructions, storeInteraction);
    if ('error' in result) return NextResponse.json({ error: result.error }, { status: 502 });
    return NextResponse.json({ message: result.answer, ...extra });
  } catch (error) {
    console.error('Gemini request failed', error);
    return NextResponse.json({ error: 'The portfolio assistant could not answer right now.' }, { status: 502 });
  }
};
