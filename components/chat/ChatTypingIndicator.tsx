export const ChatTypingIndicator = () => (
  <div className="flex justify-start" role="status" aria-label="Kuldip assistant is thinking">
    <div className="flex items-center gap-1.5 rounded-[6px_20px_20px_20px] border border-[#263b34] bg-[#10201c] px-4 py-4">
      {[0, 1, 2].map((dot) => (
        <span
          className="size-1.5 animate-pulse rounded-full bg-[#71f6b5]"
          key={dot}
          style={{ animationDelay: `${dot * 140}ms` }}
        />
      ))}
    </div>
  </div>
);
