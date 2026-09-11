import { Footer } from '@/components/portfolio/Footer';
import { Header } from '@/components/portfolio/Header';
import { LandingShowcase } from '@/components/portfolio/LandingShowcase';
import { JsonLd } from '@/components/seo/JsonLd';
import { landingPageKeywords } from '@/constants/seo';
import { siteConfig, socialImage } from '@/constants/site';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  keywords: [...landingPageKeywords],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    url: '/',
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.socialDescription,
    images: [socialImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.socialDescription,
    images: [socialImage],
  },
};

const Home = () => {
  return (
    <>
      <a
        className="fixed top-[-80px] left-5 z-[100] rounded-lg bg-[#59ecb0] px-[18px] py-3 font-bold text-[#04100c] focus:top-4"
        href="#main-content"
      >
        Skip to content
      </a>
      <JsonLd />
      <Header />
      <LandingShowcase />
      <Footer />
    </>
  );
};

export default Home;
