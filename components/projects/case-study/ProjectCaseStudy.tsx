import Link from 'next/link';

import { AppIcon } from '@/components/portfolio/AppIcon';
import { PROJECT_DETAIL_CONTENT } from '@/constants/pages/project-details.constants';
import { ROUTES } from '@/constants/routes';
import { siteConfig } from '@/constants/site';
import type { ProjectDefinition } from '@/types/project.types';

import { ProjectApplications } from './ProjectApplications';
import { ProjectArchitecture } from './ProjectArchitecture';
import { ProjectClosing } from './ProjectClosing';
import { ProjectContext } from './ProjectContext';
import { ProjectDecisions } from './ProjectDecisions';
import { ProjectEcosystem } from './ProjectEcosystem';
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
    <main id="main-content" tabIndex={-1} className="min-h-screen bg-page text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <article className="mx-auto w-full max-w-[1280px] px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
        <Link
          className="inline-flex min-h-11 items-center gap-2 text-[12px] font-semibold text-foreground-muted transition hover:text-primary"
          href={ROUTES.projects}
        >
          <AppIcon name="arrow-left" className="size-4" />
          {PROJECT_DETAIL_CONTENT.backLabel}
        </Link>
        <ProjectHero project={project} />
        <ProjectMetrics metrics={project.caseStudy.metrics} />
        <ProjectNavigation items={project.caseStudy.navigation} />
        <ProjectOverview project={project} />
        <ProjectContext context={project.caseStudy.context} />
        <ProjectEcosystem ecosystem={project.caseStudy.ecosystem} />
        <ProjectArchitecture caseStudy={project.caseStudy} />
        <ProjectDecisions decisions={project.caseStudy.decisions} />
        <ProjectEngineering sections={project.caseStudy.sections} />
        <ProjectStack groups={project.caseStudy.stack} />
        <ProjectQuality items={project.caseStudy.quality} />
        <ProjectApplications
          heading={project.caseStudy.applicationHeading}
          applications={project.caseStudy.applications}
        />
        <ProjectClosing project={project} />
      </article>
    </main>
  );
};
