'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { AppIcon } from '@/components/portfolio/AppIcon';
import { mainNavigation } from '@/constants/data/navigation.constants';
import { siteConfig } from '@/constants/site';

export const Header = () => {
  const pathname = usePathname() ?? '/';
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);

  const isNavigationItemActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const drawer = drawerRef.current;
    const firstFocusable = drawer?.querySelector<HTMLElement>(focusableSelector);
    firstFocusable?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        return;
      }
      if (event.key !== 'Tab' || !drawer) return;

      const focusable = [...drawer.querySelectorAll<HTMLElement>(focusableSelector)];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      menuButtonRef.current?.focus();
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#164833b8] bg-[#030d0ae8] backdrop-blur-[14px]">
      <div className="grid h-[64px] w-full grid-cols-[1fr_auto_1fr] items-center px-5 max-nav:grid-cols-[1fr_auto] sm:px-8 lg:px-12">
        <Link
          className="w-max text-[18px] font-bold tracking-[-.035em] sm:text-[20px]"
          href="/"
          aria-label={`${siteConfig.name}, home`}
        >
          {siteConfig.name} <span className="ml-1 text-accent">•</span>
        </Link>
        <nav className="flex gap-8 text-[14px] text-[#d2ddd7] max-nav:hidden" aria-label="Main navigation">
          {mainNavigation.map((item) => (
            <Link
              aria-current={isNavigationItemActive(item.href) ? 'page' : undefined}
              className={`relative py-1.5 transition-colors hover:text-accent ${isNavigationItemActive(item.href) ? 'text-accent after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-accent' : ''}`}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          className="inline-flex items-center justify-center gap-2 justify-self-end rounded-full border border-[#209b68] bg-[#071b15] px-5 py-2 text-[13px] font-semibold whitespace-nowrap text-[#e5f5ed] transition hover:bg-accent hover:text-[#04100c] max-nav:hidden"
          href={siteConfig.contactHref}
        >
          <AppIcon name="mail" className="size-4 shrink-0" />
          <span>Let&apos;s Connect</span>
          <AppIcon name="arrow-right" className="size-4 shrink-0" />
        </a>
        <button
          ref={menuButtonRef}
          aria-controls="mobile-navigation-drawer"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="hidden size-10 place-items-center justify-self-end rounded-full border border-[#285443] bg-[#081713] text-text-primary max-nav:grid"
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
        <div className="fixed inset-0 top-[64px] z-[70] hidden max-nav:block" data-testid="mobile-navigation-overlay">
          <button
            aria-label="Close navigation menu"
            className="absolute inset-0 bg-[#010504a8] backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
            type="button"
          />
          <aside
            ref={drawerRef}
            id="mobile-navigation-drawer"
            aria-label="Mobile navigation"
            className="absolute top-0 right-0 flex h-[calc(100vh-64px)] w-[min(86vw,360px)] flex-col border-l border-[#2e6f54] bg-[#06140ff7] px-6 py-7"
          >
            <p className="font-mono text-[12px] tracking-[.16em] text-accent uppercase">Navigation</p>
            <nav className="mt-6 grid" aria-label="Mobile main navigation">
              {mainNavigation.map((item, index) => (
                <Link
                  aria-current={isNavigationItemActive(item.href) ? 'page' : undefined}
                  className={`flex items-center justify-between border-b border-[#234638] py-4 text-lg font-semibold transition-colors ${isNavigationItemActive(item.href) ? 'text-accent' : ''}`}
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
              className="mt-auto rounded-full bg-accent px-5 py-3.5 text-center text-[15px] font-bold text-[#04100c]"
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
