export const InnerPageBackdrop = ({ children }: { children: React.ReactNode }) => (
  <main className="relative min-h-screen overflow-hidden bg-[#020b08] text-[#f5f7f3]">
    <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle_at_86%_5%,rgba(28,224,155,.16),transparent_22%),radial-gradient(circle_at_10%_92%,rgba(28,224,155,.08),transparent_24%)]" />
    <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(66,230,169,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(66,230,169,.08)_1px,transparent_1px)] [background-size:48px_48px] opacity-[.08]" />
    {children}
  </main>
);
