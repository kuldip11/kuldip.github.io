import { afterEach, describe, expect, it, vi } from 'vitest';

afterEach(() => {
  vi.unstubAllEnvs();
  vi.resetModules();
});

describe('articles feature flag', () => {
  it('removes article discovery and domain access when disabled', async () => {
    vi.stubEnv('NEXT_PUBLIC_ARTICLES_ENABLED', 'false');
    vi.resetModules();

    const [
      { mainNavigation, footerNavigation },
      { getArticleBySlug },
      { getArticleStaticParams },
      { articles },
      sitemapModule,
    ] = await Promise.all([
      import('@/constants/data/navigation.constants'),
      import('@/lib/articles/getArticleBySlug'),
      import('@/lib/articles/getArticleStaticParams'),
      import('@/constants/data/articles.constants'),
      import('@/app/sitemap'),
    ]);

    expect(mainNavigation.some(({ href }) => href === '/articles')).toBe(false);
    expect(footerNavigation.some(({ href }) => href === '/articles')).toBe(false);
    expect(getArticleStaticParams()).toEqual([]);
    expect(getArticleBySlug(articles[0].slug)).toBeUndefined();
    expect(sitemapModule.default().some(({ url }) => url.includes('/articles'))).toBe(false);
  });
});
