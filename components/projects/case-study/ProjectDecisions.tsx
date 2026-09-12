import { AppIcon } from '@/components/portfolio/AppIcon';
import { PROJECT_DETAIL_CONTENT } from '@/constants/pages/projects.constants';
import { INNER_PAGE_PANEL_CLASS } from '@/constants/styles/component-styles.constants';
import type { ProjectDecision } from '@/types/project.types';

export const ProjectDecisions = ({ decisions }: { decisions: readonly ProjectDecision[] }) => (
  <section className="mt-4" id="decisions">
    <div className="mb-4 flex items-center gap-2">
      <AppIcon name="architecture" className="size-5 text-accent" />
      <h2 className="text-[20px] font-bold">{PROJECT_DETAIL_CONTENT.decisionsTitle}</h2>
    </div>
    <div className="grid gap-3 lg:grid-cols-2">
      {decisions.map((decision, index) => (
        <article className={`${INNER_PAGE_PANEL_CLASS} group relative overflow-hidden p-5 sm:p-6`} key={decision.title}>
          <span aria-hidden="true" className="absolute top-4 right-5 font-mono text-[34px] font-bold text-[#153d30]">
            0{index + 1}
          </span>
          <h3 className="relative pr-12 text-[17px] font-bold tracking-[-.025em] text-[#eff7f2]">{decision.title}</h3>
          <div className="relative mt-5 grid gap-3 sm:grid-cols-3">
            <div>
              <span className="font-mono text-[9px] tracking-[.14em] text-[#7da494] uppercase">Constraint</span>
              <p className="mt-1.5 text-[11px] leading-[1.55] text-[#aebdb6]">{decision.problem}</p>
            </div>
            <div>
              <span className="font-mono text-[9px] tracking-[.14em] text-accent uppercase">Decision</span>
              <p className="mt-1.5 text-[11px] leading-[1.55] text-[#c5d2cc]">{decision.decision}</p>
            </div>
            <div>
              <span className="font-mono text-[9px] tracking-[.14em] text-[#7da494] uppercase">Result</span>
              <p className="mt-1.5 text-[11px] leading-[1.55] text-[#aebdb6]">{decision.outcome}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);
