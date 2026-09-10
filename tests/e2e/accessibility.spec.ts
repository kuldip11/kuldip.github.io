import { expect, test } from '@playwright/test';

test.describe('Accessibility basics', () => {
  test('has one visible h1', async ({ page }) => {
    await page.goto('/');

    const headings = page.getByRole('heading', {
      level: 1,
    });

    await expect(headings).toHaveCount(1);
    await expect(headings).toBeVisible();
  });

  test('skip link targets the main content', async ({ page }) => {
    await page.goto('/');

    const skipLink = page.getByRole('link', {
      name: /skip to content/i,
    });

    await expect(skipLink).toHaveAttribute('href', '#main-content');

    await expect(page.locator('#main-content')).toHaveCount(1);
  });

  test('all images have alt attributes', async ({ page }) => {
    await page.goto('/');

    const images = page.locator('img');
    const count = await images.count();

    for (let index = 0; index < count; index += 1) {
      await expect(images.nth(index)).toHaveAttribute('alt');
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
});
