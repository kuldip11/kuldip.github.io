import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { JsonLd } from '@/components/seo/JsonLd';

describe('JsonLd', () => {
  it('renders ProfilePage structured data', () => {
    const { container } = render(<JsonLd />);
    const script = container.querySelector('script[type="application/ld+json"]');
    expect(script?.textContent).toContain('ProfilePage');
    expect(script?.textContent).toContain('Kuldip Kumar Sah');
  });
});
