import Link from 'next/link';

import { footerNavigation } from '@/constants/navigation';
import { siteConfig } from '@/constants/site';

import { ExternalArrow } from './ExternalArrow';

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#71f6b526] bg-[#091411] text-[#f2f4ee]">
      <div className="pointer-events-none absolute -top-32 right-[8%] size-[420px] rounded-full bg-[#71f6b512] blur-[100px]" />
      <div className="pointer-events-none absolute bottom-[-180px] left-[-80px] size-[360px] rounded-full bg-[#71f6b50a] blur-[100px]" />

      <div className="relative mx-auto max-w-[1344px] py-[110px] max-[1380px]:mx-12 max-[650px]:mx-5 max-[650px]:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-mono text-[11px] tracking-[.13em] text-[#71f6b5] uppercase">Have a complex product?</p>
            <h2 className="my-6 mb-0 max-w-[900px] text-[clamp(3.3rem,7vw,7.5rem)] leading-[.9] font-medium tracking-[-.07em] max-[650px]:text-[52px]">
              Let&apos;s make it feel simple.
            </h2>
          </div>

          <a
            className="group flex min-w-[250px] items-center justify-between gap-8 rounded-full border border-[#71f6b566] bg-[#71f6b510] px-6 py-4 text-sm font-semibold text-[#dff9ec] transition hover:border-[#71f6b5] hover:bg-[#71f6b5] hover:text-[#07110f]"
            href={`mailto:${siteConfig.email}`}
          >
            Start a conversation
            <span className="transition-transform group-hover:translate-x-1">
              <ExternalArrow />
            </span>
          </a>
        </div>
      </div>

      <div className="relative border-t border-[#71f6b51f] bg-[#07100e]">
        <div className="mx-auto max-w-[1344px] py-6 font-mono text-[10px] tracking-[.04em] text-[#8fa29a] uppercase max-[1380px]:mx-12 max-[650px]:mx-5">
          <nav className="mb-6 flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer navigation">
            {footerNavigation.map((item) => (
              <Link className="transition-colors hover:text-[#71f6b5]" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-between max-[1000px]:flex-wrap max-[1000px]:gap-5 max-[650px]:items-start">
            <span>© 2026 {siteConfig.name}</span>
            <div className="flex gap-6 max-[650px]:order-3 max-[650px]:w-full max-[650px]:justify-between max-[650px]:gap-2">
              <a
                className="flex items-center gap-1.5 transition-colors hover:text-[#71f6b5] max-[650px]:text-[9px]"
                href={siteConfig.github}
                rel="me noopener noreferrer"
                target="_blank"
              >
                GitHub <ExternalArrow />
              </a>
              <a
                className="flex items-center gap-1.5 transition-colors hover:text-[#71f6b5] max-[650px]:text-[9px]"
                href={siteConfig.linkedin}
                rel="me noopener noreferrer"
                target="_blank"
              >
                LinkedIn <ExternalArrow />
              </a>
              <a
                className="flex items-center gap-1.5 transition-colors hover:text-[#71f6b5] max-[650px]:text-[9px]"
                href={`mailto:${siteConfig.email}`}
              >
                Email <ExternalArrow />
              </a>
            </div>
            <span>India · IST</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
