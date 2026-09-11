export const ActionLink = ({
  href,
  children,
  secondary = false,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
  external?: boolean;
}) => (
  <a
    className={`inline-flex min-h-[44px] items-center justify-center gap-3 rounded-full px-5 text-[13px] font-bold transition hover:-translate-y-0.5 ${secondary ? 'border border-[#2a7659] bg-[#071713] text-white' : 'bg-[#4fefb1] text-[#03100b] shadow-[0_0_26px_rgba(78,239,177,.2)]'}`}
    href={href}
    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
  >
    {children} <span aria-hidden="true">→</span>
  </a>
);
