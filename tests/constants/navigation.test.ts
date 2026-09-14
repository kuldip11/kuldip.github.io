import { describe, expect, it } from 'vitest';

import { footerNavigation, mainNavigation } from '@/constants/data/navigation.constants';

describe('navigation constants', () => {
  it('uses primary routes in the global header and footer', () => {
    expect(mainNavigation.map(({ href }) => href)).toEqual(['/', '/projects', '/articles', '/about', '/resume']);
    expect(footerNavigation.map(({ href }) => href)).toEqual(['/projects', '/articles', '/about', '/resume']);
  });
});
