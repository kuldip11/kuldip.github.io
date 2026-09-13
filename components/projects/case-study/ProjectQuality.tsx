import { PROJECT_DETAIL_CONTENT } from '@/constants/pages/projects.constants';
import type { ProjectQualityItem } from '@/types/project.types';

export const ProjectQuality = ({ items }: { items: readonly ProjectQualityItem[] }) => (
  <section className="scroll-mt-32 border-y border-border bg-surface-muted py-16 sm:py-20" id="quality">
    <p className="text-[12px] font-bold tracking-[.14em] text-primary uppercase">
      {PROJECT_DETAIL_CONTENT.qualityTitle}
    </p>
    <h2 className="mt-3 max-w-[760px] text-[clamp(2rem,3.5vw,3.3rem)] font-semibold tracking-[-.05em] text-foreground">
      {PROJECT_DETAIL_CONTENT.qualityHeading}
    </h2>
    <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
      {items.map((item) => (
        <article className="rounded-[18px] border border-border bg-surface p-5" key={item.label}>
          <strong className="block text-[clamp(1.8rem,3vw,2.8rem)] leading-none font-semibold tracking-[-.05em] text-primary">
            {item.value}
          </strong>
          <span className="mt-3 block text-[13px] font-semibold text-foreground">{item.label}</span>
          <p className="mt-2 text-[11px] leading-[1.6] text-foreground-muted">{item.detail}</p>
        </article>
      ))}
    </div>
  </section>
);
