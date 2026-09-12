import type { FooterLink } from '@/types/navigation.types';

import { FooterLinkList } from './FooterLinkList';

export const FooterLinkColumn = ({ title, links }: { title: string; links: readonly FooterLink[] }) => (
  <nav aria-label={title}>
    <h2 className="text-[18px] font-bold tracking-[-.02em]">{title}</h2>
    <span className="mt-5 block h-px w-9 bg-accent" />
    <FooterLinkList links={links} />
  </nav>
);
