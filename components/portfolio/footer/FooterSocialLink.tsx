import type { FooterIconName } from '@/types/navigation.types';

import { FooterIcon } from './FooterIcon';

export const FooterSocialLink = ({ href, label, icon }: { href: string; label: string; icon: FooterIconName }) => {
  const external = href.startsWith('http');
  return (
    <a
      className="grid size-14 place-items-center rounded-full border border-[#25845f] transition hover:-translate-y-1 hover:border-accent hover:bg-[#59ecb014] hover:text-accent max-hero:size-[58px]"
      href={href}
      aria-label={label}
      target={external ? '_blank' : undefined}
      rel={external ? 'me noopener noreferrer' : undefined}
    >
      <FooterIcon name={icon} className="size-[22px]" />
    </a>
  );
};
