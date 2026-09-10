import { expect, test } from '@playwright/test';

test.describe('Resume page', () => {
  test('renders resume content', async ({ page }) => {
    await page.goto('/resume');

    await expect(
      page.getByRole('heading', {
        level: 1,
        name: 'Kuldip Kumar Sah',
        exact: true,
      }),
    ).toBeVisible();
  });

  test('provides a PDF resume download', async ({ page }) => {
    await page.goto('/resume');

    const resumeLink = page.getByRole('link', {
      name: 'Download PDF',
      exact: true,
    });

    await expect(resumeLink).toBeVisible();

    await expect(resumeLink).toHaveAttribute('href', '/Kuldip_Kumar_Sah.pdf');
  });

  test('includes Servora project and live applications', async ({ page }) => {
    await page.goto('/resume');

    await expect(
      page.getByRole('heading', {
        name: 'Servora · Full-Stack Restaurant OS',
        exact: true,
      }),
    ).toBeVisible();

    await expect(
      page.getByRole('link', {
        name: /Website Marketing website/i,
      }),
    ).toBeVisible();

    await expect(
      page.getByRole('link', {
        name: /Admin \/ POS Restaurant administration and POS/i,
      }),
    ).toBeVisible();

    await expect(
      page.getByRole('link', {
        name: /Kitchen Kitchen display system/i,
      }),
    ).toBeVisible();

    await expect(
      page.getByRole('link', {
        name: /Waiter Waiter ordering application/i,
      }),
    ).toBeVisible();

    await expect(
      page.getByRole('link', {
        name: /Customer Customer QR ordering application/i,
      }),
    ).toBeVisible();

    await expect(
      page.getByRole('link', {
        name: /GitHub Source repository/i,
      }),
    ).toBeVisible();
  });

  test('resume PDF link is correct', async ({ page }) => {
    await page.goto('/resume');

    await expect(
      page.getByRole('link', {
        name: 'Download PDF',
        exact: true,
      }),
    ).toHaveAttribute('href', '/Kuldip_Kumar_Sah.pdf');
  });
});
