import { describe, expect, it } from 'vitest';

import { staticSitemapRoutes } from '@/constants/routes';

describe('route constants', () => {
  it('contains every static public route', () => {
    expect(staticSitemapRoutes).toEqual(['', '/about', '/resume', '/projects', '/articles']);
  });
});
