import Link from 'next/link';

import { InnerPageBackdrop } from '@/components/portfolio/InnerPageUi';
import { PROJECT_DETAIL_CONTENT } from '@/constants/pages/projects.constants';
import { ROUTES } from '@/constants/routes';
import { siteConfig } from '@/constants/site';
import type { ProjectDefinition } from '@/types/project.types';

import { ProjectApplications } from './ProjectApplications';
import { ProjectHero } from './ProjectHero';
import { ProjectMetrics } from './ProjectMetrics';
import { ProjectNavigation } from './ProjectNavigation';
import { ProjectOverview } from './ProjectOverview';

export const ProjectCaseStudy = ({ project }: { project: ProjectDefinition }) => {
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
    <InnerPageBackdrop>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <article className="relative mx-auto max-w-[1500px] px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
        <Link className="text-[12px] font-semibold text-[#59ecb0]" href={ROUTES.projects}>
          {PROJECT_DETAIL_CONTENT.backLabel}
        </Link>
        <ProjectHero project={project} />
        <ProjectMetrics metrics={project.caseStudy.metrics} />
        <ProjectNavigation items={project.caseStudy.navigation} />
        <ProjectOverview project={project} />
        <ProjectApplications
          heading={project.caseStudy.applicationHeading}
          applications={project.caseStudy.applications}
        />
      </article>
    </InnerPageBackdrop>
  );
};
