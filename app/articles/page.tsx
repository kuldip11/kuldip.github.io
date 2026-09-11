import { ArticlesPageContent } from '@/components/articles/ArticlesPageContent';
import { Footer } from '@/components/portfolio/Footer';
import { Header } from '@/components/portfolio/Header';
import { seoCopy } from '@/constants/seo';
import { siteConfig, socialImage } from '@/constants/site';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: seoCopy.articles.title,
  description: seoCopy.articles.description,
  alternates: { canonical: '/articles' },
  openGraph: {
    type: 'website',
    url: '/articles',
    siteName: siteConfig.name,
    title: seoCopy.articles.title,
    description: seoCopy.articles.description,
    images: [socialImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: seoCopy.articles.title,
    description: seoCopy.articles.description,
    images: [socialImage],
  },
};

const ArticlesPage = () => (
  <>
    <Header />
    <ArticlesPageContent />
    <Footer />
  </>
);

export default ArticlesPage;
