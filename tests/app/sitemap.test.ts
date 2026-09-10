import { describe, expect, it } from 'vitest';

import sitemap from '@/app/sitemap';

describe('sitemap', () => {
  it('contains all public portfolio routes', () => {
    const urls = sitemap().map((item) => item.url);
    expect(urls.some((url) => url.endsWith('/projects'))).toBe(true);
    expect(urls.some((url) => url.endsWith('/articles'))).toBe(true);
    expect(urls.some((url) => url.endsWith('/about'))).toBe(true);
    expect(urls.some((url) => url.endsWith('/resume'))).toBe(true);
  });
});
