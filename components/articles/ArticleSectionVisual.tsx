import { AppIcon } from '@/components/portfolio/AppIcon';
import type { ArticleVisual } from '@/types/article.types';

const FlowNode = ({ label, active = false }: { label: string; active?: boolean }) => (
  <div
    className={`article-float rounded-[12px] border px-3 py-2 text-center text-[10px] font-semibold ${active ? 'border-[#4bd9a3] bg-[#0b2a20] text-accent' : 'border-[#285b47] bg-[#091b16] text-[#bdcac4]'}`}
  >
    {label}
  </div>
);

export const ArticleSectionVisual = ({ visual }: { visual: ArticleVisual }) => {
  if (visual === 'monorepo') {
    return (
      <div className="article-visual-grid relative min-h-[260px] overflow-hidden rounded-[20px] border border-panel-border bg-[#061511] p-5">
        <div className="grid grid-cols-3 gap-2">
          <FlowNode label="Admin / POS" />
          <FlowNode label="Kitchen" />
          <FlowNode label="Customer" />
        </div>
        <div className="article-flow-line mx-auto h-8 w-px bg-accent/60" />
        <FlowNode label="Types · Validation · API Client · Realtime · UI" active />
        <div className="article-flow-line mx-auto h-8 w-px bg-accent/60" />
        <div className="mx-auto max-w-[280px]">
          <FlowNode label="Server authority" />
        </div>
        <span className="absolute right-4 bottom-3 font-mono text-[9px] tracking-[.15em] text-[#6f9d8b] uppercase">
          share contracts → keep workflows local
        </span>
      </div>
    );
  }

  if (visual === 'authority') {
    return (
      <div className="relative min-h-[260px] overflow-hidden rounded-[20px] border border-panel-border bg-[#061511] p-5">
        <div className="grid h-full grid-cols-[1fr_auto_1fr] items-center gap-3">
          <div className="space-y-2">
            {['Selection', 'Preview', 'Explain'].map((item) => (
              <FlowNode label={item} key={item} />
            ))}
          </div>
          <div className="grid place-items-center text-accent">
            <AppIcon name="arrow-right" className="article-pulse size-6" />
          </div>
          <div className="space-y-2">
            {['Authorize', 'Recalculate', 'Commit'].map((item) => (
              <FlowNode label={item} active key={item} />
            ))}
          </div>
        </div>
        <div className="absolute inset-x-5 bottom-4 rounded-full border border-[#285b47] bg-[#081d17] px-4 py-2 text-center font-mono text-[9px] text-[#83a99a]">
          client intent → API decision → realtime committed state
        </div>
      </div>
    );
  }

  if (visual === 'spreadsheet') {
    return (
      <div className="relative min-h-[280px] overflow-hidden rounded-[20px] border border-panel-border bg-[#061511] p-5">
        <div className="grid gap-2 sm:grid-cols-5">
          {['UI', 'Use cases', 'Domain', 'Repositories', 'Google Sheets'].map((item, index) => (
            <div className="relative" key={item}>
              <FlowNode label={item} active={index === 2} />
              {index < 4 ? (
                <AppIcon
                  name="arrow-right"
                  className="article-pulse absolute top-1/2 -right-2.5 hidden size-4 -translate-y-1/2 text-accent sm:block"
                />
              ) : null}
            </div>
          ))}
        </div>
        <div className="mt-6 overflow-hidden rounded-[14px] border border-[#285b47] bg-[#0a211a]">
          <div className="grid grid-cols-4 border-b border-[#285b47] bg-[#0d2b21] font-mono text-[8px] text-accent">
            {['Invoice', 'Customer', 'Total', 'Status'].map((item) => (
              <span className="border-r border-[#285b47] p-2 last:border-r-0" key={item}>
                {item}
              </span>
            ))}
          </div>
          {[
            ['INV-1042', 'Acme', '₹12,840', 'Paid'],
            ['INV-1043', 'Nexa', '₹8,290', 'Due'],
            ['INV-1044', 'Orbit', '₹4,560', 'Draft'],
          ].map((row) => (
            <div className="grid grid-cols-4 text-[8px] text-[#9eb3a9]" key={row[0]}>
              {row.map((cell) => (
                <span className="border-t border-r border-[#1c4435] p-2 last:border-r-0" key={cell}>
                  {cell}
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className="article-scan absolute inset-x-5 h-px bg-[linear-gradient(90deg,transparent,#59ecb0,transparent)] opacity-70" />
      </div>
    );
  }

  if (visual === 'money') {
    return (
      <div className="relative min-h-[260px] overflow-hidden rounded-[20px] border border-panel-border bg-[#061511] p-5">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-[14px] border border-[#285b47] bg-[#081d17] p-4">
            <span className="font-mono text-[9px] text-[#7ca493]">INVOICE PIPELINE</span>
            <div className="mt-4 space-y-2">
              {['Line values', 'Discounts', 'Taxable amount', 'GST split', 'Grand total'].map((item, index) => (
                <div className="flex items-center gap-2" key={item}>
                  <span className="grid size-5 place-items-center rounded-full border border-[#34775b] text-[8px] text-accent">
                    {index + 1}
                  </span>
                  <span className="text-[10px] text-[#c0cec7]">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid place-items-center rounded-[14px] border border-[#285b47] bg-[#081d17] p-4 text-center">
            <div>
              <span className="block font-mono text-[9px] text-[#7ca493]">DECIMAL-SAFE RESULT</span>
              <strong className="mt-3 block text-[36px] tracking-[-.05em] text-accent">₹ 12,840.00</strong>
              <span className="mt-2 block text-[10px] text-[#9db0a7]">auditable · testable · explicit</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-[260px] overflow-hidden rounded-[20px] border border-panel-border bg-[#061511] p-5">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {['Domain', 'Application', 'Adapter', 'Browser'].map((label, index) => (
          <div
            className="article-float rounded-[14px] border border-[#285b47] bg-[#081d17] p-4"
            style={{ animationDelay: `${index * 120}ms` }}
            key={label}
          >
            <AppIcon
              name={index === 0 ? 'code' : index === 3 ? 'testing' : 'architecture'}
              className="size-5 text-accent"
            />
            <strong className="mt-3 block text-[11px]">{label}</strong>
            <span className="mt-1 block text-[9px] text-[#829f93]">different question, different test</span>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-[14px] border border-[#285b47] bg-[#081d17] p-4">
        <div className="flex items-center justify-between gap-3 text-[9px] text-[#91aa9f]">
          <span>local correctness</span>
          <AppIcon name="arrow-right" className="size-4 text-accent" />
          <span>boundary confidence</span>
          <AppIcon name="arrow-right" className="size-4 text-accent" />
          <span>user journey</span>
        </div>
      </div>
    </div>
  );
};
