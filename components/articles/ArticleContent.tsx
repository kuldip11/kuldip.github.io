import Link from 'next/link';

import { AppIcon } from '@/components/portfolio/AppIcon';
import { Footer } from '@/components/portfolio/Footer';
import { Header } from '@/components/portfolio/Header';
import { ARTICLE_DETAIL_BACK_LABEL } from '@/constants/pages/article-details.constants';
import { ROUTES } from '@/constants/routes';
import { siteConfig } from '@/constants/site';
import type { ArticleDefinition } from '@/types/article.types';

export const ArticleContent = ({ article }: { article: ArticleDefinition }) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      '@type': 'Person',
      '@id': `${siteConfig.url}/${siteConfig.personId}`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Person',
      '@id': `${siteConfig.url}/${siteConfig.personId}`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteConfig.url}${ROUTES.article(article.slug)}` },
    url: `${siteConfig.url}${ROUTES.article(article.slug)}`,
    image: `${siteConfig.url}${siteConfig.image}`,
  };

  return (
    <main className="min-h-screen bg-[#07110f] text-[#f2f4ee]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <Header />
      <article className="mx-auto max-w-[880px] px-12 py-24 max-[650px]:px-5">
        <Link className="inline-flex items-center gap-2 font-mono text-[11px] text-[#71f6b5]" href={ROUTES.articles}>
          <AppIcon name="arrow-left" className="size-4" />
          {ARTICLE_DETAIL_BACK_LABEL}
        </Link>
        <time
          className="mt-14 block font-mono text-[10px] tracking-[.1em] text-[#a5b7ae]"
          dateTime={article.publishedAt}
        >
          {article.publishedAt}
        </time>
        <h1 className="mt-5 text-[clamp(3.2rem,6.5vw,6.5rem)] leading-[.94] font-medium tracking-[-.06em]">
          {article.title}
        </h1>
        <p className="mt-8 text-xl leading-9 text-[#9cafa6]">{article.description}</p>
        <div className="mt-20">
          {article.sections.map(([title, copy]) => (
            <section className="border-t border-[#20362f] py-10" key={title}>
              <h2 className="text-3xl font-medium tracking-[-.04em]">{title}</h2>
              <p className="mt-5 text-lg leading-8 text-[#aebdb6]">{copy}</p>
            </section>
          ))}
        </div>
      </article>
      <Footer />
    </main>
  );
};
