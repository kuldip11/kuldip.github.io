import { expect, test } from '@playwright/test';

test.describe('Projects', () => {
  test('lists project case studies', async ({ page }) => {
    await page.goto('/projects');

    await expect(
      page.getByRole('heading', {
        name: /Servora/i,
      }),
    ).toBeVisible();

    await expect(
      page.getByRole('heading', {
        name: 'Rendering 100,000+ Mapbox Points in React',
      }),
    ).toBeVisible();
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

  test('opens Mapbox case study', async ({ page }) => {
    await page.goto('/projects/mapbox-performance');

    await expect(
      page.getByRole('heading', {
        level: 1,
        name: 'Rendering 100,000+ Mapbox Points in React',
      }),
    ).toBeVisible();
  });

  test('opens enterprise architecture case study', async ({ page }) => {
    await page.goto('/projects/enterprise-frontend-architecture');

    await expect(
      page.getByRole('heading', {
        level: 1,
        name: 'Enterprise Frontend Architecture Case Study',
      }),
    ).toBeVisible();
  });
});
