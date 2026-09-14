import { expect, test } from '@playwright/test';

const primaryRoutes = [
  '/',
  '/projects',
  '/projects/servora',
  '/about',
  '/resume',
  '/articles',
  '/articles/react-monorepo-shared-contracts-not-shared-everything',
] as const;

const viewports = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'tablet', width: 820, height: 1180 },
  { name: 'desktop', width: 1440, height: 1000 },
] as const;

for (const viewport of viewports) {
  test.describe(`${viewport.name} responsive layout`, () => {
    test.use({ viewport: { width: viewport.width, height: viewport.height } });

    for (const route of primaryRoutes) {
      test(`${route} stays inside the viewport`, async ({ page }) => {
        await page.goto(route);
        await expect(page.getByRole('main')).toBeVisible();
        await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

        const overflow = await page.evaluate(
          () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
        );
        expect(overflow).toBeLessThanOrEqual(1);
      });
    }
  });
}

test.describe('responsive navigation states', () => {
  test('uses the mobile drawer below the navigation breakpoint', async ({ page }) => {
    await page.setViewportSize({ width: 820, height: 1180 });
    await page.goto('/');

    await expect(page.getByRole('button', { name: 'Open navigation menu' })).toBeVisible();
    await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeHidden();
  });

  test('uses the desktop navigation at wide viewport sizes', async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 900 });
    await page.goto('/');

    await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Open navigation menu' })).toBeHidden();
  });

  test('keeps the intended mobile hero information order', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    const heading = page.getByRole('heading', { level: 1 });
    const portrait = page.getByRole('img', { name: /Kuldip Kumar Sah/i });
    const expertise = page.getByRole('list', { name: 'Core expertise' });

    const headingBox = await heading.boundingBox();
    const portraitBox = await portrait.boundingBox();
    const expertiseBox = await expertise.boundingBox();

    expect(headingBox).not.toBeNull();
    expect(portraitBox).not.toBeNull();
    expect(expertiseBox).not.toBeNull();
    expect(headingBox!.y).toBeLessThan(portraitBox!.y);
    expect(portraitBox!.y).toBeLessThan(expertiseBox!.y);
  });

  test('keeps a single canonical approach anchor on the homepage', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#approach')).toHaveCount(1);
  });
});
