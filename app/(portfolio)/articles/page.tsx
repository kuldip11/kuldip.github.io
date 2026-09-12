import { ArticlesPageContent } from '@/components/articles/ArticlesPageContent';
import { seoCopy } from '@/constants/seo';
import { createStaticPageMetadata } from '@/lib/seo/createStaticPageMetadata';

import type { Metadata } from 'next';

export const metadata: Metadata = createStaticPageMetadata({
  title: seoCopy.articles.title,
  description: seoCopy.articles.description,
  path: '/articles',
  type: 'website',
});

const ArticlesPage = () => (
  <>
    <ArticlesPageContent />
  </>
);

export default ArticlesPage;
