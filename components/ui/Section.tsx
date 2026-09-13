import type { HTMLAttributes, ReactNode } from 'react';

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
};

export const Section = ({ children, className = '', ...props }: SectionProps) => (
  <section className={`py-16 sm:py-20 lg:py-24 ${className}`.trim()} {...props}>
    {children}
  </section>
);
