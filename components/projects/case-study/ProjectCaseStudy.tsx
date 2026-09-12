import Link from 'next/link';

import { AppIcon } from '@/components/portfolio/AppIcon';
import { InnerPageBackdrop } from '@/components/portfolio/InnerPageUi';
import { PROJECT_DETAIL_CONTENT } from '@/constants/pages/projects.constants';
import { ROUTES } from '@/constants/routes';
import { siteConfig } from '@/constants/site';
import type { ProjectDefinition } from '@/types/project.types';

import { ProjectApplications } from './ProjectApplications';
import { ProjectArchitecture } from './ProjectArchitecture';
import { ProjectDecisions } from './ProjectDecisions';
import { ProjectEngineering } from './ProjectEngineering';
import { ProjectHero } from './ProjectHero';
import { ProjectMetrics } from './ProjectMetrics';
import { ProjectNavigation } from './ProjectNavigation';
import { ProjectOverview } from './ProjectOverview';
import { ProjectQuality } from './ProjectQuality';
import { ProjectStack } from './ProjectStack';

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
        <Link className="inline-flex items-center gap-2 text-[12px] font-semibold text-accent" href={ROUTES.projects}>
          <AppIcon name="arrow-left" className="size-4" />
          {PROJECT_DETAIL_CONTENT.backLabel}
        </Link>
        <ProjectHero project={project} />
        <ProjectMetrics metrics={project.caseStudy.metrics} />
        <ProjectNavigation items={project.caseStudy.navigation} />
        <ProjectOverview project={project} />
        <ProjectArchitecture caseStudy={project.caseStudy} />
        <ProjectDecisions decisions={project.caseStudy.decisions} />
        <ProjectEngineering sections={project.caseStudy.sections} />
        <ProjectStack groups={project.caseStudy.stack} />
        <ProjectQuality items={project.caseStudy.quality} />
        <ProjectApplications
          heading={project.caseStudy.applicationHeading}
          applications={project.caseStudy.applications}
        />
      </article>
    </InnerPageBackdrop>
  );
};
