import { ExternalArrow } from './ExternalArrow';
import { SystemCanvas } from './SystemCanvas';

export function Hero() {
  return (
    <section
      className="mx-auto grid min-h-[calc(100vh-82px)] max-w-[1440px] grid-cols-[minmax(0,1.06fr)_minmax(460px,.94fr)] items-center gap-[62px] px-12 pt-[90px] pb-[76px] max-[1000px]:grid-cols-1 max-[1000px]:pt-[70px] max-[650px]:min-h-0 max-[650px]:gap-[50px] max-[650px]:px-5 max-[650px]:pt-16 max-[650px]:pb-[70px]"
      id="top"
    >
      <div>
        <div className="font-mono text-[11px] leading-[1.4] font-semibold tracking-[.12em] text-[#a5b7ae] uppercase">
          <span className="mr-2.5 inline-block size-[7px] rounded-full bg-[#71f6b5] shadow-[0_0_0_5px_#71f6b517]" />
          Senior Frontend Engineer · India
        </div>
        <h1 className="my-6 max-w-[820px] text-[clamp(4rem,6.4vw,7.4rem)] leading-[.91] font-medium tracking-[-.068em] max-[650px]:text-[clamp(3.4rem,16vw,5rem)]">
          I build frontend systems that stay <em className="font-normal text-[#71f6b5] not-italic">fast</em> as products
          get complex.
        </h1>
        <p className="max-w-[660px] text-[clamp(1rem,1.35vw,1.3rem)] leading-[1.65] text-[#9cafa6] max-[650px]:text-base">
          Five-plus years architecting enterprise workflows, data-intensive interfaces and high-performance web
          applications across fintech, proptech and SaaS with React, Next.js and TypeScript.
        </p>
        <div className="mt-[38px] flex items-center gap-7 max-[650px]:flex-col max-[650px]:items-start">
          <a
            className="flex items-center gap-[34px] rounded-full bg-[#71f6b5] py-4 pr-5 pl-6 text-sm font-bold text-[#07110f] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_#71f6b524]"
            href="#work"
          >
            Explore selected work <span aria-hidden="true">↓</span>
          </a>
          <a className="flex items-center gap-2 text-sm transition-colors hover:text-[#71f6b5]" href="/resume">
            View résumé <ExternalArrow />
          </a>
        </div>
      </div>
      <SystemCanvas />
    </section>
  );
}
