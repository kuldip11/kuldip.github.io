'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { AppIcon } from '@/components/portfolio/AppIcon';
import { mainNavigation } from '@/constants/data/navigation.constants';
import { siteConfig } from '@/constants/site';

export const Header = () => {
  const pathname = usePathname() ?? '/';
  const [menuOpen, setMenuOpen] = useState(false);

  const isNavigationItemActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);
  useEffect(() => {
    if (!menuOpen) return;
    const fn = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', fn);
    return () => document.removeEventListener('keydown', fn);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#164833b8] bg-[#030d0ae8] backdrop-blur-[14px]">
      <div className="grid h-[64px] w-full grid-cols-[1fr_auto_1fr] items-center px-5 max-[760px]:grid-cols-[1fr_auto] sm:px-8 lg:px-12">
        <Link
          className="w-max text-[18px] font-bold tracking-[-.035em] sm:text-[20px]"
          href="/"
          aria-label={`${siteConfig.name}, home`}
        >
          {siteConfig.name} <span className="ml-1 text-[#59ecb0]">•</span>
        </Link>
        <nav className="flex gap-8 text-[14px] text-[#d2ddd7] max-[760px]:hidden" aria-label="Main navigation">
          {mainNavigation.map((item) => (
            <Link
              aria-current={isNavigationItemActive(item.href) ? 'page' : undefined}
              className={`relative py-1.5 transition-colors hover:text-[#59ecb0] ${isNavigationItemActive(item.href) ? 'text-[#59ecb0] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-[#59ecb0]' : ''}`}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          className="inline-flex items-center justify-center gap-2 justify-self-end rounded-full border border-[#209b68] bg-[#071b15] px-5 py-2 text-[13px] font-semibold whitespace-nowrap text-[#e5f5ed] transition hover:bg-[#59ecb0] hover:text-[#04100c] max-[760px]:hidden"
          href="mailto:kuldipkumarsah112@gmail.com?subject=Portfolio%20enquiry&body=Hi%20Kuldip%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20get%20in%20touch.%0A%0A"
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            className="size-4 shrink-0"
            strokeWidth={1.8}
            aria-hidden="true"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m4 7 8 6 8-6" />
          </svg>

          <span>Let&apos;s Connect</span>

          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            className="size-4 shrink-0"
            strokeWidth={1.8}
            aria-hidden="true"
          >
            <path d="M5 12h14m0 0-5-5m5 5-5 5" />
          </svg>
        </a>
        <button
          aria-controls="mobile-navigation-drawer"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="hidden size-10 place-items-center justify-self-end rounded-full border border-[#285443] bg-[#081713] text-[#f2f4ee] max-[760px]:grid"
          onClick={() => setMenuOpen((x) => !x)}
          type="button"
        >
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
          className="fixed inset-0 top-[64px] z-[70] hidden max-[760px]:block"
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
            className="absolute top-0 right-0 flex h-[calc(100vh-64px)] w-[min(86vw,360px)] flex-col border-l border-[#2e6f54] bg-[#06140ff7] px-6 py-7"
          >
            <p className="font-mono text-[12px] tracking-[.16em] text-[#59ecb0] uppercase">Navigation</p>
            <nav className="mt-6 grid" aria-label="Mobile main navigation">
              {mainNavigation.map((item, index) => (
                <Link
                  aria-current={isNavigationItemActive(item.href) ? 'page' : undefined}
                  className={`flex items-center justify-between border-b border-[#234638] py-4 text-lg font-semibold transition-colors ${isNavigationItemActive(item.href) ? 'text-[#59ecb0]' : ''}`}
                  href={item.href}
                  key={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-[#668077]">0{index + 1}</span>
                </Link>
              ))}
            </nav>
            <a
              className="mt-auto rounded-full bg-[#59ecb0] px-5 py-3.5 text-center text-[15px] font-bold text-[#04100c]"
              href={siteConfig.contactHref}
            >
              <span className="inline-flex items-center justify-center gap-2">
                Let&apos;s Connect <AppIcon name="arrow-right" className="size-4" />
              </span>
            </a>
          </aside>
        </div>
      ) : null}
    </header>
  );
};
