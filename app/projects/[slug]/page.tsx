import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Footer } from '@/components/portfolio/Footer';
import { Header } from '@/components/portfolio/Header';
import { ActionLink, Eyebrow, InnerPageBackdrop, panel, ProjectVisual } from '@/components/portfolio/InnerPageUi';
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
  const project = projects.find((x) => x.slug === slug);
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

const Icon = ({ children }: { children: React.ReactNode }) => (
  <span className="grid size-10 shrink-0 place-items-center rounded-full border border-[#2c8060] text-[18px] text-[#59ecb0]">
    {children}
  </span>
);

export default async function ProjectCaseStudy({ params }: { params: Params }) {
  const { slug } = await params;
  const project = projects.find((x) => x.slug === slug);
  const detail = projectDetails[slug];
  if (!project || !detail) notFound();
  const servora = slug === 'servora';
  const mapbox = slug === 'mapbox-performance';
  const metrics = [
    ['5+', 'Apps / Monorepo'],
    ['40+', 'Database Tables'],
    ['Real-time', 'WebSocket'],
    ['Multi-tenant', 'Franchise/Branch'],
    ['Production Ready', 'Deployed & Tested'],
  ];

  const overviewItems = [
    ['Point of Sale', 'Fast, intuitive ordering'],
    ['Kitchen Display', 'Real-time order routing'],
    ['Customer App', 'Online ordering & tracking'],
    ['Waiter App', 'Table management'],
    ['Admin Dashboard', 'Business insights & control'],
    ['Multi-tenant', 'Organization → Franchise → Branch'],
  ];
  const highlights = [
    ['Real-time order synchronization', 'WebSocket-based live updates across all apps'],
    ['Scalable multi-tenant architecture', 'Organization, franchise and branch hierarchy'],
    ['Complete restaurant operations', 'POS, kitchen, waiter, customer and admin apps'],
    ['Production ready', 'Deployed, tested and real restaurant workflows'],
    ['Modern tech stack', 'React, Next.js, TypeScript, Node.js and more'],
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: project.seoTitle,
    description: project.summary,
    datePublished: project.publishedAt,
    dateModified: project.updatedAt,
    image: `${siteConfig.url}${siteConfig.image}`,
    author: { '@type': 'Person', name: siteConfig.name, url: siteConfig.url },
  };
  return (
    <>
      <Header />
      <InnerPageBackdrop>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        <article className="relative mx-auto max-w-[1500px] px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
          <Link className="text-[12px] font-semibold text-[#59ecb0]" href="/projects">
            ← &nbsp;Back to projects
          </Link>
          <section className="mt-6 grid gap-7 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
            <div>
              <span className="rounded-full border border-[#42dca2] px-3 py-1.5 text-[11px] text-[#59ecb0]">
                Featured Project
              </span>
              <h1
                aria-label={project.seoTitle}
                className="mt-4 text-[clamp(2.45rem,5vw,4.8rem)] leading-[.96] font-bold tracking-[-.055em]"
              >
                <>
                  <span className="text-[#59ecb0]">Servora</span> — Modern
                  <br />
                  Restaurant POS
                  <br />
                  Ecosystem
                </>
              </h1>
              <p className="mt-4 max-w-[650px] text-[14px] leading-[1.62] text-[#b5c4bd] sm:text-[16px]">
                {detail.intro}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <ActionLink href={servora ? servoraLinks[1].href : '#overview'} external={servora}>
                  Live Demo
                </ActionLink>
                <ActionLink
                  href={
                    servora
                      ? (servoraLinks.find((x) => x.label === 'GitHub')?.href ?? siteConfig.github)
                      : siteConfig.github
                  }
                  secondary
                  external
                >
                  View Source
                </ActionLink>
              </div>
            </div>
            <ProjectVisual variant={servora ? 'servora' : mapbox ? 'mapbox' : 'other'} />
          </section>
          <section className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
            {metrics.map(([v, l], i) => (
              <div className={`${panel} p-4`} key={l}>
                <div className="text-[24px] text-[#59ecb0]">{['⌘', '◉', 'ϟ', '♙', '◎'][i]}</div>
                <strong className="mt-3 block text-[18px]">{v}</strong>
                <span className="mt-1 block text-[11px] text-[#b0c0b8]">{l}</span>
              </div>
            ))}
          </section>
          <nav
            className={`${panel} mt-5 flex gap-8 overflow-x-auto px-5 py-4 text-[11px] text-[#c9d6d0]`}
            aria-label="Case study sections"
          >
            {['Overview', 'Tech Stack', 'Key Features', 'Architecture', 'Gallery', 'Impact', 'Learnings'].map(
              (x, i) => (
                <a
                  className={i === 0 ? 'border-b border-[#59ecb0] pb-2 text-[#59ecb0]' : ''}
                  href={i === 0 ? '#overview' : '#details'}
                  key={x}
                >
                  {x}
                </a>
              ),
            )}
          </nav>
          <section className="mt-5 grid gap-4 xl:grid-cols-[1.2fr_.8fr]" id="overview">
            <div className={`${panel} p-5 sm:p-6`}>
              <h2 className="text-[20px] font-bold">◉ &nbsp;Project Overview</h2>
              <p className="mt-4 text-[14px] leading-[1.65] text-[#b6c4bd]">
                {project.summary} {detail.sections[0]?.copy}
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {overviewItems.map(([a, b]) => (
                  <div className="rounded-[12px] border border-[#245b45] bg-[#081b16] p-4" key={a}>
                    <strong className="text-[12px]">{a}</strong>
                    <span className="mt-1 block text-[10px] text-[#9fb2a9]">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={`${panel} p-5 sm:p-6`}>
              <h2 className="text-[20px] font-bold">⚙ &nbsp;Key Highlights</h2>
              <div className="mt-4 space-y-4">
                {highlights.map(([a, b], i) => (
                  <div className="flex gap-3" key={a}>
                    <Icon>{['♙', '⌘', '⌖', '▣', '◈', '↻'][i]}</Icon>
                    <div>
                      <h3 className="text-[13px] font-bold">{a}</h3>
                      <p className="mt-1 text-[11px] leading-[1.5] text-[#aebdb6]">{b}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={`${panel} mt-4 p-5 sm:p-6`} id="details">
            <h2 className="sr-only">Try each Servora application.</h2>
            <h3 className="text-[20px] font-bold">▣ &nbsp;Live Applications</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {servoraLinks.map((x) => (
                <a
                  className="rounded-[12px] border border-[#245b45] bg-[#081b16] p-4"
                  href={x.href}
                  target="_blank"
                  rel="noreferrer"
                  key={x.label}
                >
                  <span className="text-[20px] text-[#59ecb0]">▣</span>
                  <strong className="mt-3 block text-[12px]">{x.label}</strong>
                  <span className="mt-1 block text-[10px] text-[#9fb2a9]">{x.description}</span>
                  <span className="mt-3 block text-[12px] font-semibold text-[#59ecb0]">Open ↗</span>
                </a>
              ))}
            </div>
          </section>
        </article>
      </InnerPageBackdrop>
      <Footer />
    </>
  );
}
