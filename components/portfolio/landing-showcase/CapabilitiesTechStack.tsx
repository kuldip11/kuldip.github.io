import { GlyphIcon } from '@/components/portfolio/GlyphIcon';
import { HOME_CAPABILITIES, HOME_TOOLS } from '@/constants/pages/home.constants';

export const CapabilitiesTechStack = () => (
  <section
    className="relative grid w-full grid-cols-1 gap-3 px-5 pb-4 sm:px-8 wide:grid-cols-[1.08fr_.92fr] wide:gap-4 desktop:grid-cols-[1.46fr_1fr] desktop:px-12"
    aria-label="Capabilities and tech stack"
  >
    <article className="rounded-[18px] border border-panel-border bg-[#061612e8] p-4 shadow-[0_18px_60px_rgba(0,0,0,.22)] backdrop-blur-sm">
      <div className="mb-3 flex items-center justify-between gap-4">
        <h2 className="m-0 text-[clamp(1.8rem,2.3vw,2.35rem)] font-semibold tracking-[-.045em]">What I can do</h2>
        <span className="hidden font-mono text-[10px] tracking-[.24em] text-[#81a89a] uppercase sm:block">
          Turn ideas into impact
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2.5 desktop:grid-cols-4">
        {HOME_CAPABILITIES.map(([icon, title, copy]) => (
          <div
            className="min-h-[142px] rounded-[14px] border border-[#1f4e3c] bg-[#0a1b16] p-3 wide:min-h-[150px] desktop:min-h-[168px] desktop:p-4"
            key={title}
          >
            <span className="flex size-7 items-center justify-center text-[#55eeb0]" aria-hidden="true">
              <GlyphIcon glyph={icon} className="size-6" />
            </span>
            <h3 className="mt-3 mb-1.5 text-[13px] leading-[1.18] font-semibold tracking-[-.02em] hero:text-[15px] desktop:text-[16px]">
              {title}
            </h3>
            <p className="m-0 text-[11px] leading-[1.45] text-[#aebdb6] hero:text-[12px] desktop:text-[13px] desktop:leading-[1.48]">
              {copy}
            </p>
          </div>
        ))}
      </div>
    </article>

    <article className="rounded-[18px] border border-panel-border bg-[#061612e8] p-4 shadow-[0_18px_60px_rgba(0,0,0,.22)] backdrop-blur-sm">
      <div className="mb-3 flex items-center justify-between gap-4">
        <h2 className="m-0 text-[clamp(1.8rem,2.3vw,2.35rem)] font-semibold tracking-[-.045em]">My Tech Stack</h2>
        <span className="hidden font-mono text-[10px] tracking-[.24em] text-[#81a89a] uppercase sm:block">
          Tools I love
        </span>
      </div>
      <div className="grid grid-cols-6 gap-1.5 wide:grid-cols-5 desktop:grid-cols-6 desktop:gap-2">
        {HOME_TOOLS.map(([name, slug]) => (
          <div
            className="group grid min-h-[72px] place-items-center rounded-[10px] border border-[#1f4e3c] bg-[#0a1b16] px-1 py-2 text-center transition hover:-translate-y-0.5 hover:border-[#4eeaaa78] desktop:min-h-[78px] desktop:rounded-[12px] desktop:px-2"
            key={name}
          >
            <img
              className="h-8 w-8 object-contain transition-transform group-hover:scale-110 desktop:h-7 desktop:w-7"
              src={`/tech-icons/${slug}.svg`}
              alt=""
              width="28"
              height="28"
              loading="lazy"
            />
            <span className="mt-1 text-[9px] font-medium text-[#e7ece9] desktop:text-[11px]">{name}</span>
          </div>
        ))}
        <p className="col-span-3 hidden min-h-[72px] items-center justify-center gap-3 rounded-[10px] border border-[#1f4e3c] text-[12px] text-[#cbd6d1] wide:flex desktop:hidden">
          <span className="text-[28px] text-[#52ecac]">＋</span>And more tools
          <br />I use
        </p>
      </div>
      <p className="mt-2.5 mb-0 text-center text-[11px] text-[#9caea6] max-desktop:hidden">
        <span className="text-[#52ecac]">＋</span> And more tools I use
      </p>
    </article>
  </section>
);
