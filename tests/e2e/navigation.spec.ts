import { expect, test } from '@playwright/test';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('navigates to primary portfolio routes from the global navigation', async ({ page }) => {
    const navigation = page.getByRole('navigation', { name: 'Main navigation' });

    await navigation.getByRole('link', { name: 'Projects' }).click();
    await expect(page).toHaveURL(/\/projects$/);

    await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'Articles' }).click();
    await expect(page).toHaveURL(/\/articles$/);

    await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL(/\/about$/);

    await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'Résumé' }).click();
    await expect(page).toHaveURL(/\/resume$/);
  });

  test('marks the active primary route', async ({ page }) => {
    await page.goto('/projects/servora');
    await expect(
      page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'Projects' }),
    ).toHaveAttribute('aria-current', 'page');
  });
});
