import { describe, expect, it } from 'vitest';

import { servoraLinks, siteConfig } from '@/data/site';

describe('siteConfig', () => {
  it('contains the correct personal links', () => {
    expect(siteConfig.github).toBe('https://github.com/kuldip11');
    expect(siteConfig.linkedin).toBe('https://linkedin.com/in/kuldip-kumar-sah');
    expect(siteConfig.email).toBe('kuldipkumarsah112@gmail.com');
  });

  it('contains the expected profile information', () => {
    expect(siteConfig.name).toBe('Kuldip Kumar Sah');
    expect(siteConfig.role).toBe('Senior Frontend Engineer');
    expect(siteConfig.location).toBe('India');
  });

  it('uses localhost when NEXT_PUBLIC_SITE_URL is not configured', () => {
    expect(siteConfig.url).toBeDefined();
  });
});

describe('servoraLinks', () => {
  it('contains all expected Servora links', () => {
    expect(servoraLinks).toHaveLength(7);

    expect(servoraLinks).toEqual([
      {
        label: 'Website',
        href: 'https://servora-one.vercel.app/',
        description: 'Marketing website',
      },
      {
        label: 'Admin / POS',
        href: 'https://servora-web-lyart.vercel.app',
        description: 'Restaurant administration and POS',
      },
      {
        label: 'Kitchen',
        href: 'https://servora-kitchen.vercel.app',
        description: 'Kitchen display system',
      },
      {
        label: 'Waiter',
        href: 'https://servora-waiter.vercel.app',
        description: 'Waiter ordering application',
      },
      {
        label: 'Customer',
        href: 'https://servora-customer.vercel.app',
        description: 'Customer QR ordering application',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/kuldip11/Servora',
        description: 'Source repository',
      },
      {
        label: 'API',
        href: 'https://servora-api-5198.onrender.com',
        description: 'Deployed backend service',
      },
    ]);
  });
});
