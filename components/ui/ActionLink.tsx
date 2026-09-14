import Link from 'next/link';

import { AppIcon } from '@/components/portfolio/AppIcon';

import type { ReactNode } from 'react';

type ActionLinkProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'text';
  external?: boolean;
  className?: string;
};

const variantClasses = {
  primary: 'rounded-xl bg-primary px-4 text-primary-foreground hover:bg-primary-hover',
  secondary:
    'rounded-xl border border-border-strong bg-surface px-4 text-foreground hover:border-primary-muted hover:text-primary',
  text: 'text-primary hover:text-primary-hover',
} as const;

export const ActionLink = ({
  href,
  children,
  variant = 'primary',
  external = false,
  className = '',
}: ActionLinkProps) => {
  const isHttpExternal = external || /^https?:\/\//.test(href);
  const isNativeHref = isHttpExternal || href.startsWith('mailto:') || href.startsWith('tel:');
  const classes =
    `inline-flex min-h-11 w-max items-center justify-center gap-2 text-[14px] font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${variantClasses[variant]} ${className}`.trim();
  const content = (
    <>
      {children}
      <AppIcon name={isHttpExternal ? 'arrow-up-right' : 'arrow-right'} className="size-4 shrink-0" />
    </>
  );

  if (isNativeHref) {
    return (
      <a
        className={classes}
        href={href}
        rel={isHttpExternal ? 'noreferrer' : undefined}
        target={isHttpExternal ? '_blank' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {content}
    </Link>
  );
};
