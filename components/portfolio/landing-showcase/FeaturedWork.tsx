import Link from 'next/link';

import { AppIcon } from '@/components/portfolio/AppIcon';

import { ProjectMock } from './ProjectMock';
import { SectionLabel } from './SectionLabel';

export const FeaturedWork = () => (
  <>
    <section
      className="relative grid w-full grid-cols-2 gap-3 px-5 pb-5 sm:px-8 wide:grid-cols-[1.54fr_.74fr_.74fr] wide:gap-4 desktop:grid-cols-[1.54fr_.48fr_.48fr] desktop:px-12"
      id="work"
    >
      <article className="col-span-2 rounded-[18px] border border-panel-border bg-[#061612e8] p-4 shadow-[0_18px_60px_rgba(0,0,0,.2)] wide:col-span-1">
        <div className="mb-3 flex items-end justify-between gap-4">
          <div>
            <SectionLabel>Featured Projects</SectionLabel>
            <h2 className="mt-1 mb-0 text-[clamp(2rem,2.8vw,3rem)] leading-none font-semibold tracking-[-.05em] max-hero:hidden">
              Real projects. Real impact.
            </h2>
          </div>
          <Link className="hidden text-[13px] font-medium text-[#57eeb0] hover:text-white sm:block" href="/projects">
            View all projects&nbsp; <AppIcon name="arrow-right" className="size-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Link
            href="/projects/servora"
            className="group grid min-h-[132px] grid-cols-1 gap-3 rounded-[14px] border border-[#1f4e3c] bg-[#0a1b16] p-3 transition hover:border-[#4ae7a36b] sm:grid-cols-[.42fr_1fr]"
          >
            <div className="order-2 sm:order-1">
              <ProjectMock variant="saas" />
            </div>
            <div className="order-1 flex min-w-0 flex-col justify-center sm:order-2">
              <span className="mb-1 w-max rounded-full border border-[#27775a] px-2 py-0.5 text-[10px] text-[#70eeb7]">
                SaaS / POS
              </span>
              <h3 className="m-0 text-[16px] font-semibold">Servora</h3>
              <p className="my-1 text-[12px] leading-[1.4] text-[#aab9b2]">
                Multi-app restaurant platform with POS, kitchen, waiter, customer and admin workflows.
              </p>
              <span className="mt-auto inline-flex items-center gap-1 text-[11px] font-medium text-[#57eeb0]">
                View project&nbsp; <AppIcon name="arrow-right" className="size-3.5" />
              </span>
            </div>
          </Link>
          <div className="relative grid min-h-[132px] grid-cols-1 gap-3 overflow-hidden rounded-[14px] border border-[#1f4e3c] bg-[#0a1b16] p-3 sm:grid-cols-[.42fr_1fr]">
            <div className="order-2 grid min-h-[108px] place-items-center rounded-[11px] border border-[#235641] bg-[#092018] sm:order-1">
              <div className="grid size-12 place-items-center rounded-[14px] border border-[#2b7559] text-[26px] text-[#57eeb0] shadow-[0_0_24px_rgba(87,238,176,.12)]">
                +
              </div>
            </div>
            <div className="order-1 flex min-w-0 flex-col justify-center sm:order-2">
              <span className="mb-1 w-max rounded-full border border-[#27775a] px-2 py-0.5 text-[10px] text-[#70eeb7]">
                Next Build
              </span>
              <h3 className="m-0 text-[16px] font-semibold">Project coming soon</h3>
              <p className="my-1 text-[12px] leading-[1.4] text-[#aab9b2]">
                The next case study will appear here when it is ready to be shown properly.
              </p>
              <span className="mt-auto text-[11px] font-medium text-[#73877e]">In progress</span>
            </div>
          </div>
        </div>
      </article>
      <article className="rounded-[18px] border border-panel-border bg-[#071813e8] p-4" id="experience">
        <SectionLabel>Experience</SectionLabel>
        <div className="mt-3 flex flex-col items-start gap-3 sm:flex-row">
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[#2a7659] text-[18px] text-[#55eeb0]">
            <AppIcon name="briefcase" className="size-[18px]" />
          </span>
          <h2 className="m-0 text-[20px] leading-[1.12] font-semibold tracking-[-.03em]">
            A journey of growth and impact.
          </h2>
        </div>
        <p className="mt-4 text-[12px] leading-[1.5] text-[#aebdb6]">
          From building features to owning products, I&apos;ve worked across diverse teams and challenging problems.
        </p>
        <a className="mt-4 inline-flex text-[12px] font-medium text-[#55eeb0]" href="#experience-detail">
          View timeline&nbsp; <AppIcon name="arrow-right" className="size-3.5" />
        </a>
      </article>
      <article
        className="rounded-[18px] border border-panel-border bg-[radial-gradient(circle_at_100%_100%,rgba(62,236,167,.12),transparent_45%),#071813e8] p-4"
        id="approach"
      >
        <SectionLabel>My Approach</SectionLabel>
        <div className="mt-3 flex flex-col items-start gap-3 sm:flex-row">
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[#2a7659] text-[18px] text-[#55eeb0]">
            <AppIcon name="architecture" className="size-[18px]" />
          </span>
          <h2 className="m-0 text-[20px] leading-[1.12] font-semibold tracking-[-.03em]">
            Thoughtful solutions, lasting results.
          </h2>
        </div>
        <p className="mt-4 text-[12px] leading-[1.5] text-[#aebdb6]">
          I care about user needs, clean architecture, accessibility and measurable impact.
        </p>
        <a className="mt-4 inline-flex text-[12px] font-medium text-[#55eeb0]" href="/about">
          Learn more&nbsp; <AppIcon name="arrow-right" className="size-3.5" />
        </a>
      </article>
    </section>
    <div id="experience-detail" className="sr-only">
      Detailed experience is available from the Experience navigation and résumé page.
    </div>
  </>
);
