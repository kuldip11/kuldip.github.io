'use client';

import { useEffect, useState } from 'react';

import { AppIcon } from '@/components/portfolio/AppIcon';
import { THEME_COPY } from '@/constants/ui/theme.constants';

type Theme = 'light' | 'dark';

const getDocumentTheme = (): Theme => (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');

const syncBrowserThemeColor = () => {
  const pageColor = getComputedStyle(document.documentElement).getPropertyValue('--color-page').trim();
  if (!pageColor) return;

  let meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = 'theme-color';
    document.head.append(meta);
  }
  meta.content = pageColor;
};

const applyTheme = (theme: Theme) => {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  if (typeof window.requestAnimationFrame === 'function') window.requestAnimationFrame(syncBrowserThemeColor);
  else syncBrowserThemeColor();
};

export const ThemeToggle = ({ className = '' }: { className?: string }) => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    setTheme(getDocumentTheme());
    syncBrowserThemeColor();

    if (typeof window.matchMedia !== 'function') return;

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemTheme = (event: MediaQueryListEvent) => {
      if (window.localStorage.getItem(THEME_COPY.storageKey)) return;
      const nextTheme: Theme = event.matches ? 'dark' : 'light';
      applyTheme(nextTheme);
      setTheme(nextTheme);
    };

    media.addEventListener('change', handleSystemTheme);
    return () => media.removeEventListener('change', handleSystemTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    window.localStorage.setItem(THEME_COPY.storageKey, nextTheme);
    setTheme(nextTheme);
  };

  const nextLabel = theme === 'dark' ? THEME_COPY.switchToLightLabel : THEME_COPY.switchToDarkLabel;

  return (
    <button
      aria-label={nextLabel}
      className={`grid size-11 shrink-0 place-items-center rounded-xl border border-border bg-surface text-foreground-secondary transition hover:border-border-strong hover:bg-surface-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${className}`.trim()}
      onClick={toggleTheme}
      title={nextLabel}
      type="button"
    >
      <AppIcon name={theme === 'dark' ? 'sun' : 'moon'} className="size-[18px]" />
    </button>
  );
};
