import { handleChatRequest } from '@/server/chat/chat-handler';

export const POST = (request: Request) => handleChatRequest(request);
