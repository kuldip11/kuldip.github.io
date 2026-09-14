import { expect, test } from '@playwright/test';

test.describe('Theme', () => {
  test('switches to dark theme and persists the explicit preference', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light' });
    await page.goto('/');

    const toggle = page.getByRole('button', { name: 'Switch to dark theme' }).first();
    await toggle.click();

    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    await expect.poll(() => page.evaluate(() => localStorage.getItem('kuldip-portfolio-theme'))).toBe('dark');

    await page.reload();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    await expect(page.getByRole('button', { name: 'Switch to light theme' }).first()).toBeVisible();
  });

  test('uses system dark preference when no explicit preference is stored', async ({ page }) => {
    await page.addInitScript(() => localStorage.removeItem('kuldip-portfolio-theme'));
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.goto('/');

    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  });
});
