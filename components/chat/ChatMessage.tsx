import type { ChatMessage as ChatMessageType } from '@/types/chat.types';

export const ChatMessage = ({ message }: { message: ChatMessageType }) => (
  <div className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
    <div
      className={
        message.role === 'user'
          ? 'max-w-[86%] rounded-[20px_20px_6px_20px] bg-accent-bright px-4 py-3 text-[13px] leading-6 text-[#07110f] shadow-[0_10px_30px_rgba(113,246,181,.12)]'
          : 'max-w-[91%] rounded-[6px_20px_20px_20px] border border-[#263b34] bg-[#10201c] px-4 py-3 text-[13px] leading-6 whitespace-pre-wrap text-[#dce5e0]'
      }
    >
      {message.content}
    </div>
  </div>
);
