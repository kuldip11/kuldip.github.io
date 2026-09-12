import { describe, expect, it } from 'vitest';

import { footerNavigation, headerNavigation } from '@/constants/data/navigation.constants';

describe('navigation constants', () => {
  it('uses landing-section navigation in the header and full routes in the footer', () => {
    expect(headerNavigation.map(({ href }) => href)).toEqual(['/#top', '/#work', '/#experience', '/#approach']);
    expect(footerNavigation.map(({ href }) => href)).toEqual(['/projects', '/articles', '/about', '/resume']);
  });
});
