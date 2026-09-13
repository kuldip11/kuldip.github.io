'use client';

import { Button } from '@/components/ui';
import { SYSTEM_PAGE_CONTENT } from '@/constants/ui/system-page.constants';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="grid min-h-[70vh] place-items-center bg-page px-5 text-foreground">
      <section className="w-full max-w-xl rounded-card border border-border bg-surface p-8 text-center shadow-card">
        <span className="mx-auto grid size-11 place-items-center rounded-full border border-danger/25 bg-danger/5 text-danger">
          {SYSTEM_PAGE_CONTENT.error.symbol}
        </span>
        <h1 className="mt-5 text-2xl font-semibold tracking-[-.03em]">{SYSTEM_PAGE_CONTENT.error.title}</h1>
        <p className="mt-3 text-sm leading-6 text-foreground-secondary">{SYSTEM_PAGE_CONTENT.error.description}</p>
        <Button className="mt-6" onClick={reset}>
          {SYSTEM_PAGE_CONTENT.error.actionLabel}
        </Button>
      </section>
    </main>
  );
}
