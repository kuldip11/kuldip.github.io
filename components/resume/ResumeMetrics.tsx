import { Metric } from '@/components/ui';
import { RESUME_METRICS, RESUME_PAGE_CONTENT } from '@/constants/pages/resume.constants';

export const ResumeMetrics = () => (
  <section
    className="grid grid-cols-2 border-b border-border py-7 md:grid-cols-4"
    aria-label={RESUME_PAGE_CONTENT.metricsLabel}
  >
    {RESUME_METRICS.map((metric, index) => (
      <Metric
        className={`${index % 2 ? 'border-l border-border pl-5' : ''} border-t-0 py-3 md:border-l md:pl-6 md:first:border-l-0 md:first:pl-0`}
        key={metric.label}
        label={metric.label}
        value={metric.value}
      />
    ))}
  </section>
);
