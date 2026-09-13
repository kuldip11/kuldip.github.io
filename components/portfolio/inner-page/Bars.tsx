import { projectMetricBarHeights } from '@/constants/data/project-visuals.constants';

export const Bars = ({ compact = false }: { compact?: boolean }) => (
  <div className="flex h-full items-end gap-1.5">
    {projectMetricBarHeights.map((height, index) => (
      <span
        className={`rounded-t bg-gradient-to-t from-primary-hover to-primary-muted ${compact ? 'w-1.5' : 'w-2'}`}
        style={{ height: `${height}%` }}
        key={index}
      />
    ))}
  </div>
);
