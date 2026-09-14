import Link from 'next/link';

import { AppIcon } from '@/components/portfolio/AppIcon';
import { ARTICLE_DETAIL_CONTENT } from '@/constants/pages/article-details.constants';
import { ROUTES } from '@/constants/routes';
import { siteConfig } from '@/constants/site';
import type { ArticleDefinition } from '@/types/article.types';

import { ArticleSectionVisual } from './ArticleSectionVisual';

export const ArticleContent = ({ article }: { article: ArticleDefinition }) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    keywords: article.tags.join(', '),
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
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-page text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      <article className="mx-auto w-full max-w-[1180px] px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <Link
          className="inline-flex min-h-11 items-center gap-2 text-[12px] font-semibold text-foreground-muted transition hover:text-primary"
          href={ROUTES.articles}
        >
          <AppIcon name="arrow-left" className="size-4" />
          {ARTICLE_DETAIL_CONTENT.backLabel}
        </Link>

        <header className="mx-auto mt-12 max-w-[900px] text-center sm:mt-16">
          <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] font-semibold text-foreground-muted">
            <span className="text-primary">{article.category}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={article.publishedAt}>{article.publishedAt}</time>
            <span aria-hidden="true">·</span>
            <span>{article.readingTime}</span>
          </div>
          <h1 className="mt-6 text-[clamp(2.5rem,6.4vw,6.3rem)] leading-[.96] font-semibold tracking-[-.065em] text-foreground">
            {article.title}
          </h1>
          <p className="mx-auto mt-7 max-w-[780px] text-[18px] leading-8 text-foreground-secondary sm:text-[20px]">
            {article.description}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {article.tags.map((tag) => (
              <span
                className="rounded-full bg-surface-muted px-3 py-1.5 text-[11px] text-foreground-secondary"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <section
          className="mx-auto mt-14 max-w-[860px] rounded-card border border-border bg-surface p-6 shadow-card sm:p-7"
          aria-label={ARTICLE_DETAIL_CONTENT.takeawaysLabel}
        >
          <p className="text-[11px] font-bold tracking-[.14em] text-primary uppercase">
            {ARTICLE_DETAIL_CONTENT.takeawaysLabel}
          </p>
          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            {article.takeaways.map((takeaway, index) => (
              <div className="border-t border-border pt-4" key={takeaway}>
                <span className="font-mono text-[10px] text-foreground-muted">0{index + 1}</span>
                <p className="mt-2 text-[13px] leading-6 text-foreground-secondary">{takeaway}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-20 space-y-24">
          {article.sections.map((section) => (
            <section className="scroll-mt-28" id={section.id} key={section.id}>
              <div className="mx-auto max-w-[760px]">
                <p className="text-[11px] font-bold tracking-[.15em] text-primary uppercase">{section.eyebrow}</p>
                <h2 className="mt-4 text-[clamp(2.15rem,4.5vw,4rem)] leading-[1] font-semibold tracking-[-.055em] text-foreground">
                  {section.title}
                </h2>
                <div className="mt-7 space-y-6">
                  {section.paragraphs.map((paragraph) => (
                    <p className="text-[16px] leading-8 text-foreground-secondary sm:text-[17px]" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                {section.bullets ? (
                  <ul className="mt-7 grid list-none gap-3 p-0">
                    {section.bullets.map((bullet) => (
                      <li
                        className="grid grid-cols-[12px_1fr] gap-3 text-[15px] leading-7 text-foreground-secondary"
                        key={bullet}
                      >
                        <span className="mt-3 size-1.5 rounded-full bg-primary" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {section.callout ? (
                  <blockquote className="mt-8 border-l-2 border-primary bg-primary-soft px-5 py-4 text-[15px] leading-7 text-foreground">
                    {section.callout}
                  </blockquote>
                ) : null}
              </div>

              <div className="mx-auto mt-10 max-w-[980px]">
                {section.visual ? (
                  <ArticleSectionVisual visual={section.visual} />
                ) : (
                  <div className="rounded-card border border-border bg-surface-muted p-7 text-center sm:p-9">
                    <span className="text-[11px] font-bold tracking-[.14em] text-foreground-muted uppercase">
                      {ARTICLE_DETAIL_CONTENT.workingPrincipleLabel}
                    </span>
                    <p className="mx-auto mt-4 max-w-[620px] text-[20px] leading-8 font-medium tracking-[-.02em] text-foreground">
                      {article.takeaways[0]}
                    </p>
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>

        <footer className="mx-auto mt-24 flex max-w-[900px] flex-col gap-5 border-t border-border pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-[10px] font-bold tracking-[.14em] text-foreground-muted uppercase">
              {ARTICLE_DETAIL_CONTENT.authorContextLabel}
            </span>
            <p className="mt-2 text-[13px] text-foreground-secondary">
              {siteConfig.name} · {siteConfig.role}
            </p>
          </div>
          <Link
            className="inline-flex min-h-11 items-center gap-2 text-[13px] font-semibold text-primary"
            href={ROUTES.projects}
          >
            {ARTICLE_DETAIL_CONTENT.projectsCtaLabel} <AppIcon name="arrow-right" className="size-4" />
          </Link>
        </footer>
      </article>
    </main>
  );
};
