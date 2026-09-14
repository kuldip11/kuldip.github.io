import { describe, expect, it } from 'vitest';

import RootLayout, { metadata } from '@/app/layout';

describe('RootLayout', () => {
  it('defines portfolio metadata and wraps children', () => {
    expect(metadata.description).toBeTruthy();
    expect(metadata.openGraph?.images).toBeUndefined();
    expect(metadata.twitter?.images).toBeUndefined();

    const element = RootLayout({ children: <div>content</div> });
    expect(element.type).toBe('html');
  });
});
