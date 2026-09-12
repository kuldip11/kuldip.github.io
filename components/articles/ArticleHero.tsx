import { AppIcon } from '@/components/portfolio/AppIcon';
import { Eyebrow } from '@/components/portfolio/InnerPageUi';
import { ARTICLES_PAGE_CONTENT } from '@/constants/pages/articles.constants';

export const ArticleHero = () => (
  <div className="grid gap-7 lg:grid-cols-[1fr_.9fr] lg:items-center">
    <div>
      <Eyebrow>{ARTICLES_PAGE_CONTENT.eyebrow}</Eyebrow>
      <h1 className="mt-5 max-w-[760px] text-[clamp(2.5rem,5vw,4.8rem)] leading-[.98] font-bold tracking-[-.055em]">
        {ARTICLES_PAGE_CONTENT.heroTitle}
        <br />
        <span className="text-accent">{ARTICLES_PAGE_CONTENT.heroAccent}</span>
      </h1>
      <p className="mt-4 max-w-[700px] text-[14px] leading-[1.65] text-[#b5c4bd] sm:text-[16px]">
        {ARTICLES_PAGE_CONTENT.heroCopy}
      </p>
    </div>
    <div className="relative overflow-hidden rounded-[20px] border border-panel-border bg-[#071713]/85 p-6">
      <div
        aria-hidden="true"
        className="absolute inset-0 [background-image:radial-gradient(circle_at_20%_20%,rgba(89,236,176,.14),transparent_32%),linear-gradient(rgba(89,236,176,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(89,236,176,.07)_1px,transparent_1px)] [background-size:auto,32px_32px,32px_32px]"
      />
      <div className="relative grid gap-3 sm:grid-cols-2">
        {['Architecture', 'Product systems', 'Testing boundaries', 'Frontend ownership'].map((item, index) => (
          <div
            className="article-float rounded-[14px] border border-[#27775a] bg-[#061612]/90 p-4"
            style={{ animationDelay: `${index * 160}ms` }}
            key={item}
          >
            <AppIcon
              name={index === 2 ? 'testing' : index === 3 ? 'code' : 'architecture'}
              className="size-5 text-accent"
            />
            <strong className="mt-3 block text-[12px]">{item}</strong>
            <span className="mt-1 block text-[9px] leading-[1.5] text-[#8ea79b]">
              Built from real product constraints, not abstract examples.
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);
