import type { ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
  tone?: 'primary' | 'secondary' | 'neutral';
  className?: string;
};

const toneClasses = {
  primary: 'bg-primary-soft text-primary',
  secondary: 'bg-secondary-soft text-secondary',
  neutral: 'bg-surface-muted text-foreground-secondary',
} as const;

export const Badge = ({ children, tone = 'primary', className = '' }: BadgeProps) => (
  <span
    className={`inline-flex rounded-full px-3 py-1.5 text-[11px] font-bold tracking-[.08em] uppercase ${toneClasses[tone]} ${className}`.trim()}
  >
    {children}
  </span>
);
