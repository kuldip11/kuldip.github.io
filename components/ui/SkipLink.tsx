'use client';

import { ACCESSIBILITY_COPY } from '@/constants/ui/accessibility.constants';

export const SkipLink = () => (
  <a
    className="fixed top-[-80px] left-5 z-[100] rounded-xl bg-primary px-[18px] py-3 font-bold text-primary-foreground shadow-card focus:top-4"
    href="#main-content"
    onClick={() => document.getElementById('main-content')?.focus()}
  >
    {ACCESSIBILITY_COPY.skipToContentLabel}
  </a>
);
