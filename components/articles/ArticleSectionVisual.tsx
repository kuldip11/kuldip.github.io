import { AppIcon } from '@/components/portfolio/AppIcon';
import { ARTICLE_VISUAL_CONTENT } from '@/constants/data/article-visuals.constants';
import type { ArticleVisual } from '@/types/article.types';

import type { ReactNode } from 'react';

const FlowNode = ({ label, active = false }: { label: string; active?: boolean }) => (
  <div
    className={`rounded-xl border px-3 py-2.5 text-center text-[11px] font-semibold ${active ? 'border-primary-muted bg-primary-soft text-primary' : 'border-border bg-surface text-foreground-secondary'}`}
  >
    {label}
  </div>
);

const VisualShell = ({ children }: { children: ReactNode }) => (
  <div className="relative min-h-[260px] overflow-hidden rounded-card border border-border bg-surface-muted p-5 sm:p-6">
    {children}
  </div>
);

export const ArticleSectionVisual = ({ visual }: { visual: ArticleVisual }) => {
  if (visual === 'monorepo') {
    const content = ARTICLE_VISUAL_CONTENT.monorepo;
    return (
      <VisualShell>
        <div className="grid grid-cols-3 gap-2">
          {content.apps.map((label) => (
            <FlowNode label={label} key={label} />
          ))}
        </div>
        <div className="mx-auto h-8 w-px bg-border-strong" />
        <FlowNode label={content.shared} active />
        <div className="mx-auto h-8 w-px bg-border-strong" />
        <div className="mx-auto max-w-[280px]">
          <FlowNode label={content.authority} />
        </div>
        <span className="absolute right-4 bottom-3 font-mono text-[9px] tracking-[.12em] text-foreground-muted uppercase">
          {content.caption}
        </span>
      </VisualShell>
    );
  }

  if (visual === 'authority') {
    const content = ARTICLE_VISUAL_CONTENT.authority;
    return (
      <VisualShell>
        <div className="grid min-h-[210px] grid-cols-[1fr_auto_1fr] items-center gap-3">
          <div className="space-y-2">
            {content.client.map((item) => (
              <FlowNode label={item} key={item} />
            ))}
          </div>
          <AppIcon name="arrow-right" className="size-5 text-primary" />
          <div className="space-y-2">
            {content.server.map((item) => (
              <FlowNode label={item} active key={item} />
            ))}
          </div>
        </div>
        <div className="rounded-full border border-border bg-surface px-4 py-2 text-center font-mono text-[9px] text-foreground-muted">
          {content.caption}
        </div>
      </VisualShell>
    );
  }

  if (visual === 'spreadsheet') {
    const content = ARTICLE_VISUAL_CONTENT.spreadsheet;
    return (
      <VisualShell>
        <div className="grid gap-2 sm:grid-cols-5">
          {content.layers.map((item, index) => (
            <FlowNode label={item} active={index === 2} key={item} />
          ))}
        </div>
        <div className="mt-6 overflow-hidden rounded-xl border border-border bg-surface">
          <div className="grid grid-cols-4 border-b border-border bg-surface-muted font-mono text-[9px] font-semibold text-foreground-muted">
            {content.headers.map((item) => (
              <span className="border-r border-border p-2 last:border-r-0" key={item}>
                {item}
              </span>
            ))}
          </div>
          {content.rows.map((row) => (
            <div className="grid grid-cols-4 text-[9px] text-foreground-secondary" key={row[0]}>
              {row.map((cell) => (
                <span className="border-t border-r border-border p-2 last:border-r-0" key={cell}>
                  {cell}
                </span>
              ))}
            </div>
          ))}
        </div>
      </VisualShell>
    );
  }

  if (visual === 'money') {
    const content = ARTICLE_VISUAL_CONTENT.money;
    return (
      <VisualShell>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-4">
            <span className="font-mono text-[9px] tracking-[.08em] text-foreground-muted uppercase">
              {content.pipelineLabel}
            </span>
            <div className="mt-4 space-y-2.5">
              {content.pipeline.map((item, index) => (
                <div className="flex items-center gap-2" key={item}>
                  <span className="grid size-5 place-items-center rounded-full bg-primary-soft text-[9px] font-semibold text-primary">
                    {index + 1}
                  </span>
                  <span className="text-[11px] text-foreground-secondary">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid place-items-center rounded-xl border border-border bg-surface p-4 text-center">
            <div>
              <span className="block font-mono text-[9px] tracking-[.08em] text-foreground-muted uppercase">
                {content.resultLabel}
              </span>
              <strong className="mt-3 block text-[34px] tracking-[-.05em] text-foreground">
                {content.resultValue}
              </strong>
              <span className="mt-2 block text-[10px] text-foreground-muted">{content.resultCaption}</span>
            </div>
          </div>
        </div>
      </VisualShell>
    );
  }

  const content = ARTICLE_VISUAL_CONTENT.ownership;
  return (
    <VisualShell>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {content.layers.map((label, index) => (
          <div className="rounded-xl border border-border bg-surface p-4" key={label}>
            <AppIcon
              name={index === 0 ? 'code' : index === 3 ? 'testing' : 'architecture'}
              className="size-5 text-primary"
            />
            <strong className="mt-3 block text-[12px]">{label}</strong>
            <span className="mt-1 block text-[10px] leading-5 text-foreground-muted">{content.layerCaption}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-xl border border-border bg-surface p-4">
        <div className="flex items-center justify-between gap-3 text-[9px] text-foreground-muted">
          {content.flow.map((label, index) => (
            <span className="contents" key={label}>
              <span>{label}</span>
              {index < content.flow.length - 1 ? <AppIcon name="arrow-right" className="size-4 text-primary" /> : null}
            </span>
          ))}
        </div>
      </div>
    </VisualShell>
  );
};
