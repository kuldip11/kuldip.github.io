import Link from 'next/link';

import { ExternalArrow } from '@/components/portfolio/ExternalArrow';
import { Footer } from '@/components/portfolio/Footer';
import { Header } from '@/components/portfolio/Header';
import { projects } from '@/data/portfolio';
import { servoraLinks } from '@/data/site';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frontend Engineering Case Studies',
  description:
    'Selected frontend engineering case studies covering multi-tenant product architecture, Mapbox performance and enterprise workflow design.',
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#07110f] text-[#f2f4ee]">
      <Header />
      <section className="mx-auto max-w-[1100px] px-12 py-24 max-[650px]:px-5">
        <p className="font-mono text-[11px] tracking-[.14em] text-[#71f6b5] uppercase">Case studies</p>
        <h1 className="mt-5 max-w-[850px] text-[clamp(3.4rem,7vw,7rem)] leading-[.92] font-medium tracking-[-.065em]">
          Engineering decisions, not just screenshots.
        </h1>
        <p className="mt-8 max-w-[720px] text-lg leading-8 text-[#9cafa6]">
          Detailed examples of how I approach architecture, performance and complex product workflows.
        </p>
        <div className="mt-16 grid gap-6">
          {projects.map((project) => (
            <article className="rounded-[20px] border border-[#20362f] bg-[#0c1916] p-8" key={project.slug}>
              <span className="font-mono text-[10px] text-[#71f6b5]">
                {project.index} · {project.label}
              </span>
              <h2 className="mt-5 text-3xl font-medium tracking-[-.04em]">{project.seoTitle}</h2>
              <p className="max-w-[760px] leading-7 text-[#9cafa6]">{project.summary}</p>
              {project.slug === 'servora' && (
                <div className="my-6 flex flex-wrap gap-x-4 gap-y-2">
                  {servoraLinks
                    .filter((link) => link.label !== 'API')
                    .map((link) => (
                      <a
                        className="inline-flex items-center gap-1.5 text-xs text-[#c3d0ca] transition hover:text-[#71f6b5]"
                        href={link.href}
                        key={link.label}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {link.label} <ExternalArrow />
                      </a>
                    ))}
                </div>
              )}
              <Link
                className="mt-5 inline-flex items-center gap-2 border-b border-[#577268] pb-1 text-sm"
                href={`/projects/${project.slug}`}
              >
                Read case study <ExternalArrow />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
