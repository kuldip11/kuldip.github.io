import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/data/site';

import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Senior Frontend Engineer — React & TypeScript`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: `${siteConfig.name} Portfolio`,
  authors: [{ name: siteConfig.name, url: '/' }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: { canonical: '/' },
  keywords: undefined,
  icons: { icon: '/favicon.svg' },
  openGraph: {
    type: 'profile',
    url: '/',
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Senior Frontend Engineer`,
    description: 'I build frontend systems that stay fast as products get complex.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: `${siteConfig.name}, Senior Frontend Engineer` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — Senior Frontend Engineer`,
    description: 'I build frontend systems that stay fast as products get complex.',
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
  verification: {
    ...(process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : {}),
    ...(process.env.BING_SITE_VERIFICATION ? { other: { 'msvalidate.01': process.env.BING_SITE_VERIFICATION } } : {}),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="m-0 bg-[#07110f] antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
