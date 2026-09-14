type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  className = '',
  titleClassName = '',
}: SectionHeadingProps) => (
  <div className={className}>
    {eyebrow ? <p className="text-[12px] font-bold tracking-[.16em] text-primary uppercase">{eyebrow}</p> : null}
    <h2
      className={`mt-3 text-[clamp(2.2rem,4vw,3.7rem)] leading-[1.02] font-semibold tracking-[-.05em] text-foreground ${titleClassName}`.trim()}
    >
      {title}
    </h2>
    {description ? (
      <p className="mt-4 max-w-[680px] text-[15px] leading-[1.75] text-foreground-secondary">{description}</p>
    ) : null}
  </div>
);
