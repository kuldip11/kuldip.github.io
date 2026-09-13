import type { HTMLAttributes, ReactNode } from 'react';

type SurfaceCardProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export const SurfaceCard = ({ children, className = '', ...props }: SurfaceCardProps) => (
  <article className={`rounded-card border border-border bg-surface ${className}`.trim()} {...props}>
    {children}
  </article>
);
