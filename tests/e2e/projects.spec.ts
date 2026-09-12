import { expect, test } from '@playwright/test';

test.describe('Projects', () => {
  test('lists Servora and TallyLite', async ({ page }) => {
    await page.goto('/projects');
    await expect(page.getByRole('heading', { name: 'Servora' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'TallyLite' })).toBeVisible();
  });

  test('opens Servora case study', async ({ page }) => {
    await page.goto('/projects/servora');
    await expect(page).toHaveURL(/\/projects\/servora$/);
    await expect(
      page.getByRole('heading', { level: 1, name: /Servora.+Multi-App Restaurant POS Architecture Case Study/i }),
    ).toBeVisible();
  });

  test('opens TallyLite case study', async ({ page }) => {
    await page.goto('/projects/tallylite');
    await expect(page).toHaveURL(/\/projects\/tallylite$/);
    await expect(
      page.getByRole('heading', {
        level: 1,
        name: /TallyLite.+Google Sheets Business Management Architecture Case Study/i,
      }),
    ).toBeVisible();
  });
});
