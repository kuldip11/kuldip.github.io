import { expect, test } from '@playwright/test';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('navigates to projects section', async ({ page }) => {
    await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'Projects' }).click();
    await expect(page).toHaveURL(/#work$/);
  });

  test('navigates to experience section', async ({ page }) => {
    await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'Experience' }).click();
    await expect(page).toHaveURL(/#experience$/);
  });

  test('navigates to approach section', async ({ page }) => {
    await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'Approach' }).click();
    await expect(page).toHaveURL(/#approach$/);
  });

  test('returns to the top section', async ({ page }) => {
    await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'Home' }).click();
    await expect(page).toHaveURL(/#top$/);
  });
});
