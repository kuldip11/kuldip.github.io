'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { ActionLink, PageContainer } from '@/components/ui';
import { HEADER_CONTENT } from '@/constants/data/header.constants';
import { mainNavigation } from '@/constants/data/navigation.constants';
import { siteConfig } from '@/constants/site';
import { THEME_COPY } from '@/constants/ui/theme.constants';

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
    drawer?.querySelector<HTMLElement>(focusableSelector)?.focus();

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
    <header className="sticky top-0 z-50 border-b border-border/80 bg-surface/90 backdrop-blur-xl">
      <PageContainer className="grid h-[72px] grid-cols-[1fr_auto_1fr] items-center max-nav:grid-cols-[1fr_auto]">
        <Link className="w-max leading-none" href="/" aria-label={`${siteConfig.name}, home`}>
          <span className="block text-[16px] font-bold tracking-[-.03em] text-foreground sm:text-[17px]">
            {siteConfig.name}
          </span>
          <span className="mt-1 block text-[11px] font-medium tracking-[.01em] text-foreground-muted">
            {siteConfig.role}
          </span>
        </Link>

        <nav
          className="flex items-center gap-7 text-[13px] font-medium text-foreground-secondary max-nav:hidden"
          aria-label={HEADER_CONTENT.mainNavigationLabel}
        >
          {mainNavigation.map((item) => {
            const active = isNavigationItemActive(item.href);
            return (
              <Link
                aria-current={active ? 'page' : undefined}
                className={`relative py-2 transition-colors hover:text-foreground ${active ? 'text-foreground after:absolute after:right-0 after:bottom-0 after:left-0 after:h-0.5 after:rounded-full after:bg-primary' : ''}`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 justify-self-end max-nav:hidden">
          <div className="flex items-center gap-3 text-[12px] font-semibold text-foreground-muted">
            {HEADER_CONTENT.socialLinks.map((link) => (
              <a
                className="inline-flex min-h-11 items-center transition hover:text-foreground"
                href={link.href}
                key={link.label}
                rel="me noopener noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
          </div>
          <ThemeToggle />
          <ActionLink className="px-4 py-2 text-[13px]" href={siteConfig.contactHref}>
            {HEADER_CONTENT.contactLabel}
          </ActionLink>
        </div>

        <button
          ref={menuButtonRef}
          aria-controls="mobile-navigation-drawer"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? HEADER_CONTENT.menuOpenLabel : HEADER_CONTENT.openMenuLabel}
          className="hidden size-11 place-items-center justify-self-end rounded-xl border border-border bg-surface text-foreground shadow-sm max-nav:grid"
          onClick={() => setMenuOpen((open) => !open)}
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
      </PageContainer>

      {menuOpen ? (
        <div className="fixed inset-0 top-[72px] z-[70] hidden max-nav:block" data-testid="mobile-navigation-overlay">
          <button
            aria-label={HEADER_CONTENT.dismissMenuLabel}
            className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
            type="button"
          />
          <aside
            ref={drawerRef}
            id="mobile-navigation-drawer"
            aria-label={HEADER_CONTENT.mobileNavigationLabel}
            className="absolute top-0 right-0 flex h-[calc(100dvh-72px)] w-full max-w-[390px] flex-col border-l border-border bg-surface px-7 py-8 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[12px] font-semibold tracking-[.14em] text-primary uppercase">
                  {HEADER_CONTENT.mobileEyebrow}
                </p>
                <p className="mt-2 text-sm text-foreground-muted">{HEADER_CONTENT.mobileIntro}</p>
              </div>
              <button
                aria-label={HEADER_CONTENT.closeMenuLabel}
                className="grid size-11 shrink-0 place-items-center rounded-xl border border-border bg-surface text-foreground transition hover:border-border-strong hover:bg-surface-muted"
                onClick={() => setMenuOpen(false)}
                type="button"
              >
                <span aria-hidden="true" className="relative block size-5">
                  <span className="absolute top-1/2 left-0 block h-px w-5 -translate-y-1/2 rotate-45 bg-current" />
                  <span className="absolute top-1/2 left-0 block h-px w-5 -translate-y-1/2 -rotate-45 bg-current" />
                </span>
              </button>
            </div>
            <nav className="mt-8 grid" aria-label={HEADER_CONTENT.mobileMainNavigationLabel}>
              {mainNavigation.map((item, index) => (
                <Link
                  aria-current={isNavigationItemActive(item.href) ? 'page' : undefined}
                  className={`flex items-center justify-between border-b border-border py-4 text-[20px] font-semibold tracking-[-.02em] transition-colors ${isNavigationItemActive(item.href) ? 'text-primary' : 'text-foreground'}`}
                  href={item.href}
                  key={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-medium text-foreground-muted">0{index + 1}</span>
                </Link>
              ))}
            </nav>
            <div className="mt-auto border-t border-border pt-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[12px] font-semibold text-foreground-muted">{THEME_COPY.label}</span>
                <ThemeToggle />
              </div>
              <ActionLink className="min-h-12 w-full px-5 text-[15px]" href={siteConfig.contactHref}>
                {HEADER_CONTENT.contactLabel}
              </ActionLink>
            </div>
          </aside>
        </div>
      ) : null}
    </header>
  );
};
