import Link from 'next/link';

import { siteConfig } from '@/data/site';

import { ExternalArrow } from './ExternalArrow';

const navigation = [
  { label: 'Work', href: '/projects' },
  { label: 'Articles', href: '/articles' },
  { label: 'About', href: '/about' },
  { label: 'Résumé', href: '/resume' },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 mx-auto grid h-[82px] max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center border-b border-[#71f6b522] bg-[#07110fd6] px-12 backdrop-blur-[18px] max-[1000px]:h-auto max-[1000px]:grid-cols-[1fr_auto] max-[1000px]:py-3 max-[650px]:px-5">
      <Link className="flex w-max items-center gap-3" href="/" aria-label={`${siteConfig.name}, home`}>
        <span className="grid size-[38px] place-items-center rounded-full border border-[#71f6b5] font-mono text-xs font-bold text-[#71f6b5]">
          KS
        </span>
        <p className="m-0 font-bold tracking-[-.02em] max-[650px]:hidden">
          {siteConfig.shortName}
          <small className="block font-mono text-[9px] leading-[1.4] font-medium tracking-[.12em] text-[#8fa29a] uppercase">
            Frontend systems
          </small>
        </p>
      </Link>
      <nav
        className="flex gap-7 text-sm text-[#becac4] max-[1000px]:order-3 max-[1000px]:col-span-2 max-[1000px]:mt-3 max-[1000px]:w-full max-[1000px]:justify-between max-[650px]:gap-3 max-[650px]:text-xs"
        aria-label="Main navigation"
      >
        {navigation.map((item) => (
          <Link className="transition-colors hover:text-[#71f6b5]" href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <a
        className="justify-self-end rounded-full border border-[#39524a] px-[15px] py-2.5 text-[13px] transition hover:border-[#71f6b5] hover:bg-[#71f6b5] hover:text-[#07110f]"
        href={`mailto:${siteConfig.email}`}
      >
        Let&apos;s talk <ExternalArrow />
      </a>
    </header>
  );
}
