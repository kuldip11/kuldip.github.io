import { MetricCard } from '@/components/portfolio/inner-page/MetricCard';
import { RESUME_METRICS } from '@/constants/pages/resume.constants';

export const ResumeMetrics = () => (
  <section className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
    {RESUME_METRICS.map(([value, label]) => (
      <MetricCard value={value} label={label} key={label} />
    ))}
  </section>
);
