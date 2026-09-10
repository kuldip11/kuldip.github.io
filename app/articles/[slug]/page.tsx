import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Footer } from '@/components/portfolio/Footer';
import { Header } from '@/components/portfolio/Header';
import { articles } from '@/data/articles';
import { siteConfig } from '@/data/site';

import type { Metadata } from 'next';
type Params = Promise<{ slug: string }>;
export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: {
      type: 'article',
      url: `/articles/${article.slug}`,
      title: article.title,
      description: article.description,
      publishedTime: article.date,
      authors: [siteConfig.name],
      images: ['/og.png'],
    },
  };
}
export default async function ArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    author: { '@type': 'Person', name: siteConfig.name, url: siteConfig.url },
    url: `${siteConfig.url}/articles/${article.slug}`,
    image: `${siteConfig.url}/og.png`,
  };
  return (
    <main className="min-h-screen bg-[#07110f] text-[#f2f4ee]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <Header />
      <article className="mx-auto max-w-[880px] px-12 py-24 max-[650px]:px-5">
        <Link className="font-mono text-[11px] text-[#71f6b5]" href="/articles">
          ← All articles
        </Link>
        <time className="mt-14 block font-mono text-[10px] tracking-[.1em] text-[#a5b7ae]" dateTime={article.date}>
          {article.date}
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
}
