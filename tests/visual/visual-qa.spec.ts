import { mkdir } from 'node:fs/promises';
import path from 'node:path';

import { test } from '@playwright/test';

const routes = [
  { name: 'home', path: '/' },
  { name: 'projects', path: '/projects' },
  { name: 'servora', path: '/projects/servora' },
  { name: 'about', path: '/about' },
  { name: 'resume', path: '/resume' },
  { name: 'articles', path: '/articles' },
  { name: 'article', path: '/articles/react-monorepo-shared-contracts-not-shared-everything' },
] as const;

const viewports = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'tablet', width: 820, height: 1180 },
  { name: 'desktop', width: 1440, height: 1000 },
] as const;

const themes = ['light', 'dark'] as const;
const screenshotRoot = path.resolve(process.cwd(), 'visual-qa');

for (const theme of themes) {
  for (const viewport of viewports) {
    test.describe(`${theme} · ${viewport.name}`, () => {
      test.use({ viewport: { width: viewport.width, height: viewport.height } });

      for (const route of routes) {
        test(`${route.name}`, async ({ page }) => {
          await page.addInitScript(
            ({ storageKey, selectedTheme }) => {
              window.localStorage.setItem(storageKey, selectedTheme);
            },
            { storageKey: 'kuldip-portfolio-theme', selectedTheme: theme },
          );

          await page.goto(route.path, { waitUntil: 'networkidle' });
          await mkdir(path.join(screenshotRoot, theme, viewport.name), { recursive: true });
          await page.screenshot({
            path: path.join(screenshotRoot, theme, viewport.name, `${route.name}.png`),
            fullPage: true,
          });
        });
      }
    });
  }
}
