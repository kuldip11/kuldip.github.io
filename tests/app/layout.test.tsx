import { describe, expect, it } from 'vitest';

import RootLayout, { metadata } from '@/app/layout';

describe('RootLayout', () => {
  it('defines portfolio metadata and wraps children', () => {
    expect(metadata.description).toBeTruthy();
    const element = RootLayout({ children: <div>content</div> });
    expect(element.type).toBe('html');
  });
});
