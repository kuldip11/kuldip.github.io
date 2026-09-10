import Link from 'next/link';

import { siteConfig } from '@/data/site';

import { ExternalArrow } from './ExternalArrow';

const footerNavigation = [
  { label: 'Projects', href: '/projects' },
  { label: 'Articles', href: '/articles' },
  { label: 'About', href: '/about' },
  { label: 'Résumé', href: '/resume' },
] as const;

export function Footer() {
  return (
    <footer className="bg-[#71f6b5] text-[#07110f]">
      <div className="mx-auto max-w-[1344px] py-[110px] max-[1380px]:mx-12 max-[650px]:mx-5 max-[650px]:py-20">
        <p className="font-mono text-[11px] tracking-[.13em] uppercase">Have a complex product?</p>
        <h2 className="my-6 mb-11 max-w-[900px] text-[clamp(3.5rem,7vw,8rem)] leading-[.88] font-medium tracking-[-.075em] max-[650px]:text-[54px]">
          Let&apos;s make it feel simple.
        </h2>
        <a
          className="flex w-[min(430px,100%)] items-center justify-between border-b-2 border-[#07110f] pb-3 font-bold"
          href={`mailto:${siteConfig.email}`}
        >
          Start a conversation <ExternalArrow />
        </a>
      </div>
      <div className="mx-auto max-w-[1344px] border-t border-[#07110f4d] py-[22px] font-mono text-[11px] uppercase max-[1380px]:mx-12 max-[650px]:mx-5">
        <nav className="mb-6 flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer navigation">
          {footerNavigation.map((item) => (
            <Link className="hover:underline" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center justify-between max-[1000px]:flex-wrap max-[1000px]:gap-5 max-[650px]:items-start">
          <span>© 2026 {siteConfig.name}</span>
          <div className="flex gap-6 max-[650px]:order-3 max-[650px]:w-full max-[650px]:justify-between max-[650px]:gap-2">
            <a
              className="flex items-center gap-1.5 max-[650px]:text-[9px]"
              href={siteConfig.github}
              rel="me noopener noreferrer"
              target="_blank"
            >
              GitHub <ExternalArrow />
            </a>
            <a
              className="flex items-center gap-1.5 max-[650px]:text-[9px]"
              href={siteConfig.linkedin}
              rel="me noopener noreferrer"
              target="_blank"
            >
              LinkedIn <ExternalArrow />
            </a>
            <a className="flex items-center gap-1.5 max-[650px]:text-[9px]" href={`mailto:${siteConfig.email}`}>
              Email <ExternalArrow />
            </a>
          </div>
          <span>India · IST</span>
        </div>
      </div>
    </footer>
  );
}
