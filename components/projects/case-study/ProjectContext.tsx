import type { ProjectContextBlock } from '@/types/project.types';

export const ProjectContext = ({ context }: { context?: ProjectContextBlock }) => {
  if (!context) return null;

  return (
    <section className="scroll-mt-32 border-t border-border py-16 sm:py-20" id="context">
      <div className="grid gap-9 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
        <div>
          <p className="text-[12px] font-bold tracking-[.14em] text-primary uppercase">{context.eyebrow}</p>
          <h2 className="mt-3 text-[clamp(2.2rem,4vw,3.8rem)] leading-[1.03] font-semibold tracking-[-.05em] text-foreground">
            {context.title}
          </h2>
        </div>
        <div>
          <p className="max-w-[760px] text-[16px] leading-[1.8] text-foreground-secondary">{context.copy}</p>
          {context.points?.length ? (
            <ul className="mt-7 grid list-none gap-4 p-0 sm:grid-cols-3">
              {context.points.map((point, index) => (
                <li
                  className="border-t border-border-strong pt-4 text-[13px] leading-[1.7] text-foreground-secondary"
                  key={point}
                >
                  <span className="mb-2 block font-mono text-[11px] text-foreground-muted">0{index + 1}</span>
                  {point}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
};
