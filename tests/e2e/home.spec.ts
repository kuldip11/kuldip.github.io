import { expect, test } from '@playwright/test';

test.describe('Home page', () => {
  test('renders the main portfolio content', async ({ page }) => {
    await page.goto('/');

    await expect(
      page.getByRole('heading', {
        level: 1,
      }),
    ).toBeVisible();

    await expect(
      page.getByRole('heading', {
        name: 'Senior Frontend Engineer',
        exact: true,
      }),
    ).toBeVisible();

    await expect(page.getByRole('main')).toBeVisible();
  });

  test('shows portfolio sections', async ({ page }) => {
    await page.goto('/');

    await expect(
      page.getByText('Selected systems', {
        exact: true,
      }),
    ).toBeVisible();

    await expect(
      page.getByText('Experience', {
        exact: true,
      }),
    ).toBeVisible();

    await expect(
      page
        .getByText('About', {
          exact: true,
        })
        .first(),
    ).toBeVisible();
  });

  test('shows profile image', async ({ page }) => {
    await page.goto('/');

    await expect(
      page.getByRole('img', {
        name: /Kuldip Kumar Sah/i,
      }),
    ).toBeVisible();
  });
});

test.describe('Portfolio assistant', () => {
  test('opens and exposes recruiter-focused prompts', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('button', { name: 'Open portfolio assistant' }).click();
    await expect(page.getByRole('region', { name: 'Portfolio assistant' })).toBeVisible();
    await expect(page.getByText('What makes Kuldip a strong Senior React Engineer?')).toBeVisible();
    await expect(page.getByRole('textbox', { name: "Message Kuldip's portfolio assistant" })).toBeFocused();
  });
});
