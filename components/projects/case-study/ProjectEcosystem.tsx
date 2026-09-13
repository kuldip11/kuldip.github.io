import { AppIcon } from '@/components/portfolio/AppIcon';
import { IconBox } from '@/components/ui';
import type { ProjectEcosystemDefinition } from '@/types/project.types';

export const ProjectEcosystem = ({ ecosystem }: { ecosystem?: ProjectEcosystemDefinition }) => {
  if (!ecosystem) return null;

  return (
    <section className="scroll-mt-32 border-y border-border bg-surface-muted py-16 sm:py-20" id="ecosystem">
      <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-start lg:gap-16">
        <div>
          <p className="text-[12px] font-bold tracking-[.14em] text-secondary uppercase">{ecosystem.eyebrow}</p>
          <h2 className="mt-3 text-[clamp(2.2rem,4vw,3.8rem)] leading-[1.03] font-semibold tracking-[-.05em] text-foreground">
            {ecosystem.title}
          </h2>
          <p className="mt-5 text-[15px] leading-[1.75] text-foreground-secondary">{ecosystem.copy}</p>
        </div>

        <div className="rounded-[28px] border border-border bg-surface p-5 shadow-card sm:p-7">
          <div className="rounded-[22px] border border-primary-muted bg-primary-soft p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground">
                <AppIcon name="architecture" className="size-5" />
              </span>
              <div>
                <strong className="text-[16px] font-semibold text-foreground">{ecosystem.hubLabel}</strong>
                <span className="mt-1 block text-[12px] leading-[1.6] text-foreground-secondary">
                  {ecosystem.hubDetail}
                </span>
              </div>
            </div>
          </div>

          <div className="relative mt-5 grid gap-3 sm:grid-cols-2">
            {ecosystem.nodes.map((node) => (
              <article className="rounded-[18px] border border-border bg-surface p-4" key={node.label}>
                <div className="flex items-start gap-3">
                  <IconBox className="mt-0.5 size-8" tone="neutral">
                    <AppIcon name="apps" className="size-4" />
                  </IconBox>
                  <div>
                    <h3 className="text-[13px] font-semibold text-foreground">{node.label}</h3>
                    <p className="mt-1 text-[12px] leading-[1.6] text-foreground-muted">{node.detail}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
