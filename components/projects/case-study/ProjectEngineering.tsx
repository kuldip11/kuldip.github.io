import { AppIcon } from '@/components/portfolio/AppIcon';
import { INNER_PAGE_PANEL_CLASS } from '@/constants/styles/component-styles.constants';
import type { ProjectSection } from '@/types/project.types';

export const ProjectEngineering = ({ sections }: { sections: readonly ProjectSection[] }) => (
  <section className="mt-4 grid gap-4 lg:grid-cols-2" id="engineering">
    {sections.map((section, index) => (
      <article className={`${INNER_PAGE_PANEL_CLASS} relative overflow-hidden p-5 sm:p-6`} key={section.id}>
        <div aria-hidden="true" className="absolute -top-20 -right-20 size-52 rounded-full bg-accent/5 blur-3xl" />
        <p className="relative font-mono text-[9px] tracking-[.16em] text-accent uppercase">{section.eyebrow}</p>
        <h2 className="relative mt-2 max-w-[580px] text-[24px] leading-[1.08] font-bold tracking-[-.035em]">
          {section.title}
        </h2>
        <p className="relative mt-4 text-[13px] leading-[1.7] text-[#afc0b7]">{section.copy}</p>
        {section.items ? (
          <ul className="relative mt-5 space-y-3">
            {section.items.map((item) => (
              <li className="flex gap-3 text-[12px] leading-[1.55] text-[#c5d2cc]" key={item}>
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border border-[#2a7559] text-accent">
                  <AppIcon name={index === 0 ? 'code' : 'summary'} className="size-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        ) : null}
      </article>
    ))}
  </section>
);
