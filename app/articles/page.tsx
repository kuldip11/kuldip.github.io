import Link from 'next/link';

import { ExternalArrow } from '@/components/portfolio/ExternalArrow';
import { Footer } from '@/components/portfolio/Footer';
import { Header } from '@/components/portfolio/Header';
import { seoCopy } from '@/constants/seo';
import { siteConfig } from '@/constants/site';
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
    images: [siteConfig.image],
  },
  twitter: {
    card: 'summary_large_image',
    title: seoCopy.articles.title,
    description: seoCopy.articles.description,
    images: [siteConfig.image],
  },
};

export default function ArticlesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#07110f] text-[#f2f4ee]">
        <section className="mx-auto max-w-[1000px] px-12 py-24 max-[650px]:px-5">
          <p className="font-mono text-[11px] tracking-[.13em] text-[#71f6b5] uppercase">Writing</p>
          <h1 className="mt-5 text-[clamp(3.5rem,7vw,7rem)] leading-[.92] font-medium tracking-[-.065em]">
            Notes from building frontend systems.
          </h1>
          <p className="mt-8 max-w-[720px] text-lg leading-8 text-[#9cafa6]">
            First-hand engineering notes on React architecture, performance and product complexity—not generic keyword
            content.
          </p>
          <div className="mt-16 border-t border-[#20362f]">
            {articles.map((article) => (
              <article className="border-b border-[#20362f] py-10" key={article.slug}>
                <time className="font-mono text-[10px] text-[#71f6b5]" dateTime={article.publishedAt}>
                  {article.publishedAt}
                </time>
                <h2 className="mt-4 max-w-[800px] text-3xl font-medium tracking-[-.04em]">{article.title}</h2>
                <p className="max-w-[760px] leading-7 text-[#9cafa6]">{article.description}</p>
                <Link
                  aria-label={`Read ${article.title}`}
                  className="mt-4 inline-flex items-center gap-2 border-b border-[#577268] pb-1 text-sm"
                  href={`/articles/${article.slug}`}
                >
                  Read article <ExternalArrow />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
