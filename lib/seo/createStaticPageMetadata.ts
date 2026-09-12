import { siteConfig, socialImage } from '@/constants/site';

import type { Metadata } from 'next';

type StaticPageMetadataOptions = Readonly<{
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'profile';
}>;

export const createStaticPageMetadata = ({
  title,
  description,
  path,
  type = 'website',
}: StaticPageMetadataOptions): Metadata => ({
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    type,
    url: path,
    siteName: siteConfig.name,
    title,
    description,
    images: [socialImage],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [socialImage],
  },
});
