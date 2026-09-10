import { expect, test } from '@playwright/test';

test.describe('External profile links', () => {
  test('GitHub profile link is correct', async ({ page }) => {
    await page.goto('/');

    await expect(
      page.locator('footer').getByRole('link', {
        name: 'GitHub',
        exact: true,
      }),
    ).toHaveAttribute('href', 'https://github.com/kuldip11');
  });

  test('LinkedIn profile link is correct', async ({ page }) => {
    await page.goto('/');

    await expect(
      page.locator('footer').getByRole('link', {
        name: 'LinkedIn',
        exact: true,
      }),
    ).toHaveAttribute('href', 'https://linkedin.com/in/kuldip-kumar-sah');
  });
});
