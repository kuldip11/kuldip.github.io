export type ChatMessage = {
  readonly id: number;
  readonly role: 'assistant' | 'user';
  readonly content: string;
};
export type ChatResponsePayload = {
  readonly message?: string;
  readonly error?: string;
  readonly stateToken?: string;
  readonly clearState?: boolean;
};
export type GeminiInteractionResponse = {
  readonly steps?: readonly {
    readonly type?: string;
    readonly content?: readonly { readonly type?: string; readonly text?: string }[];
  }[];
};
export type GateState =
  | { readonly mode: 'challenge'; readonly pendingMessage: string; readonly expiresAt: number }
  | { readonly mode: 'private'; readonly expiresAt: number };
