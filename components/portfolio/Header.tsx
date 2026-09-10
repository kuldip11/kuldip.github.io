'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { headerNavigation } from '@/constants/navigation';
import { siteConfig } from '@/constants/site';

import { ExternalArrow } from './ExternalArrow';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setMenuOpen(false);
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 mx-auto grid h-[82px] max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center border-b border-[#71f6b522] bg-[#07110fd6] px-12 backdrop-blur-[18px] max-[1000px]:h-auto max-[1000px]:grid-cols-[1fr_auto] max-[1000px]:py-3 max-[650px]:h-[70px] max-[650px]:grid-cols-[1fr_auto] max-[650px]:px-5 max-[650px]:py-0">
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
        className="flex gap-7 text-sm text-[#becac4] max-[1000px]:order-3 max-[1000px]:col-span-2 max-[1000px]:mt-3 max-[1000px]:w-full max-[1000px]:justify-between max-[650px]:hidden"
        aria-label="Main navigation"
      >
        {headerNavigation.map((item) => (
          <Link className="transition-colors hover:text-[#71f6b5]" href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <a
        className="justify-self-end rounded-full border border-[#71f6b570] bg-[#71f6b5] px-[15px] py-2.5 text-[13px] font-semibold text-[#07110f] shadow-[0_6px_24px_rgba(113,246,181,.12)] transition hover:-translate-y-0.5 hover:bg-[#9affcc] max-[650px]:hidden"
        href={`mailto:${siteConfig.email}`}
      >
        Let&apos;s talk <ExternalArrow />
      </a>

      <button
        aria-controls="mobile-navigation-drawer"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        className="hidden size-11 place-items-center rounded-full border border-[#31453f] bg-[#0d1b18] text-[#f2f4ee] transition hover:border-[#71f6b5] max-[650px]:grid"
        onClick={() => setMenuOpen((current) => !current)}
        type="button"
      >
        <span className="sr-only">Menu</span>
        <span className="grid gap-1.5" aria-hidden="true">
          <span className={`block h-px w-5 bg-current transition ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block h-px w-5 bg-current transition ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-5 bg-current transition ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </span>
      </button>

      {menuOpen ? (
        <div
          className="fixed inset-0 top-[70px] z-[70] hidden max-[650px]:block"
          data-testid="mobile-navigation-overlay"
        >
          <button
            aria-label="Close navigation menu"
            className="absolute inset-0 bg-[#02070699] backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
            type="button"
          />
          <aside
            id="mobile-navigation-drawer"
            aria-label="Mobile navigation"
            className="absolute top-0 right-0 flex h-[calc(100vh-70px)] w-[min(86vw,360px)] flex-col border-l border-[#71f6b526] bg-[#091613f7] px-6 py-7 shadow-[-24px_0_70px_rgba(0,0,0,.45)]"
          >
            <p className="font-mono text-[9px] tracking-[.16em] text-[#71f6b5] uppercase">Navigation</p>
            <nav className="mt-6 grid" aria-label="Mobile main navigation">
              {headerNavigation.map((item, index) => (
                <Link
                  className="flex items-center justify-between border-b border-[#263b34] py-4 text-lg font-semibold tracking-[-.02em] text-[#e7ede9] transition hover:text-[#71f6b5]"
                  href={item.href}
                  key={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-[#668077]" aria-hidden="true">
                    0{index + 1}
                  </span>
                </Link>
              ))}
            </nav>
            <div className="mt-auto rounded-2xl border border-[#71f6b52e] bg-[#10201c] p-5">
              <p className="text-sm leading-6 text-[#aebdb6]">
                Have a role, product challenge, or frontend problem worth discussing?
              </p>
              <a
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#71f6b5] px-4 py-2.5 text-sm font-semibold text-[#07110f]"
                href={`mailto:${siteConfig.email}`}
              >
                Let&apos;s talk <ExternalArrow />
              </a>
            </div>
          </aside>
        </div>
      ) : null}
    </header>
  );
}
