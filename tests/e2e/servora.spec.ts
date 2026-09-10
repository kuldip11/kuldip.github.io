import { expect, test } from '@playwright/test';

test.describe('Servora project links', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/projects/servora');
  });

  test('shows live application links', async ({ page }) => {
    await expect(
      page.getByRole('link', {
        name: /Website/i,
      }),
    ).toBeVisible();

    await expect(
      page.getByRole('link', {
        name: /Admin/i,
      }),
    ).toBeVisible();

    await expect(
      page.getByRole('link', {
        name: /Kitchen/i,
      }),
    ).toBeVisible();

    await expect(
      page.getByRole('link', {
        name: /Waiter/i,
      }),
    ).toBeVisible();

    await expect(
      page.getByRole('link', {
        name: /Customer/i,
      }),
    ).toBeVisible();

    await expect(
      page.getByRole('link', {
        name: 'GitHub Source repository',
        exact: true,
      }),
    ).toBeVisible();

    await expect(
      page.getByRole('link', {
        name: /API/i,
      }),
    ).toBeVisible();
  });

  test('Servora links point to the correct domains', async ({ page }) => {
    await expect(
      page.getByRole('link', {
        name: /Admin/i,
      }),
    ).toHaveAttribute('href', 'https://servora-web-lyart.vercel.app');

    await expect(
      page.getByRole('link', {
        name: /Kitchen/i,
      }),
    ).toHaveAttribute('href', 'https://servora-kitchen.vercel.app');

    await expect(
      page.getByRole('link', {
        name: /Waiter/i,
      }),
    ).toHaveAttribute('href', 'https://servora-waiter.vercel.app');

    await expect(
      page.getByRole('link', {
        name: /Customer/i,
      }),
    ).toHaveAttribute('href', 'https://servora-customer.vercel.app');

    await expect(
      page.getByRole('link', {
        name: 'GitHub Source repository',
        exact: true,
      }),
    ).toHaveAttribute('href', 'https://github.com/kuldip11/Servora');
  });
});
