import Link from 'next/link';

import type { FooterLink } from '@/types/navigation.types';

import { AppIcon } from '../AppIcon';

export const FooterLinkList = ({ links }: { links: readonly FooterLink[] }) => (
  <ul className="mt-7 space-y-4 text-[15px] text-[#bec9c4] max-[1099px]:mt-5 max-[1099px]:space-y-3">
    {links.map((item) => (
      <li key={item.label}>
        {item.href ? (
          <Link
            className="group inline-flex items-center gap-3 transition-colors hover:text-[#59ecb0]"
            href={item.href}
            {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            {...(item.download ? { download: true } : {})}
          >
            <span>
              {item.label}
              {item.suffix}
            </span>
            <span
              className="text-[#59ecb0] opacity-0 transition-opacity group-hover:opacity-100 max-[1099px]:opacity-100"
              aria-hidden="true"
            >
              <AppIcon name="arrow-right" className="size-4" />
            </span>
          </Link>
        ) : (
          item.label
        )}
      </li>
    ))}
  </ul>
);
