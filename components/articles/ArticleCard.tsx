import Link from 'next/link';

import { AppIcon } from '@/components/portfolio/AppIcon';
import { ROUTES } from '@/constants/routes';
import type { ArticleCardDefinition } from '@/types/article.types';

export const ArticleCard = ({ article, index }: { article: ArticleCardDefinition; index: number }) => (
  <article className="group grid gap-5 border-b border-border py-8 sm:grid-cols-[110px_1fr_auto] sm:items-start sm:py-10">
    <div className="font-mono text-[11px] leading-5 text-foreground-muted">
      <span className="block">0{index + 1}</span>
      <time className="mt-2 block">{article.publishedAt}</time>
    </div>

    <div>
      <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold text-foreground-muted">
        <span className="text-primary">{article.category}</span>
        <span aria-hidden="true">·</span>
        <span>{article.readingTime}</span>
      </div>
      <h2 className="mt-3 max-w-[760px] text-[clamp(1.65rem,3vw,2.4rem)] leading-[1.08] font-semibold tracking-[-.04em] text-foreground transition group-hover:text-primary">
        <Link href={ROUTES.article(article.slug)}>{article.title}</Link>
      </h2>
      <p className="mt-4 max-w-[780px] text-[14px] leading-7 text-foreground-secondary sm:text-[15px]">
        {article.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {article.tags.slice(0, 3).map((tag) => (
          <span className="rounded-full bg-surface-muted px-3 py-1.5 text-[11px] text-foreground-secondary" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>

    <Link
      className="inline-flex size-11 items-center justify-center rounded-full border border-border-strong text-foreground-secondary transition group-hover:border-primary-muted group-hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      href={ROUTES.article(article.slug)}
      aria-label={`Read ${article.title}`}
    >
      <AppIcon name="arrow-right" className="size-4" />
    </Link>
  </article>
);
