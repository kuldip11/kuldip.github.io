import { expect, test } from '@playwright/test';

test.describe('SEO', () => {
  test('home page has a title and description', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Kuldip Kumar Sah/i);

    const description = page.locator('meta[name="description"]');

    await expect(description).toHaveAttribute('content', /Senior Frontend Engineer/i);
  });

  test('home page has a canonical URL', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
  });

  test('contains ProfilePage structured data', async ({ page }) => {
    await page.goto('/');

    const jsonLd = page.locator('script[type="application/ld+json"]');

    await expect(jsonLd).toHaveCount(1);

    const content = await jsonLd.first().textContent();

    expect(content).toContain('ProfilePage');
    expect(content).toContain('Person');
    expect(content).toContain('Kuldip Kumar Sah');
  });

  test('robots.txt is available', async ({ request }) => {
    const response = await request.get('/robots.txt');

    expect(response.ok()).toBeTruthy();

    const body = await response.text();

    expect(body).toContain('User-Agent');
  });

  test('sitemap.xml is available', async ({ request }) => {
    const response = await request.get('/sitemap.xml');

    expect(response.ok()).toBeTruthy();

    const body = await response.text();

    expect(body).toContain('<urlset');
    expect(body).toContain('/projects');
    expect(body).toContain('/articles');
  });
});
