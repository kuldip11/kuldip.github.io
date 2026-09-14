import { notFound } from 'next/navigation';

import { ArticlesPageContent } from '@/components/articles/ArticlesPageContent';
import { FEATURE_FLAGS } from '@/constants/config/feature-flags.constants';
import { seoCopy } from '@/constants/seo';
import { createStaticPageMetadata } from '@/lib/seo/createStaticPageMetadata';

import type { Metadata } from 'next';

export const metadata: Metadata = createStaticPageMetadata({
  title: seoCopy.articles.title,
  description: seoCopy.articles.description,
  path: '/articles',
  type: 'website',
});

const ArticlesPage = () => {
  if (!FEATURE_FLAGS.articles) notFound();
  return <ArticlesPageContent />;
};

export default ArticlesPage;
