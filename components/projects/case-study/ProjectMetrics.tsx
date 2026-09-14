import { GlyphIcon } from '@/components/portfolio/GlyphIcon';
import type { ProjectMetric } from '@/types/project.types';

export const ProjectMetrics = ({ metrics }: { metrics: readonly ProjectMetric[] }) => (
  <section className="grid grid-cols-2 border-b border-border py-8 sm:grid-cols-3 lg:grid-cols-5">
    {metrics.map(({ value, label, icon }, index) => (
      <div className="border-border px-4 py-3 first:pl-0 sm:border-r sm:last:border-r-0" key={label}>
        <div className="flex items-center gap-2 text-primary">
          <GlyphIcon glyph={icon} className="size-4" />
          <strong className="text-[22px] font-semibold tracking-[-.04em] text-foreground">{value}</strong>
        </div>
        <span className="mt-1 block text-[11px] leading-[1.5] text-foreground-muted">{label}</span>
        <span className="sr-only">Metric {index + 1}</span>
      </div>
    ))}
  </section>
);
