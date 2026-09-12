import { LandingShowcase } from '@/components/portfolio/LandingShowcase';
import { JsonLd } from '@/components/seo/JsonLd';
import { landingPageKeywords } from '@/constants/seo';
import { siteConfig } from '@/constants/site';
import { createStaticPageMetadata } from '@/lib/seo/createStaticPageMetadata';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...createStaticPageMetadata({
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.socialDescription,
    path: '/',
    type: 'profile',
  }),
  keywords: [...landingPageKeywords],
};

const Home = () => {
  return (
    <>
      <JsonLd />
      <LandingShowcase />
    </>
  );
};

export default Home;
