import { describe, expect, it } from 'vitest';

import { footerNavigation, headerNavigation } from '@/constants/navigation';

describe('navigation constants', () => {
  it('contains all top-level routes', () => {
    expect(headerNavigation.map(({ href }) => href)).toEqual(['/projects', '/articles', '/about', '/resume']);
    expect(footerNavigation.map(({ href }) => href)).toEqual(['/projects', '/articles', '/about', '/resume']);
  });
});
