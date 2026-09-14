import { AppIcon } from '@/components/portfolio/AppIcon';
import type { ProjectSection } from '@/types/project.types';

export const ProjectEngineering = ({ sections }: { sections: readonly ProjectSection[] }) => (
  <section className="scroll-mt-32 border-y border-border bg-surface-muted py-16 sm:py-20" id="engineering">
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
      {sections.map((section, index) => (
        <article key={section.id}>
          <p className="text-[11px] font-bold tracking-[.14em] text-primary uppercase">{section.eyebrow}</p>
          <h2 className="mt-3 max-w-[600px] text-[clamp(1.8rem,3vw,3rem)] leading-[1.08] font-semibold tracking-[-.045em] text-foreground">
            {section.title}
          </h2>
          <p className="mt-4 text-[14px] leading-[1.75] text-foreground-secondary">{section.copy}</p>
          {section.items ? (
            <ul className="mt-6 grid list-none gap-3 p-0">
              {section.items.map((item) => (
                <li className="flex gap-3 text-[13px] leading-[1.65] text-foreground-secondary" key={item}>
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                    <AppIcon name={index === 0 ? 'code' : 'summary'} className="size-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </div>
  </section>
);
