import { Eyebrow } from '@/components/portfolio/InnerPageUi';
import { ARTICLES_PAGE_CONTENT } from '@/constants/pages/articles.constants';

export const ArticleHero = () => (
  <div className="grid gap-7 lg:grid-cols-[1fr_.9fr] lg:items-center">
    <div>
      <Eyebrow>{ARTICLES_PAGE_CONTENT.eyebrow}</Eyebrow>
      <h1 className="mt-5 max-w-[700px] text-[clamp(2.5rem,5vw,4.8rem)] leading-[.98] font-bold tracking-[-.055em]">
        Thoughts. Learnings.
        <br />
        <span className="text-[#59ecb0]">Technical Deep Dives.</span>
      </h1>
      <p className="mt-4 max-w-[650px] text-[14px] leading-[1.65] text-[#b5c4bd] sm:text-[16px]">
        A collection of articles on frontend development, architecture, performance, career growth and more. Sharing
        what I learn, build and explore along the way.
      </p>
    </div>
    <div className="relative grid min-h-[220px] place-items-center rounded-[20px] border border-[#176746] bg-[#071713]/85 p-6">
      <div className="w-full max-w-[430px] rounded-[16px] border border-[#27775a] bg-[#061612] p-6">
        <p className="text-[22px]">
          “<span className="text-[#59ecb0]">Better developers</span>
          <br />
          build in public.”
        </p>
        <div className="mt-8 font-mono text-[11px] text-[#59ecb0]">Write › Learn › Share › Grow</div>
      </div>
      <span className="absolute top-5 right-6 font-mono text-[#59ecb0]">
        Ideas
        <br />
        Code
        <br />
        Learnings
        <br />
        Real Impact
      </span>
    </div>
  </div>
);
