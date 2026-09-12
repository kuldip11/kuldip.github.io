import { expect, test } from '@playwright/test';

test.describe('Projects', () => {
  test('lists the current project and coming-soon card', async ({ page }) => {
    await page.goto('/projects');

    await expect(page.getByRole('heading', { name: /Servora/i })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Project coming soon/i })).toBeVisible();
  });

  test('opens Servora case study', async ({ page }) => {
    await page.goto('/projects/servora');

    await expect(page).toHaveURL(/\/projects\/servora$/);
    await expect(
      page.getByRole('heading', {
        level: 1,
        name: 'Servora Restaurant POS Architecture Case Study',
      }),
    ).toBeVisible();
  });
});
