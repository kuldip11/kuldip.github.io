import { expect, test } from '@playwright/test';

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('navigates to projects', async ({ page }) => {
    await page
      .getByRole('navigation', {
        name: 'Main navigation',
      })
      .getByRole('link', {
        name: 'Work',
        exact: true,
      })
      .click();

    await expect(page).toHaveURL('/projects');
  });

  test('navigates to articles', async ({ page }) => {
    await page
      .getByRole('navigation', {
        name: 'Main navigation',
      })
      .getByRole('link', {
        name: 'Articles',
        exact: true,
      })
      .click();

    await expect(page).toHaveURL('/articles');
  });

  test('navigates to about', async ({ page }) => {
    await page
      .getByRole('navigation', {
        name: 'Main navigation',
      })
      .getByRole('link', {
        name: 'About',
        exact: true,
      })
      .click();

    await expect(page).toHaveURL('/about');
  });

  test('navigates to resume', async ({ page }) => {
    await page
      .getByRole('navigation', {
        name: 'Main navigation',
      })
      .getByRole('link', {
        name: 'Résumé',
        exact: true,
      })
      .click();

    await expect(page).toHaveURL('/resume');
  });
});
