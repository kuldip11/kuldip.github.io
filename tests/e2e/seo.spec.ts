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

  test('home page exposes relevant keyword metadata', async ({ page }) => {
    await page.goto('/');

    const keywords = page.locator('meta[name="keywords"]');

    await expect(keywords).toHaveAttribute('content', /React/);
    await expect(keywords).toHaveAttribute('content', /TypeScript/);
    await expect(keywords).toHaveAttribute('content', /Senior Frontend Engineer/);
  });

  test('keyword metadata is limited to the landing page', async ({ page }) => {
    for (const path of ['/about', '/resume', '/projects', '/articles', '/projects/servora']) {
      await page.goto(path);
      await expect(page.locator('meta[name="keywords"]')).toHaveCount(0);
    }
  });

  test('ProfilePage structured data is limited to the homepage', async ({ page }) => {
    await page.goto('/about');

    const scripts = page.locator('script[type="application/ld+json"]');
    const count = await scripts.count();

    for (let index = 0; index < count; index += 1) {
      expect(await scripts.nth(index).textContent()).not.toContain('ProfilePage');
    }
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
