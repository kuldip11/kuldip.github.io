import type { FooterIconName, FooterLink } from '@/types/navigation.types';

import { FooterIcon } from './FooterIcon';
import { FooterLinkList } from './FooterLinkList';

export const FooterMobileLinkGroup = ({
  title,
  icon,
  links,
}: {
  title: string;
  icon: FooterIconName;
  links: readonly FooterLink[];
}) => (
  <details className="group rounded-[17px] border border-[#1d7a55] bg-[#051410c7]">
    <summary className="flex min-h-[78px] cursor-pointer list-none items-center gap-6 px-7 text-[18px] font-bold [&::-webkit-details-marker]:hidden">
      <span className="text-[#55edac]">
        <FooterIcon name={icon} className="size-6" />
      </span>
      <span>{title}</span>
      <span className="ml-auto transition-transform group-open:rotate-180">
        <FooterIcon name="chevron" className="size-6" />
      </span>
    </summary>
    <div className="border-t border-[#1d7a554d] px-7 pt-1 pb-6 pl-[76px]">
      <FooterLinkList links={links} />
    </div>
  </details>
);
