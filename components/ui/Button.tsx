import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'default' | 'icon';

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary-hover border-primary',
  secondary: 'border-border-strong bg-surface text-foreground hover:border-primary-muted hover:bg-primary-soft',
  ghost: 'border-transparent bg-transparent text-foreground-secondary hover:bg-surface-muted hover:text-foreground',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  default: 'min-h-11 px-4 py-2.5',
  icon: 'size-11 shrink-0 place-items-center p-0',
};

export const Button = ({
  children,
  className = '',
  size = 'default',
  variant = 'primary',
  type = 'button',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
}) => (
  <button
    className={`inline-grid items-center justify-center rounded-xl border text-[14px] font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-40 ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`}
    type={type}
    {...props}
  >
    {children}
  </button>
);
