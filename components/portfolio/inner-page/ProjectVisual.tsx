import {
  SERVORA_VISUAL_CONTENT,
  servoraVisualMetricValues,
  TALLYLITE_VISUAL_CONTENT,
} from '@/constants/data/project-visuals.constants';
import type { ProjectVisualVariant } from '@/types/project.types';

import { Bars } from './Bars';

export const ProjectVisual = ({ variant, compact = false }: { variant: ProjectVisualVariant; compact?: boolean }) => {
  if (variant === 'tallylite') {
    return (
      <div
        className={`relative overflow-hidden rounded-card border border-border bg-surface-muted p-4 ${compact ? 'min-h-[142px]' : 'min-h-[290px] sm:min-h-[340px]'}`}
      >
        <div className="absolute inset-x-[5%] top-[8%] bottom-[8%] grid grid-cols-[.3fr_1fr] overflow-hidden rounded-card border border-border bg-surface shadow-card">
          <aside className="border-r border-border bg-surface-muted p-3">
            <div className="mb-4 h-2 w-14 rounded-full bg-secondary" />
            <div className="space-y-2.5">
              {TALLYLITE_VISUAL_CONTENT.sidebarItems.map((label) => (
                <div className="flex items-center gap-2" key={label}>
                  <span className="size-2 rounded-sm bg-secondary-soft" />
                  <span className="text-[7px] font-medium text-foreground-muted">{label}</span>
                </div>
              ))}
            </div>
          </aside>
          <section className="p-3">
            <div className="grid grid-cols-3 gap-2">
              {TALLYLITE_VISUAL_CONTENT.metricCards.map(({ label, value }) => (
                <div className="rounded-lg border border-border bg-surface p-2" key={label}>
                  <span className="block text-[6px] text-foreground-muted">{label}</span>
                  <strong className="mt-1 block text-[9px] text-foreground">{value}</strong>
                </div>
              ))}
            </div>
            <div className="mt-3 grid grid-cols-[1fr_.72fr] gap-2">
              <div className="rounded-lg border border-border bg-surface p-2">
                <div className="flex h-[72px] items-end gap-1.5">
                  {TALLYLITE_VISUAL_CONTENT.chartHeights.map((height, index) => (
                    <span className="flex-1 rounded-t bg-secondary/70" style={{ height: `${height}%` }} key={index} />
                  ))}
                </div>
              </div>
              <div className="grid place-items-center rounded-lg border border-border bg-surface p-2">
                <div className="grid size-16 place-items-center rounded-full border-[8px] border-secondary-soft border-t-secondary text-[7px] font-semibold text-secondary">
                  {TALLYLITE_VISUAL_CONTENT.taxLabel}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }

  if (variant === 'other') {
    return (
      <div
        className={`relative overflow-hidden rounded-card border border-border bg-surface-muted p-4 ${compact ? 'min-h-[142px]' : 'min-h-[290px]'}`}
      >
        <div className="grid h-full grid-cols-2 gap-3">
          <div className="rounded-xl border border-border bg-surface p-3">
            <div className="h-3 w-16 rounded bg-primary-muted" />
            <div className="mt-5 space-y-2">
              <div className="h-2 rounded bg-surface-muted" />
              <div className="h-2 w-4/5 rounded bg-surface-muted" />
              <div className="h-2 w-3/5 rounded bg-surface-muted" />
            </div>
          </div>
          <div className="grid place-items-center rounded-xl border border-border bg-surface">
            <div className="size-20 rounded-full border-[10px] border-primary-soft border-t-primary" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-card border border-border bg-surface-muted p-4 ${compact ? 'min-h-[142px]' : 'min-h-[290px] sm:min-h-[340px]'}`}
    >
      <div className="absolute top-[9%] left-[5%] h-[75%] w-[72%] overflow-hidden rounded-card border border-border-strong bg-surface shadow-card">
        <div className="flex h-8 items-center gap-1.5 border-b border-border px-3">
          <span className="size-1.5 rounded-full bg-danger/50" />
          <span className="size-1.5 rounded-full bg-warning/50" />
          <span className="size-1.5 rounded-full bg-success/50" />
          <span className="ml-2 text-[6px] font-semibold text-foreground-muted">
            {SERVORA_VISUAL_CONTENT.windowTitle}
          </span>
        </div>
        <div className="flex h-[calc(100%-2rem)] gap-3 p-3">
          <aside className="w-[22%] rounded-lg bg-primary-soft p-2">
            <div className="h-2 rounded bg-primary-muted" />
            <div className="mt-4 space-y-3">
              {SERVORA_VISUAL_CONTENT.sidebarItems.map((label) => (
                <div className="text-[6px] font-medium text-primary" key={label}>
                  {label}
                </div>
              ))}
            </div>
          </aside>
          <section className="flex-1">
            <div className="grid grid-cols-4 gap-2">
              {servoraVisualMetricValues.map((value) => (
                <div className="rounded-md border border-border bg-surface-raised p-2" key={value}>
                  <span className="block text-[5px] text-foreground-muted">{SERVORA_VISUAL_CONTENT.metricLabel}</span>
                  <strong className="mt-1 block text-[7px] text-foreground">{value}</strong>
                </div>
              ))}
            </div>
            <div className="mt-3 grid h-[58%] grid-cols-[1.3fr_.7fr] gap-2">
              <div className="rounded-lg border border-border bg-surface-raised p-2">
                <Bars />
              </div>
              <div className="grid content-start gap-2 rounded-lg border border-border bg-surface-raised p-2">
                {SERVORA_VISUAL_CONTENT.tableItems.map((label, index) => (
                  <div
                    className="rounded-md bg-primary-soft px-2 py-1 text-[5px] font-semibold text-primary"
                    key={label}
                  >
                    {label} · {index + 2} items
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="absolute top-[13%] right-[4%] w-[22%] rounded-xl border border-border-strong bg-surface p-2 shadow-card">
        <span className="text-[6px] font-bold text-foreground">{SERVORA_VISUAL_CONTENT.kitchenTitle}</span>
        <div className="mt-2 space-y-1.5">
          {SERVORA_VISUAL_CONTENT.kitchenTickets.map((label) => (
            <div className="rounded-md bg-secondary-soft px-1.5 py-1 text-[5px] text-secondary" key={label}>
              {label}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-[6%] bottom-[6%] h-[47%] w-[19%] rounded-[14px] border-[4px] border-foreground bg-surface p-2 shadow-feature">
        <div className="h-2 rounded bg-primary" />
        <span className="mt-2 block text-[5px] font-semibold text-foreground">
          {SERVORA_VISUAL_CONTENT.waiterTitle}
        </span>
        <div className="mt-2 space-y-1">
          {SERVORA_VISUAL_CONTENT.waiterItems.map((label) => (
            <div className="rounded bg-primary-soft px-1 py-1 text-[4px] text-primary" key={label}>
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
