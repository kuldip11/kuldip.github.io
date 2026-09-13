import { ARTICLES_PAGE_CONTENT } from '@/constants/pages/articles.constants';

export const ArticleHero = () => (
  <header className="max-w-[900px] border-b border-border pb-12 sm:pb-14">
    <p className="text-[12px] font-bold tracking-[.16em] text-primary uppercase">{ARTICLES_PAGE_CONTENT.eyebrow}</p>
    <h1 className="mt-5 text-[clamp(2.5rem,6.2vw,6.2rem)] leading-[.96] font-semibold tracking-[-.065em] text-foreground">
      {ARTICLES_PAGE_CONTENT.heroTitle}
    </h1>
    <p className="mt-7 max-w-[760px] text-[17px] leading-8 text-foreground-secondary sm:text-[19px]">
      {ARTICLES_PAGE_CONTENT.heroCopy}
    </p>
  </header>
);
