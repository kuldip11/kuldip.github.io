import { MetricCard } from '@/components/portfolio/inner-page/MetricCard';
import type { ProjectMetric } from '@/types/project.types';

export const ProjectMetrics = ({ metrics }: { metrics: readonly ProjectMetric[] }) => (
  <section className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
    {metrics.map(([value, label, icon]) => (
      <MetricCard value={value} label={label} icon={icon} key={label} />
    ))}
  </section>
);
