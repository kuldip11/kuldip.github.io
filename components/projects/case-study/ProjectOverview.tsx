import { AppIcon } from '@/components/portfolio/AppIcon';
import { PROJECT_DETAIL_CONTENT } from '@/constants/pages/projects.constants';
import { INNER_PAGE_PANEL_CLASS } from '@/constants/styles/component-styles.constants';
import type { ProjectDefinition } from '@/types/project.types';

import { CaseStudyIcon } from './CaseStudyIcon';

export const ProjectOverview = ({ project }: { project: ProjectDefinition }) => (
  <section className="mt-5 grid gap-4 xl:grid-cols-[1.2fr_.8fr]" id="overview">
    <div className={`${INNER_PAGE_PANEL_CLASS} p-5 sm:p-6`}>
      <h2 className="flex items-center gap-2 text-[20px] font-bold">
        <AppIcon name="apps" className="size-5 text-[#59ecb0]" />
        {PROJECT_DETAIL_CONTENT.overviewTitle}
      </h2>
      <p className="mt-4 text-[14px] leading-[1.65] text-[#b6c4bd]">
        {project.summary} {project.caseStudy.sections[0]?.copy}
      </p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {project.caseStudy.overviewItems.map(([title, description]) => (
          <div className="rounded-[12px] border border-[#245b45] bg-[#081b16] p-4" key={title}>
            <strong className="text-[12px]">{title}</strong>
            <span className="mt-1 block text-[10px] text-[#9fb2a9]">{description}</span>
          </div>
        ))}
      </div>
    </div>
    <div className={`${INNER_PAGE_PANEL_CLASS} p-5 sm:p-6`}>
      <h2 className="flex items-center gap-2 text-[20px] font-bold">
        <AppIcon name="featured" className="size-5 text-[#59ecb0]" />
        {PROJECT_DETAIL_CONTENT.highlightsTitle}
      </h2>
      <div className="mt-4 space-y-4">
        {project.caseStudy.highlights.map(([title, description, icon]) => (
          <div className="flex gap-3" key={title}>
            <CaseStudyIcon glyph={icon} />
            <div>
              <h3 className="text-[13px] font-bold">{title}</h3>
              <p className="mt-1 text-[11px] leading-[1.5] text-[#aebdb6]">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
