import Link from 'next/link';
import { notFound } from 'next/navigation';

import { ExternalArrow } from '@/components/portfolio/ExternalArrow';
import { Footer } from '@/components/portfolio/Footer';
import { Header } from '@/components/portfolio/Header';
import { projectDetails } from '@/constants/project-details';
import { servoraLinks, siteConfig, socialImage } from '@/constants/site';
import { projects } from '@/data/portfolio';

import type { Metadata } from 'next';

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return {};

  return {
    title: project.seoTitle,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: 'article',
      url: `/projects/${project.slug}`,
      title: project.seoTitle,
      description: project.summary,
      publishedTime: project.publishedAt,
      modifiedTime: project.updatedAt,
      authors: [siteConfig.name],
      images: [socialImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.seoTitle,
      description: project.summary,
      images: [socialImage],
    },
  };
}

export default async function ProjectCaseStudy({ params }: { params: Params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  const detail = projectDetails[slug];

  if (!project || !detail) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: project.seoTitle,
    description: project.summary,
    datePublished: project.publishedAt,
    dateModified: project.updatedAt,
    image: `${siteConfig.url}${siteConfig.image}`,
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
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/projects/${project.slug}`,
    },
  };

  return (
    <main className="min-h-screen bg-[#07110f] text-[#f2f4ee]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <Header />
      <article className="mx-auto max-w-[1000px] px-12 py-24 max-[650px]:px-5">
        <Link className="font-mono text-[11px] text-[#71f6b5]" href="/projects">
          ← All case studies
        </Link>
        <p className="mt-14 font-mono text-[11px] tracking-[.13em] text-[#a5b7ae] uppercase">{detail.eyebrow}</p>
        <h1 className="mt-5 text-[clamp(3.4rem,7vw,7rem)] leading-[.92] font-medium tracking-[-.065em]">
          {project.seoTitle}
        </h1>
        <p className="mt-8 max-w-[820px] text-xl leading-9 text-[#9cafa6]">{detail.intro}</p>
        <ul className="mt-8 flex flex-wrap gap-2 p-0">
          {project.stats.map((stat) => (
            <li
              className="list-none rounded-full border border-[#2c463e] px-3 py-2 font-mono text-[10px] text-[#b6c5be]"
              key={stat}
            >
              {stat}
            </li>
          ))}
        </ul>

        {project.slug === 'servora' && (
          <section className="mt-14 rounded-[20px] border border-[#26463b] bg-[#0c1916] p-8">
            <p className="m-0 font-mono text-[10px] tracking-[.12em] text-[#71f6b5] uppercase">
              Explore the live system
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-.04em]">Try each Servora application.</h2>
            <p className="max-w-[760px] leading-7 text-[#9cafa6]">
              These are the deployed applications linked from my résumé. Each surface is intentionally focused on a
              different restaurant role.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3 max-[650px]:grid-cols-1">
              {servoraLinks.map((link) => (
                <a
                  className="group rounded-xl border border-[#29463d] p-4 transition hover:border-[#71f6b5]"
                  href={link.href}
                  key={link.label}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="flex items-center justify-between text-sm font-semibold">
                    {link.label} <ExternalArrow />
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-[#8fa29a] group-hover:text-[#b9c8c1]">
                    {link.description}
                  </span>
                </a>
              ))}
            </div>
          </section>
        )}

        <div className="mt-20 border-t border-[#20362f]">
          {detail.sections.map((section) => (
            <section
              className="grid grid-cols-[.6fr_1.4fr] gap-12 border-b border-[#20362f] py-12 max-[700px]:grid-cols-1 max-[700px]:gap-4"
              key={section.title}
            >
              <h2 className="text-2xl font-medium tracking-[-.03em]">{section.title}</h2>
              <div>
                <p className="m-0 leading-8 text-[#9cafa6]">{section.copy}</p>
                {section.items && (
                  <ul className="mt-6 space-y-3 pl-5 text-[#c5d2cc]">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>
      </article>
      <Footer />
    </main>
  );
}
