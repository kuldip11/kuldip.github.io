'use client';

import { AppIcon } from '@/components/portfolio/AppIcon';

const PortfolioError = ({ reset }: Readonly<{ error: Error & { digest?: string }; reset: () => void }>) => {
  return (
    <main id="main-content" className="grid min-h-[70vh] place-items-center bg-page px-5 text-text-primary">
      <section className="w-full max-w-xl rounded-[18px] border border-panel-border bg-[#061612e8] p-8 text-center">
        <span
          className="mx-auto grid size-11 place-items-center rounded-full border border-[#2a7659] text-accent"
          aria-hidden="true"
        >
          <AppIcon name="refresh" className="size-5" />
        </span>
        <h1 className="mt-5 text-3xl font-semibold tracking-[-.04em]">This page could not be loaded.</h1>
        <p className="mt-3 text-sm leading-6 text-[#aebdb6]">
          The portfolio hit an unexpected error. You can retry without leaving this page.
        </p>
        <button
          className="mt-6 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-[#04100c]"
          onClick={reset}
          type="button"
        >
          Try again
        </button>
      </section>
    </main>
  );
};

export default PortfolioError;
