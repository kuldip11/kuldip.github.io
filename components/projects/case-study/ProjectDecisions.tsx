import { PROJECT_DETAIL_CONTENT } from '@/constants/pages/projects.constants';
import type { ProjectDecision } from '@/types/project.types';

export const ProjectDecisions = ({ decisions }: { decisions: readonly ProjectDecision[] }) => (
  <section className="scroll-mt-32 py-16 sm:py-20" id="decisions">
    <p className="text-[12px] font-bold tracking-[.14em] text-primary uppercase">
      {PROJECT_DETAIL_CONTENT.decisionsTitle}
    </p>
    <h2 className="mt-3 max-w-[760px] text-[clamp(2.2rem,4vw,3.8rem)] leading-[1.03] font-semibold tracking-[-.05em] text-foreground">
      {PROJECT_DETAIL_CONTENT.decisionsHeading}
    </h2>
    <div className="mt-9 grid gap-5 lg:grid-cols-2">
      {decisions.map((decision, index) => (
        <article
          className="relative overflow-hidden rounded-[22px] border border-border bg-surface p-6 sm:p-7"
          key={decision.title}
        >
          <span
            aria-hidden="true"
            className="absolute top-5 right-6 text-[34px] font-semibold tracking-[-.05em] text-primary-muted"
          >
            0{index + 1}
          </span>
          <h3 className="max-w-[80%] text-[20px] font-semibold tracking-[-.035em] text-foreground">{decision.title}</h3>
          <dl className="mt-7 grid gap-5">
            <div>
              <dt className="text-[10px] font-bold tracking-[.13em] text-foreground-muted uppercase">
                {PROJECT_DETAIL_CONTENT.decisionProblemLabel}
              </dt>
              <dd className="mt-1.5 text-[13px] leading-[1.65] text-foreground-secondary">{decision.problem}</dd>
            </div>
            <div>
              <dt className="text-[10px] font-bold tracking-[.13em] text-primary uppercase">
                {PROJECT_DETAIL_CONTENT.decisionChoiceLabel}
              </dt>
              <dd className="mt-1.5 text-[13px] leading-[1.65] text-foreground-secondary">{decision.decision}</dd>
            </div>
            <div>
              <dt className="text-[10px] font-bold tracking-[.13em] text-secondary uppercase">
                {PROJECT_DETAIL_CONTENT.decisionOutcomeLabel}
              </dt>
              <dd className="mt-1.5 text-[13px] leading-[1.65] text-foreground-secondary">{decision.outcome}</dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  </section>
);
