import type { ReactNode } from 'react';

type IconBoxProps = {
  children: ReactNode;
  className?: string;
  tone?: 'primary' | 'secondary' | 'neutral';
};

const toneClasses = {
  primary: 'bg-primary-soft text-primary',
  secondary: 'bg-secondary-soft text-secondary',
  neutral: 'bg-surface-muted text-foreground-secondary',
} as const;

export const IconBox = ({ children, className = '', tone = 'primary' }: IconBoxProps) => (
  <span
    className={`grid size-10 shrink-0 place-items-center rounded-xl ${toneClasses[tone]} ${className}`.trim()}
    aria-hidden="true"
  >
    {children}
  </span>
);
