export const ChatError = ({ error }: { error: string }) => (
  <p className="rounded-xl border border-danger/25 bg-danger/5 px-3 py-2 text-xs leading-5 text-danger" role="alert">
    {error}
  </p>
);
