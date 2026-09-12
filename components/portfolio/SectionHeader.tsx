type SectionHeaderProps = {
  readonly index: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly copy?: string;
  readonly theme?: 'dark' | 'light';
};

export const SectionHeader = ({ index, eyebrow, title, copy, theme = 'dark' }: SectionHeaderProps) => {
  const indexClassName =
    theme === 'light'
      ? 'mb-2.5 block font-mono text-[12px] text-[#087a4b]'
      : 'mb-2.5 block font-mono text-[12px] text-accent-bright';
  const eyebrowClassName =
    theme === 'light'
      ? 'm-0 font-mono text-[12px] leading-[1.4] font-semibold tracking-[.12em] text-[#526159] uppercase'
      : 'm-0 font-mono text-[12px] leading-[1.4] font-semibold tracking-[.12em] text-[#a5b7ae] uppercase';

  return (
    <div className="mb-16 grid grid-cols-[1fr_1.7fr_1fr] items-end gap-10 max-[1000px]:grid-cols-[1fr_2fr] max-phone:grid-cols-1 max-phone:gap-[22px]">
      <div>
        <span className={indexClassName}>{index}</span>
        <p className={eyebrowClassName}>{eyebrow}</p>
      </div>
      <h2 className="m-0 max-w-[660px] text-[clamp(2.6rem,5vw,5.6rem)] leading-[.96] font-medium tracking-[-.055em]">
        {title}
      </h2>
      {copy ? (
        <p className="text-[15px] leading-[1.65] text-[#8fa29a] max-[1000px]:col-start-2 max-phone:col-auto">{copy}</p>
      ) : null}
    </div>
  );
};
