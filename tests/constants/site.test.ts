import { describe, expect, it } from 'vitest';

import { servoraLinks, siteConfig, socialImage } from '@/constants/site';

describe('siteConfig', () => {
  it('contains the correct personal links and profile information', () => {
    expect(siteConfig.github).toBe('https://github.com/kuldip11');
    expect(siteConfig.linkedin).toBe('https://linkedin.com/in/kuldip-kumar-sah');
    expect(siteConfig.email).toBe('kuldipkumarsah112@gmail.com');
    expect(siteConfig.name).toBe('Kuldip Kumar Sah');
    expect(siteConfig.role).toBe('Senior Frontend Engineer');
    expect(siteConfig.location).toBe('India');
    expect(siteConfig.url).toBeDefined();
  });

  it('exposes an absolute social preview image', () => {
    expect(socialImage.url).toBe(`${siteConfig.url}/og.png`);
    expect(socialImage.url).toMatch(/^https?:\/\//);
    expect(socialImage.width).toBe(1200);
    expect(socialImage.height).toBe(630);
    expect(socialImage.alt).toContain(siteConfig.name);
  });

  it('contains all expected Servora links', () => {
    expect(servoraLinks).toHaveLength(7);
    expect(servoraLinks.map(({ label }) => label)).toEqual([
      'Website',
      'Admin / POS',
      'Kitchen',
      'Waiter',
      'Customer',
      'GitHub',
      'API',
    ]);
  });
});
