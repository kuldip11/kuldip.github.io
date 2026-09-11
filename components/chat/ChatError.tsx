export const ChatError = ({ error }: { error: string }) => (
  <p
    className="rounded-xl border border-[#ff927b3d] bg-[#ff927b0d] px-3 py-2 text-xs leading-5 text-[#ffb3a4]"
    role="alert"
  >
    {error}
  </p>
);
