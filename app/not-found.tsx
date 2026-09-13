import Link from 'next/link';

import { SYSTEM_PAGE_CONTENT } from '@/constants/ui/system-page.constants';

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-page px-5 text-center text-foreground">
      <div>
        <p className="text-sm font-semibold tracking-[.14em] text-primary uppercase">
          {SYSTEM_PAGE_CONTENT.notFound.code}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-5xl">
          {SYSTEM_PAGE_CONTENT.notFound.title}
        </h1>
        <p className="mx-auto mt-7 max-w-[560px] leading-7 text-foreground-secondary">
          {SYSTEM_PAGE_CONTENT.notFound.description}
        </p>
        <Link
          className="mt-8 inline-flex min-h-11 items-center rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground transition hover:bg-primary-hover"
          href="/"
        >
          {SYSTEM_PAGE_CONTENT.notFound.actionLabel}
        </Link>
      </div>
    </main>
  );
}
