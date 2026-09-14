type MetricProps = {
  value: string;
  label: string;
  detail?: string;
  className?: string;
};

export const Metric = ({ value, label, detail, className = '' }: MetricProps) => (
  <div className={`border-t border-border-strong pt-4 ${className}`.trim()}>
    <strong className="block text-[24px] font-semibold tracking-[-.035em] text-foreground">{value}</strong>
    <span className="mt-1 block text-[12px] font-semibold text-foreground-secondary">{label}</span>
    {detail ? <span className="mt-2 block text-[12px] leading-[1.6] text-foreground-muted">{detail}</span> : null}
  </div>
);
