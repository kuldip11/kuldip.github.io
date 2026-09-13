import type { HTMLAttributes, ReactNode } from 'react';

type PageContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export const PageContainer = ({ children, className = '', ...props }: PageContainerProps) => (
  <div className={`mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-10 ${className}`.trim()} {...props}>
    {children}
  </div>
);
