import { GlyphIcon } from '@/components/portfolio/GlyphIcon';
import { HOME_CAPABILITIES, HOME_PAGE_CONTENT, HOME_TOOL_GROUPS } from '@/constants/pages/home.constants';

export const CapabilitiesTechStack = () => (
  <section className="border-y border-border bg-surface" aria-label={HOME_PAGE_CONTENT.capabilities.sectionLabel}>
    <div className="mx-auto grid w-full max-w-[1280px] gap-14 px-5 py-20 sm:px-8 sm:py-24 wide:grid-cols-[1.05fr_.95fr] wide:gap-16 desktop:px-10">
      <div>
        <p className="text-[12px] font-bold tracking-[.16em] text-primary uppercase">
          {HOME_PAGE_CONTENT.capabilities.eyebrow}
        </p>
        <h2 className="mt-3 max-w-[620px] text-[clamp(2rem,4vw,3.6rem)] leading-[1.05] font-semibold tracking-[-.05em] text-foreground">
          {HOME_PAGE_CONTENT.capabilities.title}
        </h2>
        <p className="mt-5 max-w-[620px] text-[15px] leading-[1.7] text-foreground-secondary sm:text-[16px]">
          {HOME_PAGE_CONTENT.capabilities.description}
        </p>

        <div className="mt-10 grid gap-7 sm:grid-cols-3 wide:grid-cols-1 desktop:grid-cols-3">
          {HOME_CAPABILITIES.map((capability, index) => (
            <article className="border-t border-border pt-5" key={capability.id}>
              <div className="flex items-center justify-between gap-4">
                <span
                  className="grid size-10 place-items-center rounded-xl bg-primary-soft text-primary"
                  aria-hidden="true"
                >
                  <GlyphIcon glyph={capability.icon} className="size-5" />
                </span>
                <span className="text-[11px] font-semibold tracking-[.12em] text-foreground-muted">0{index + 1}</span>
              </div>
              <h3 className="mt-5 text-[17px] font-semibold tracking-[-.025em] text-foreground">{capability.title}</h3>
              <p className="mt-2 text-[13px] leading-[1.65] text-foreground-secondary">{capability.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="rounded-[28px] border border-border bg-surface-muted p-6 sm:p-8">
        <p className="text-[12px] font-bold tracking-[.16em] text-secondary uppercase">
          {HOME_PAGE_CONTENT.technology.eyebrow}
        </p>
        <h2 className="mt-3 max-w-[480px] text-[28px] leading-[1.12] font-semibold tracking-[-.04em] text-foreground sm:text-[32px]">
          {HOME_PAGE_CONTENT.technology.title}
        </h2>
        <div className="mt-8 space-y-7">
          {HOME_TOOL_GROUPS.map((group) => (
            <div key={group.label}>
              <h3 className="text-[12px] font-bold tracking-[.12em] text-foreground-muted uppercase">{group.label}</h3>
              <ul className="mt-3 flex list-none flex-wrap gap-2 p-0">
                {group.items.map((tool) => (
                  <li
                    className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-border bg-surface px-3.5 text-[13px] font-semibold text-foreground-secondary"
                    key={tool.name}
                  >
                    <img
                      src={`/tech-icons/${tool.slug}.svg`}
                      alt=""
                      width="20"
                      height="20"
                      loading="lazy"
                      className="size-5 object-contain"
                    />
                    {tool.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
