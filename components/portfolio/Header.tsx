'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { headerNavigation } from '@/constants/navigation';
import { siteConfig } from '@/constants/site';

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
    <header className="sticky top-0 z-50 border-b border-[#164833b8] bg-[#030d0ac2] backdrop-blur-[14px]">
      <div className="grid h-[62px] w-full grid-cols-[1fr_auto_1fr] items-center px-5 max-[760px]:grid-cols-[1fr_auto_auto_auto] max-[760px]:gap-4 sm:px-8 lg:px-12">
        <Link
          className="w-max text-[18px] font-bold tracking-[-.035em] max-[430px]:text-[15px] sm:text-[20px]"
          href="/#top"
          aria-label={`${siteConfig.name}, home`}
        >
          {siteConfig.name} <span className="ml-1 text-[#59ecb0]">•</span>
        </Link>

        <Link
          className="relative hidden py-1.5 text-[14px] text-[#59ecb0] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-[#59ecb0] max-[760px]:block max-[430px]:hidden"
          href="/#top"
        >
          Home
        </Link>

        <a
          className="hidden justify-self-end rounded-full border border-[#209b68] bg-[#071b15] px-5 py-2 text-[13px] font-semibold text-[#e5f5ed] max-[760px]:block max-[500px]:px-3 max-[430px]:hidden"
          href={siteConfig.contactHref}
        >
          ✉ &nbsp; Let&apos;s Connect
        </a>

        <nav className="flex gap-9 text-[14px] text-[#d2ddd7] max-[760px]:hidden" aria-label="Main navigation">
          {headerNavigation.map((item, index) => (
            <Link
              className={`relative py-1.5 transition-colors hover:text-[#59ecb0] ${index === 0 ? 'text-[#59ecb0] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-[#59ecb0]' : ''}`}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          className="justify-self-end rounded-full border border-[#209b68] bg-[#071b15] px-5 py-2 text-[13px] font-semibold text-[#e5f5ed] transition hover:bg-[#59ecb0] hover:text-[#04100c] max-[760px]:hidden"
          href={siteConfig.contactHref}
        >
          ✉ &nbsp; Let&apos;s Connect&nbsp; →
        </a>

        <button
          aria-controls="mobile-navigation-drawer"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="hidden size-10 place-items-center rounded-full border border-[#285443] bg-[#081713] text-[#f2f4ee] max-[760px]:grid"
          onClick={() => setMenuOpen((current) => !current)}
          type="button"
        >
          <span className="sr-only">Menu</span>
          <span className="grid gap-1.5" aria-hidden="true">
            <span className={`block h-px w-5 bg-current transition ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block h-px w-5 bg-current transition ${menuOpen ? 'opacity-0' : ''}`} />
            <span
              className={`block h-px w-5 bg-current transition ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
            />
          </span>
        </button>
      </div>

      {menuOpen ? (
        <div
          className="fixed inset-0 top-[62px] z-[70] hidden max-[760px]:block"
          data-testid="mobile-navigation-overlay"
        >
          <button
            aria-label="Close navigation menu"
            className="absolute inset-0 bg-[#010504a8] backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
            type="button"
          />
          <aside
            id="mobile-navigation-drawer"
            aria-label="Mobile navigation"
            className="absolute top-0 right-0 flex h-[calc(100vh-62px)] w-[min(86vw,360px)] flex-col border-l border-[#2e6f54] bg-[#06140ff7] px-6 py-7 shadow-[-24px_0_70px_rgba(0,0,0,.45)]"
          >
            <p className="font-mono text-[12px] tracking-[.16em] text-[#59ecb0] uppercase">Navigation</p>
            <nav className="mt-6 grid" aria-label="Mobile main navigation">
              {headerNavigation.map((item, index) => (
                <Link
                  className="flex items-center justify-between border-b border-[#234638] py-4 text-lg font-semibold text-[#e7ede9] transition hover:text-[#59ecb0]"
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
            <a
              className="mt-auto rounded-full bg-[#59ecb0] px-5 py-3.5 text-center text-[15px] font-bold text-[#04100c]"
              href={siteConfig.contactHref}
            >
              Let&apos;s Connect →
            </a>
          </aside>
        </div>
      ) : null}
    </header>
  );
}
