import Link from 'next/link';
import { notFound } from 'next/navigation';

import { ExternalArrow } from '@/components/portfolio/ExternalArrow';
import { Footer } from '@/components/portfolio/Footer';
import { Header } from '@/components/portfolio/Header';
import { projects } from '@/data/portfolio';
import { servoraLinks, siteConfig } from '@/data/site';

import type { Metadata } from 'next';

type Params = Promise<{ slug: string }>;

type ProjectDetail = {
  eyebrow: string;
  intro: string;
  sections: { title: string; copy: string; items?: string[] }[];
};

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
      images: ['/og.png'],
    },
  };
}

const details: Record<string, ProjectDetail> = {
  servora: {
    eyebrow: 'Multi-tenant restaurant product',
    intro:
      'Servora brings several restaurant roles and interfaces into one typed system while keeping pricing, permissions and operational state authoritative and consistent.',
    sections: [
      {
        title: 'The problem',
        copy: 'Restaurant operations span owners, managers, waiters, kitchen staff and customers. Each role needs a focused interface, but all of those interfaces still depend on the same ordering, menu, availability, pricing and authorization rules.',
      },
      {
        title: 'Architecture',
        copy: 'The system is organized as a monorepo with separate applications and shared packages so each surface can evolve independently without duplicating core contracts.',
        items: [
          'Separate web, customer, kitchen and waiter experiences',
          'Shared types, validation, API client, realtime and UI packages',
          'Server-authoritative pricing and availability rules',
          'Role-aware access across tenant and branch context',
        ],
      },
      {
        title: 'Engineering priorities',
        copy: 'The focus is maintainable boundaries: business logic lives in the appropriate shared or server layer, application shells stay focused on their role, and test coverage protects cross-application behavior.',
      },
      {
        title: 'What this demonstrates',
        copy: 'End-to-end product architecture, multi-tenant modeling, permission-aware UX, shared TypeScript contracts, realtime workflows, testing strategy and CI/CD thinking.',
      },
    ],
  },
  'mapbox-performance': {
    eyebrow: 'Proptech · Geospatial performance',
    intro:
      'A dense map can become unusable long before the rest of the interface feels complex. This work focused on keeping interaction fluid with more than 100,000 live points across many domain layers.',
    sections: [
      {
        title: 'The challenge',
        copy: 'Large geospatial datasets create pressure in rendering, event handling, visibility state and tooltip behavior. Treating every point as a regular React element does not scale well.',
      },
      {
        title: 'Rendering strategy',
        copy: 'The solution used Mapbox-native layer lifecycles and clustering rather than pushing every visual feature through the React component tree.',
        items: [
          'Custom source and layer lifecycle',
          'Clustering for dense regions',
          'Fine-grained visibility controls',
          'Interactive tooltips without rendering thousands of React markers',
        ],
      },
      {
        title: 'Performance mindset',
        copy: 'The goal was not a benchmark in isolation; it was keeping pan, zoom and exploration responsive enough that the dataset still felt immediate to the user.',
      },
      {
        title: 'What this demonstrates',
        copy: 'React performance judgment, Mapbox architecture, rendering-system boundaries, state synchronization and data-intensive UI design.',
      },
    ],
  },
  'enterprise-frontend-architecture': {
    eyebrow: 'Enterprise · Frontend architecture',
    intro:
      'Enterprise products accumulate conditional states, role differences and long-running workflows. The architecture has to make those workflows easier to change, not merely possible to build.',
    sections: [
      {
        title: 'The challenge',
        copy: 'Onboarding, projects, vendors, contracts and milestones share patterns but differ in rules, state transitions and permission boundaries. Copy-pasting screens creates short-term speed and long-term maintenance cost.',
      },
      {
        title: 'System design',
        copy: 'Reusable primitives and typed contracts were used to keep repeated workflow concerns consistent while still allowing domain-specific behavior.',
        items: [
          'Reusable interface components',
          'Clear feature boundaries',
          'Typed data contracts',
          'Role-aware workflow states',
          'Performance-conscious loading and rendering',
        ],
      },
      {
        title: 'Delivery quality',
        copy: 'Testing, accessibility and performance were treated as part of the implementation system rather than separate cleanup activities at the end.',
      },
      {
        title: 'What this demonstrates',
        copy: 'Frontend architecture, reusable component design, enterprise workflow modeling, performance optimization and cross-functional delivery.',
      },
    ],
  },
};

export default async function ProjectCaseStudy({ params }: { params: Params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  const detail = details[slug];

  if (!project || !detail) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: project.seoTitle,
    description: project.summary,
    author: { '@type': 'Person', name: siteConfig.name, url: siteConfig.url },
    mainEntityOfPage: `${siteConfig.url}/projects/${project.slug}`,
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
