import { SERVORA_VISUAL_CONTENT, TALLYLITE_VISUAL_CONTENT } from '@/constants/data/project-visuals.constants';
import type { ProjectMockVariant } from '@/types/project.types';

export const ProjectMock = ({ variant }: { variant: ProjectMockVariant }) => {
  if (variant === 'saas') {
    return (
      <div className="relative h-full min-h-[180px] overflow-hidden rounded-card border border-border bg-surface p-3 shadow-card">
        <div className="flex h-7 items-center gap-1.5 border-b border-border px-1">
          <span className="size-1.5 rounded-full bg-danger/45" />
          <span className="size-1.5 rounded-full bg-warning/45" />
          <span className="size-1.5 rounded-full bg-success/45" />
          <span className="ml-2 text-[7px] font-semibold text-foreground-muted">
            {SERVORA_VISUAL_CONTENT.mockTitle}
          </span>
        </div>
        <div className="mt-3 grid h-[130px] grid-cols-[.28fr_1fr] gap-2">
          <aside className="rounded-xl bg-primary-soft p-2">
            <div className="h-2 w-10 rounded bg-primary-muted" />
            <div className="mt-3 space-y-2 text-[6px] font-medium text-primary">
              {SERVORA_VISUAL_CONTENT.mockSidebarItems.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </aside>
          <div className="grid grid-cols-[1fr_.8fr] gap-2">
            <div className="grid content-start gap-2">
              <div className="grid grid-cols-3 gap-1.5">
                {SERVORA_VISUAL_CONTENT.mockMetricValues.map((value) => (
                  <div className="rounded-lg border border-border bg-surface-raised p-2" key={value}>
                    <span className="text-[5px] text-foreground-muted">{SERVORA_VISUAL_CONTENT.mockMetricLabel}</span>
                    <strong className="mt-1 block text-[8px] text-foreground">{value}</strong>
                  </div>
                ))}
              </div>
              <div className="flex h-[70px] items-end gap-1 rounded-lg border border-border bg-surface-raised p-2">
                {[42, 58, 48, 74, 62, 88, 76].map((height, index) => (
                  <span className="flex-1 rounded-t bg-primary-muted" style={{ height: `${height}%` }} key={index} />
                ))}
              </div>
            </div>
            <div className="grid gap-2">
              <div className="rounded-lg bg-secondary-soft p-2">
                <span className="text-[6px] font-semibold text-secondary">
                  {SERVORA_VISUAL_CONTENT.mockKitchenLabel}
                </span>
              </div>
              <div className="rounded-lg bg-primary-soft p-2">
                <span className="text-[6px] font-semibold text-primary">{SERVORA_VISUAL_CONTENT.mockWaiterLabel}</span>
              </div>
              <div className="rounded-lg border border-border bg-surface-raised p-2">
                <span className="text-[6px] text-foreground-muted">{SERVORA_VISUAL_CONTENT.mockCustomerLabel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex h-full min-h-[180px] items-end justify-center overflow-hidden rounded-card border border-border bg-secondary-soft px-4 pt-5">
      <div className="absolute top-4 left-4 text-[8px] font-bold tracking-[.12em] text-secondary uppercase">
        {TALLYLITE_VISUAL_CONTENT.mockTitle}
      </div>
      <div className="relative z-10 h-[128px] w-[74px] -rotate-3 rounded-[16px] border-[4px] border-foreground bg-surface p-2 shadow-card">
        <div className="h-2 w-7 rounded bg-secondary" />
        <div className="mt-3 h-12 rounded-lg bg-surface-muted p-1.5">
          <div className="h-1.5 w-8 rounded bg-secondary/40" />
          <div className="mt-2 h-5 rounded bg-secondary-soft" />
        </div>
      </div>
      <div className="relative z-20 -ml-2 h-[142px] w-[82px] rotate-2 rounded-[17px] border-[4px] border-foreground bg-surface p-2 shadow-feature">
        <div className="h-2 w-7 rounded bg-primary" />
        <div className="mt-3 grid gap-2">
          <div className="rounded-lg bg-primary-soft p-2 text-[6px] font-semibold text-primary">
            {TALLYLITE_VISUAL_CONTENT.mockPrimaryStat}
          </div>
          <div className="rounded-lg bg-surface-muted p-2 text-[6px] text-foreground-muted">
            {TALLYLITE_VISUAL_CONTENT.mockSecondaryStat}
          </div>
        </div>
      </div>
    </div>
  );
};
