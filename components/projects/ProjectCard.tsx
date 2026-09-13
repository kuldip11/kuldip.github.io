import Link from 'next/link';

import { AppIcon } from '@/components/portfolio/AppIcon';
import { ProjectVisual } from '@/components/portfolio/InnerPageUi';
import { SurfaceCard } from '@/components/ui';
import { PROJECTS_PAGE_CONTENT } from '@/constants/pages/projects.constants';
import { ROUTES } from '@/constants/routes';
import type { ProjectDefinition } from '@/types/project.types';

export const ProjectCard = ({ project }: { project: ProjectDefinition }) => (
  <Link className="group block" href={ROUTES.project(project.slug)}>
    <SurfaceCard className="overflow-hidden transition group-hover:-translate-y-0.5 group-hover:border-border-strong group-hover:shadow-card">
      <div className="bg-secondary-soft p-5">
        <ProjectVisual variant={project.caseStudy.visualVariant} compact />
      </div>
      <div className="p-6 sm:p-7">
        <p className="text-[11px] font-bold tracking-[.1em] text-secondary uppercase">{project.category}</p>
        <h3 className="mt-3 text-[29px] font-semibold tracking-[-.045em] text-foreground">{project.name}</h3>
        <p className="mt-3 text-[14px] leading-[1.7] text-foreground-secondary">{project.description}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-primary">
          {PROJECTS_PAGE_CONTENT.viewProjectLabel}{' '}
          <AppIcon name="arrow-right" className="size-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </SurfaceCard>
  </Link>
);
