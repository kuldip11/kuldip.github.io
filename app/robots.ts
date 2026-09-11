import { siteConfig } from '@/constants/site';

import type { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => ({
  rules: { userAgent: '*', allow: '/' },
  sitemap: `${siteConfig.url}/sitemap.xml`,
  host: siteConfig.url,
});

export default robots;
