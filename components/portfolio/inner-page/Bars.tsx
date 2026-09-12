import { projectMetricBarHeights } from '@/constants/data/project-visuals.constants';

export const Bars = ({ compact = false }: { compact?: boolean }) => (
  <div className="flex items-end gap-1.5">
    {projectMetricBarHeights.map((height, index) => (
      <span
        className={`rounded-t bg-[linear-gradient(#59ecb0,#0e7257)] ${compact ? 'w-1.5' : 'w-2'}`}
        style={{ height: `${height}%` }}
        key={index}
      />
    ))}
  </div>
);
