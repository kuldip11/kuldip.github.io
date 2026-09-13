import { AppIcon } from '@/components/portfolio/AppIcon';
import { PROJECT_DETAIL_CONTENT } from '@/constants/pages/projects.constants';
import type { ProjectCaseStudyDefinition } from '@/types/project.types';

export const ProjectArchitecture = ({ caseStudy }: { caseStudy: ProjectCaseStudyDefinition }) => (
  <section className="scroll-mt-32 border-y border-border bg-surface-muted py-16 sm:py-20" id="architecture">
    <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-start lg:gap-16">
      <div>
        <p className="text-[12px] font-bold tracking-[.14em] text-secondary uppercase">
          {PROJECT_DETAIL_CONTENT.architectureTitle}
        </p>
        <h2 className="mt-3 text-[clamp(2.2rem,4vw,3.8rem)] leading-[1.03] font-semibold tracking-[-.05em] text-foreground">
          {caseStudy.architectureTitle}
        </h2>
        <p className="mt-5 text-[15px] leading-[1.75] text-foreground-secondary">{caseStudy.architectureCopy}</p>
      </div>
      <div className="grid gap-3">
        {caseStudy.architecture.map((node, index) => (
          <div className="grid grid-cols-[48px_1fr] items-center gap-4" key={node.label}>
            <span className="grid size-12 place-items-center rounded-2xl border border-border bg-surface text-primary shadow-card">
              <AppIcon
                name={index === caseStudy.architecture.length - 1 ? 'cloud' : index === 0 ? 'apps' : 'architecture'}
                className="size-5"
              />
            </span>
            <div className="rounded-[18px] border border-border bg-surface p-4">
              <strong className="text-[14px] font-semibold text-foreground">{node.label}</strong>
              <span className="mt-1 block text-[12px] leading-[1.6] text-foreground-muted">{node.detail}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
