import Link from 'next/link';

import { AppIcon } from '@/components/portfolio/AppIcon';
import { HOME_PAGE_CONTENT, HOME_PRINCIPLES } from '@/constants/pages/home.constants';

export const EngineeringPrinciples = () => (
  <section className="border-t border-border bg-surface-muted" id="approach">
    <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
        <div>
          <p className="text-[12px] font-bold tracking-[.16em] text-secondary uppercase">
            {HOME_PAGE_CONTENT.approach.eyebrow}
          </p>
          <h2 className="mt-3 text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.03] font-semibold tracking-[-.05em] text-foreground">
            {HOME_PAGE_CONTENT.approach.title}
          </h2>
          <p className="mt-5 max-w-[540px] text-[15px] leading-[1.7] text-foreground-secondary sm:text-[16px]">
            {HOME_PAGE_CONTENT.approach.description}
          </p>
          <Link
            className="mt-7 inline-flex min-h-11 items-center gap-2 text-[13px] font-semibold text-primary"
            href={HOME_PAGE_CONTENT.approach.actionHref}
          >
            {HOME_PAGE_CONTENT.approach.actionLabel} <AppIcon name="arrow-right" className="size-4" />
          </Link>
        </div>

        <ol className="grid list-none gap-0 p-0">
          {HOME_PRINCIPLES.map((principle, index) => (
            <li
              className="grid gap-3 border-t border-border py-6 sm:grid-cols-[72px_1fr] sm:gap-5"
              key={principle.title}
            >
              <span className="text-[12px] font-bold tracking-[.12em] text-primary">0{index + 1}</span>
              <div>
                <h3 className="text-[21px] font-semibold tracking-[-.035em] text-foreground">{principle.title}</h3>
                <p className="mt-2 max-w-[700px] text-[14px] leading-[1.7] text-foreground-secondary">
                  {principle.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);
