import { Footer } from '@/components/portfolio/Footer';
import { Header } from '@/components/portfolio/Header';
import { Eyebrow, InnerPageBackdrop, panel, Pills, ProjectCard } from '@/components/portfolio/InnerPageUi';
import { seoCopy } from '@/constants/seo';
import { siteConfig, socialImage } from '@/constants/site';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: seoCopy.projects.title,
  description: seoCopy.projects.description,
  alternates: { canonical: '/projects' },
  openGraph: {
    type: 'website',
    url: '/projects',
    siteName: siteConfig.name,
    title: seoCopy.projects.title,
    description: seoCopy.projects.description,
    images: [socialImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: seoCopy.projects.title,
    description: seoCopy.projects.description,
    images: [socialImage],
  },
};

function ComingSoonProject() {
  return (
    <article className={`${panel} relative min-h-[260px] overflow-hidden p-5 sm:p-6`}>
      <div
        aria-hidden="true"
        className="absolute inset-0 [background-image:radial-gradient(#2ca376_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom_right,black,transparent_70%)] [background-size:18px_18px] opacity-50"
      />
      <div className="relative flex h-full min-h-[220px] flex-col justify-between">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="inline-flex rounded-full border border-[#27775a] bg-[#071713] px-3 py-1.5 font-mono text-[9px] tracking-[.12em] text-[#71f6b5]">
              NEXT BUILD
            </span>
            <h2 className="mt-4 text-[24px] font-bold tracking-[-.03em] sm:text-[28px]">Project coming soon.</h2>
            <p className="mt-2 max-w-[460px] text-[12px] leading-[1.6] text-[#aebdb6] sm:text-[13px]">
              I&apos;m working on the next case study. It will appear here when there is something meaningful to show,
              not just another placeholder project.
            </p>
          </div>
          <div className="grid size-14 shrink-0 place-items-center rounded-[16px] border border-[#27775a] bg-[#092018] text-[26px] text-[#59ecb0] shadow-[0_0_28px_rgba(89,236,176,.1)]">
            +
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <InnerPageBackdrop>
        <section className="relative mx-auto max-w-[1500px] px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_.85fr] lg:items-center">
            <div>
              <Eyebrow>My Work</Eyebrow>
              <h1 className="mt-2 text-[clamp(2.8rem,5vw,4.9rem)] leading-none font-bold tracking-[-.055em] text-[#59ecb0]">
                Projects
              </h1>
              <h2 className="mt-2 text-[24px] font-bold tracking-[-.03em] sm:text-[30px]">
                Real products. Real impact.
              </h2>
              <p className="mt-4 max-w-[680px] text-[14px] leading-[1.65] text-[#b5c4bd] sm:text-[16px]">
                A collection of projects I&apos;ve built — from full-stack products to performance tools and open source
                contributions. Each project reflects a problem, a solution, and real-world impact.
              </p>
            </div>
            <div className="grid grid-cols-[1fr_.8fr] items-center gap-5 rounded-[20px] border border-[#176746] bg-[#071713]/80 p-5">
              <div className="grid min-h-[180px] place-items-center rounded-[16px] border border-[#245b45] bg-[#081d17] text-center font-mono text-[24px] leading-tight text-[#59ecb0]">
                Ideas
                <br />
                Build
                <br />
                Better
                <br />
                Products
              </div>
              <ul className="space-y-5 text-[14px] font-semibold text-[#dbe6e0]">
                <li>◉ &nbsp;Real Problems</li>
                <li>◉ &nbsp;Practical Solutions</li>
                <li>◉ &nbsp;Measurable Impact</li>
              </ul>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <Pills items={['All  1', '☆ Featured  1']} />
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <ProjectCard
              slug="servora"
              title="Servora"
              copy="Multi-tenant restaurant management ecosystem with POS, kitchen, waiter, customer ordering and powerful admin dashboard."
              variant="servora"
              tags={['React', 'Node.js', 'PostgreSQL', 'WebSocket']}
              badge="☆ Featured"
              category="SaaS / POS"
            />

            <ComingSoonProject />
          </div>
          <div className="mt-5 flex flex-col gap-4 rounded-[18px] border border-[#176746] bg-[#071713]/90 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-[17px] font-bold">⚡ &nbsp;More projects coming soon...</h3>
              <p className="mt-1 text-[13px] text-[#aebdb6]">
                I&apos;m always building, learning and exploring new ideas. Check back for updates!
              </p>
            </div>
            <a
              className="rounded-full border border-[#45dba4] px-5 py-3 text-[12px] font-semibold text-[#59ecb0]"
              href="/articles"
            >
              Follow my journey →
            </a>
          </div>
        </section>
      </InnerPageBackdrop>
      <Footer />
    </>
  );
}
