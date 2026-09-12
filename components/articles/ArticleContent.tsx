import Link from 'next/link';

import { AppIcon } from '@/components/portfolio/AppIcon';
import { ARTICLE_DETAIL_BACK_LABEL } from '@/constants/pages/article-details.constants';
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
    <main id="main-content" className="min-h-screen bg-page text-text-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <article className="mx-auto max-w-[1180px] px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <Link
          className="inline-flex items-center gap-2 font-mono text-[11px] text-accent-bright"
          href={ROUTES.articles}
        >
          <AppIcon name="arrow-left" className="size-4" />
          {ARTICLE_DETAIL_BACK_LABEL}
        </Link>

        <header className="relative mt-10 overflow-hidden rounded-[26px] border border-panel-border bg-[radial-gradient(circle_at_85%_0%,rgba(89,236,176,.12),transparent_34%),#061511] p-6 sm:p-9 lg:p-12">
          <div
            aria-hidden="true"
            className="absolute inset-0 [background-image:linear-gradient(rgba(89,236,176,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(89,236,176,.06)_1px,transparent_1px)] [background-size:42px_42px] opacity-60"
          />
          <div className="relative max-w-[900px]">
            <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] tracking-[.08em] text-[#91a79c]">
              <span className="rounded-full border border-[#2b7257] px-3 py-1 text-accent">{article.category}</span>
              <time dateTime={article.publishedAt}>{article.publishedAt}</time>
              <span>{article.readingTime}</span>
            </div>
            <h1 className="mt-6 text-[clamp(2.7rem,6vw,6rem)] leading-[.94] font-semibold tracking-[-.06em]">
              {article.title}
            </h1>
            <p className="mt-7 max-w-[820px] text-[17px] leading-[1.7] text-[#a9bbb2] sm:text-[20px]">
              {article.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  className="rounded-full border border-[#285a47] bg-[#081b16] px-3 py-1.5 text-[10px] text-[#b8c7c0]"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        <section
          className="mt-5 grid gap-3 rounded-[20px] border border-panel-border bg-[#071713]/80 p-5 sm:grid-cols-3"
          aria-label="Key takeaways"
        >
          {article.takeaways.map((takeaway, index) => (
            <div className="flex gap-3" key={takeaway}>
              <span className="grid size-7 shrink-0 place-items-center rounded-full border border-[#2d7d5e] font-mono text-[10px] text-accent">
                0{index + 1}
              </span>
              <p className="text-[12px] leading-[1.55] text-[#c0cdc7]">{takeaway}</p>
            </div>
          ))}
        </section>

        <div className="mt-16 space-y-20">
          {article.sections.map((section, index) => (
            <section className="scroll-mt-28" id={section.id} key={section.id}>
              <div
                className={`grid gap-8 lg:grid-cols-[1fr_.9fr] lg:items-start ${index % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}
              >
                <div>
                  <p className="font-mono text-[10px] tracking-[.16em] text-accent uppercase">{section.eyebrow}</p>
                  <h2 className="mt-3 text-[clamp(2rem,4vw,3.7rem)] leading-[1.02] font-semibold tracking-[-.05em]">
                    {section.title}
                  </h2>
                  <div className="mt-6 space-y-5">
                    {section.paragraphs.map((paragraph) => (
                      <p className="text-[16px] leading-8 text-[#aebdb6]" key={paragraph}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {section.bullets ? (
                    <ul className="mt-6 space-y-3">
                      {section.bullets.map((bullet) => (
                        <li className="flex gap-3 text-[14px] leading-7 text-[#c3d0ca]" key={bullet}>
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_12px_rgba(89,236,176,.6)]" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {section.callout ? (
                    <blockquote className="mt-7 border-l-2 border-accent bg-[#081b16] px-5 py-4 text-[15px] leading-7 text-[#d7e2dc]">
                      {section.callout}
                    </blockquote>
                  ) : null}
                </div>
                <div className="lg:sticky lg:top-28">
                  {section.visual ? (
                    <ArticleSectionVisual visual={section.visual} />
                  ) : (
                    <div className="rounded-[20px] border border-panel-border bg-[#061511] p-6">
                      <span className="font-mono text-[9px] tracking-[.15em] text-[#769789] uppercase">
                        Working principle
                      </span>
                      <div className="mt-5 grid min-h-[180px] place-items-center rounded-[16px] border border-[#285b47] bg-[#081d17] p-6 text-center">
                        <p className="max-w-[340px] text-[18px] leading-[1.45] font-medium text-[#d9e4de]">
                          {article.takeaways[index % article.takeaways.length]}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-20 flex flex-col gap-4 border-t border-muted-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="font-mono text-[9px] tracking-[.14em] text-[#7f9a8e] uppercase">
              Written from product work
            </span>
            <p className="mt-1 text-[13px] text-[#aebdb6]">Kuldip Kumar Sah · Senior Frontend Engineer</p>
          </div>
          <Link className="inline-flex items-center gap-2 text-[13px] font-semibold text-accent" href={ROUTES.projects}>
            See the projects behind the ideas <AppIcon name="arrow-right" className="size-4" />
          </Link>
        </footer>
      </article>
    </main>
  );
};
