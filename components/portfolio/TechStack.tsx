import { techStackTools } from '@/constants/data/skills.constants';

export const TechStack = () => {
  return (
    <section
      className="mx-auto max-w-[1344px] pb-[120px] max-[1380px]:mx-12 max-[650px]:mx-5 max-[650px]:pb-[90px]"
      aria-labelledby="stack-title"
    >
      <div className="rounded-[24px] border border-[#285444] bg-[#0a1714] p-5 max-[650px]:p-4">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 font-mono text-[12px] font-semibold tracking-[.14em] text-[#71f6b5] uppercase">
              Skills & tools
            </p>
            <h2 id="stack-title" className="m-0 text-[clamp(1.8rem,2.6vw,2.7rem)] font-semibold tracking-[-.04em]">
              My tech stack
            </h2>
          </div>
          <span className="font-mono text-[12px] tracking-[.16em] text-[#82a79a] uppercase max-[650px]:hidden">
            Tools I use
          </span>
        </div>
        <div className="grid grid-cols-6 gap-3 max-[1000px]:grid-cols-4 max-[700px]:grid-cols-3 max-[480px]:grid-cols-2">
          {techStackTools.map(([name, slug, color]) => (
            <div
              className="group grid min-h-[116px] place-items-center rounded-[16px] border border-[#23483b] bg-[#0d1d18] p-3 text-center transition hover:-translate-y-1 hover:border-[#71f6b56b]"
              key={name}
            >
              <img
                className="h-10 w-10 object-contain transition-transform group-hover:scale-110"
                src={`https://cdn.simpleicons.org/${slug}/${color.replace('#', '')}`}
                alt=""
                width="40"
                height="40"
                loading="lazy"
              />
              <span className="mt-2 text-[14px] font-semibold text-[#dce8e2]">{name}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 mb-0 text-center text-[14px] text-[#91a79d]">
          + TanStack Query, Redux Toolkit, SvelteKit, Bun, Redis, Drizzle, Vitest, Playwright, Mapbox and more.
        </p>
      </div>
    </section>
  );
};
