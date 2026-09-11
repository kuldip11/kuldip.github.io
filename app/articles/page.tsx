import Link from 'next/link';
import { Footer } from '@/components/portfolio/Footer';
import { Header } from '@/components/portfolio/Header';
import { Eyebrow, InnerPageBackdrop, Pills, panel } from '@/components/portfolio/InnerPageUi';
import { seoCopy } from '@/constants/seo';
import { siteConfig, socialImage } from '@/constants/site';
import { articles } from '@/data/articles';
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

export default function ArticlesPage() {
  const all = [
    { ...articles[0], kind: 'Architecture', glyph: '◇' },
    { ...articles[1], kind: 'React', glyph: '↗' },
  ];
  return (
    <>
      <Header />
      <InnerPageBackdrop>
        <section className="relative mx-auto max-w-[1500px] px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
          <div className="grid gap-7 lg:grid-cols-[1fr_.9fr] lg:items-center">
            <div>
              <Eyebrow>Articles</Eyebrow>
              <h1 className="mt-5 max-w-[700px] text-[clamp(2.5rem,5vw,4.8rem)] leading-[.98] font-bold tracking-[-.055em]">
                Thoughts. Learnings.
                <br />
                <span className="text-[#59ecb0]">Technical Deep Dives.</span>
              </h1>
              <p className="mt-4 max-w-[650px] text-[14px] leading-[1.65] text-[#b5c4bd] sm:text-[16px]">
                A collection of articles on frontend development, architecture, performance, career growth and more.
                Sharing what I learn, build and explore along the way.
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
          <div className="mt-7 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <Pills items={['All (2)']} />
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {all.slice(0, 5).map((article, index) => (
              <article className={`${panel} overflow-hidden`} key={`${article.slug}-${index}`}>
                <div className="relative grid min-h-[150px] place-items-center border-b border-[#176746] bg-[#081914]">
                  <span className="text-[54px] font-bold text-[#42dfab]">{article.glyph}</span>
                  <span className="absolute top-4 right-4 rounded-full border border-[#27775a] px-3 py-1 text-[10px] text-[#59ecb0]">
                    {article.kind}
                  </span>
                </div>
                <div className="p-5">
                  <div className="font-mono text-[10px] text-[#8ca198]">
                    ▣ {article.publishedAt} &nbsp; ◷ {index % 2 ? 10 : 8} min read
                  </div>
                  <h2 className="mt-3 text-[20px] leading-[1.15] font-bold">{article.title}</h2>
                  <p className="mt-3 text-[13px] leading-[1.55] text-[#aebdb6]">{article.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-[#27775a] px-2.5 py-1 text-[10px]">{article.kind}</span>
                    <span className="rounded-full border border-[#27775a] px-2.5 py-1 text-[10px]">Frontend</span>
                  </div>
                  <Link
                    className="mt-5 inline-flex text-[13px] font-semibold text-[#59ecb0]"
                    href={`/articles/${article.slug}`}
                  >
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
            <div className={`${panel} grid min-h-[360px] place-items-center border-dashed p-8 text-center`}>
              <div>
                <div className="text-[52px] text-[#59ecb0]">▤</div>
                <h2 className="mt-3 text-[20px]">
                  More articles
                  <br />
                  coming soon.
                </h2>
                <p className="mt-3 text-[13px] text-[#9fb2a9]">
                  Exploring more ideas, tech and experiences to share with you.
                </p>
              </div>
            </div>
          </div>
        </section>
      </InnerPageBackdrop>
      <Footer />
    </>
  );
}
