import { expect, test } from '@playwright/test';

const metadataRoutes = [
  '/',
  '/about',
  '/resume',
  '/projects',
  '/projects/servora',
  '/articles',
  '/articles/react-monorepo-shared-contracts-not-shared-everything',
] as const;

test.describe('SEO', () => {
  test('home page has a title and description', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Kuldip Kumar Sah/i);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /Senior Frontend Engineer/i);
  });

  for (const route of metadataRoutes) {
    test(`${route} exposes canonical, OpenGraph and Twitter metadata`, async ({ page }) => {
      await page.goto(route);

      await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
      await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /.+/);
      await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content', /.+/);
      await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute('content', 'summary_large_image');
      await expect(page.locator('meta[name="twitter:title"]')).toHaveAttribute('content', /.+/);
      await expect(page.locator('meta[name="twitter:description"]')).toHaveAttribute('content', /.+/);
    });
  }

  test('contains ProfilePage structured data only on the homepage', async ({ page }) => {
    await page.goto('/');

    const homeJsonLd = page.locator('script[type="application/ld+json"]');
    await expect(homeJsonLd).toHaveCount(1);
    const homeContent = await homeJsonLd.first().textContent();
    expect(homeContent).toContain('ProfilePage');
    expect(homeContent).toContain('Person');
    expect(homeContent).toContain('Kuldip Kumar Sah');

    await page.goto('/about');
    const scripts = page.locator('script[type="application/ld+json"]');
    const count = await scripts.count();
    for (let index = 0; index < count; index += 1) {
      expect(await scripts.nth(index).textContent()).not.toContain('ProfilePage');
    }
  });

  test('project case study exposes Article structured data', async ({ page }) => {
    await page.goto('/projects/servora');

    const content = await page.locator('script[type="application/ld+json"]').first().textContent();
    expect(content).toContain('"@type":"Article"');
    expect(content).toContain('Servora');
  });

  test('article detail exposes BlogPosting structured data', async ({ page }) => {
    await page.goto('/articles/react-monorepo-shared-contracts-not-shared-everything');

    const content = await page.locator('script[type="application/ld+json"]').first().textContent();
    expect(content).toContain('"@type":"BlogPosting"');
    expect(content).toContain('Kuldip Kumar Sah');
  });

  test('home page exposes relevant keyword metadata only on the landing page', async ({ page }) => {
    await page.goto('/');

    const keywords = page.locator('meta[name="keywords"]');
    await expect(keywords).toHaveAttribute('content', /React/);
    await expect(keywords).toHaveAttribute('content', /TypeScript/);
    await expect(keywords).toHaveAttribute('content', /Senior Frontend Engineer/);

    for (const path of ['/about', '/resume', '/projects', '/articles', '/projects/servora']) {
      await page.goto(path);
      await expect(page.locator('meta[name="keywords"]')).toHaveCount(0);
    }
  });

  test('robots.txt and sitemap.xml expose public routes', async ({ request }) => {
    const robotsResponse = await request.get('/robots.txt');
    expect(robotsResponse.ok()).toBeTruthy();
    expect(await robotsResponse.text()).toContain('User-Agent');

    const sitemapResponse = await request.get('/sitemap.xml');
    expect(sitemapResponse.ok()).toBeTruthy();
    const sitemap = await sitemapResponse.text();
    expect(sitemap).toContain('<urlset');
    expect(sitemap).toContain('/projects');
    expect(sitemap).toContain('/projects/servora');
    expect(sitemap).toContain('/articles');
    expect(sitemap).toContain('/about');
    expect(sitemap).toContain('/resume');
  });
});
