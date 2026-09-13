import { AboutPageContent } from '@/components/about/AboutPageContent';
import { seoCopy } from '@/constants/seo';
import { siteConfig } from '@/constants/site';
import { createStaticPageMetadata } from '@/lib/seo/createStaticPageMetadata';

import type { Metadata } from 'next';

export const metadata: Metadata = createStaticPageMetadata({
  title: `About ${siteConfig.name} — ${siteConfig.role}`,
  description: seoCopy.about.description,
  path: '/about',
  type: 'profile',
});

const AboutPage = () => <AboutPageContent />;

export default AboutPage;
