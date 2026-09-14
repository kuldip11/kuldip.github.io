import type { ReactNode } from 'react';

type SocialLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export const SocialLink = ({ href, children, className = '' }: SocialLinkProps) => (
  <a
    className={`inline-flex min-h-11 items-center rounded-xl border border-border bg-surface px-3.5 text-[13px] font-semibold text-foreground-secondary transition hover:border-border-strong hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${className}`.trim()}
    href={href}
    rel={href.startsWith('http') ? 'me noopener noreferrer' : undefined}
    target={href.startsWith('http') ? '_blank' : undefined}
  >
    {children}
  </a>
);
