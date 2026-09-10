import { describe, expect, it } from 'vitest';

import robots from '@/app/robots';

describe('robots', () => {
  it('allows crawling and exposes the sitemap', () => {
    const value = robots();
    expect(value.rules).toEqual({ userAgent: '*', allow: '/' });
    expect(value.sitemap).toContain('/sitemap.xml');
  });
});
