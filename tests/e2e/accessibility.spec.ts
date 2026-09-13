import { expect, test } from '@playwright/test';

const publicRoutes = [
  '/',
  '/projects',
  '/projects/servora',
  '/about',
  '/resume',
  '/articles',
  '/articles/react-monorepo-shared-contracts-not-shared-everything',
] as const;

test.describe('Accessibility basics', () => {
  for (const route of publicRoutes) {
    test(`${route} has one visible h1, one main landmark and no duplicate ids`, async ({ page }) => {
      await page.goto(route);

      const headings = page.getByRole('heading', { level: 1 });
      await expect(headings).toHaveCount(1);
      await expect(headings).toBeVisible();
      await expect(page.getByRole('main')).toHaveCount(1);

      const duplicateIds = await page.evaluate(() => {
        const counts = new Map<string, number>();
        for (const element of document.querySelectorAll<HTMLElement>('[id]')) {
          counts.set(element.id, (counts.get(element.id) ?? 0) + 1);
        }
        return [...counts.entries()].filter(([, count]) => count > 1);
      });

      expect(duplicateIds).toEqual([]);
    });
  }

  test('skip link targets and focuses the main content', async ({ page }) => {
    await page.goto('/');

    const skipLink = page.getByRole('link', { name: /skip to content/i });
    await expect(skipLink).toHaveAttribute('href', '#main-content');

    await page.keyboard.press('Tab');
    await expect(skipLink).toBeFocused();
    await skipLink.press('Enter');
    await expect(page.locator('#main-content')).toBeFocused();
  });

  test('all images expose alt attributes on primary routes', async ({ page }) => {
    for (const route of publicRoutes) {
      await page.goto(route);
      const images = page.locator('img');
      const count = await images.count();

      for (let index = 0; index < count; index += 1) {
        await expect(images.nth(index)).toHaveAttribute('alt');
      }
    }
  });

  test('external links using new tabs are protected', async ({ page }) => {
    await page.goto('/projects/servora');

    const externalLinks = page.locator('a[target="_blank"]');
    const count = await externalLinks.count();

    for (let index = 0; index < count; index += 1) {
      await expect(externalLinks.nth(index)).toHaveAttribute('rel', /noopener|noreferrer/);
    }
  });

  test('mobile navigation traps focus, closes with Escape and restores focus', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    const trigger = page.getByRole('button', { name: 'Open navigation menu' });
    await trigger.focus();
    await trigger.press('Enter');

    const drawer = page.getByRole('navigation', { name: 'Mobile main navigation' });
    await expect(drawer).toBeVisible();

    const closeButton = page.getByRole('button', { name: 'Close navigation menu' });
    await expect(closeButton).toBeFocused();

    await page.keyboard.press('Shift+Tab');
    const activeElementWithinDrawer = await page.evaluate(() => {
      const drawerElement = document.querySelector('#mobile-navigation-drawer');
      return Boolean(drawerElement?.contains(document.activeElement));
    });
    expect(activeElementWithinDrawer).toBeTruthy();

    await page.keyboard.press('Escape');
    await expect(drawer).toBeHidden();
    await expect(trigger).toBeFocused();
  });
});
