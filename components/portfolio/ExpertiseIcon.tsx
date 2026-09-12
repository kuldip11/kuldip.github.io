import type { ExpertiseIconName } from '@/constants/pages/home.constants';

import type { ReactNode } from 'react';

interface ExpertiseIconProps {
  icon: ExpertiseIconName;
  className?: string;
}

const ICON_PATHS: Record<ExpertiseIconName, ReactNode> = {
  experience: (
    <>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M8 5V3h8v2M8 10h8M12 10v4" />
    </>
  ),
  react: (
    <>
      <ellipse cx="12" cy="12" rx="9" ry="3.5" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
  typescript: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7 9h6M10 9v8M14.5 11.2c.6-.7 1.4-1.1 2.4-1.1 1.4 0 2.4.7 2.4 1.8 0 1.2-.9 1.6-2.3 2-1.2.3-2 .7-2 1.7 0 .9.8 1.5 2 1.5 1 0 1.9-.4 2.6-1.1" />
    </>
  ),
  architecture: (
    <>
      <rect x="4" y="4" width="6" height="6" rx="1.5" />
      <rect x="14" y="4" width="6" height="6" rx="1.5" />
      <rect x="9" y="14" width="6" height="6" rx="1.5" />
      <path d="M7 10v2h10v-2M12 12v2" />
    </>
  ),
  performance: (
    <>
      <path d="M4 17a8 8 0 1 1 16 0" />
      <path d="M12 13l4-4" />
      <circle cx="12" cy="13" r="1.5" fill="currentColor" stroke="none" />
      <path d="M6.5 14.5h.01M17.5 14.5h.01M8.5 10h.01M15.5 10h.01" />
    </>
  ),
  testing: (
    <>
      <path d="M9 3h6M10 3v5l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3" />
      <path d="M8 14h8M9.5 17h.01M13 17h.01" />
    </>
  ),
  collaboration: (
    <>
      <circle cx="8" cy="9" r="3" />
      <circle cx="16" cy="9" r="3" />
      <path d="M3.5 19c.7-3 2.2-4.5 4.5-4.5s3.8 1.5 4.5 4.5M11.5 19c.7-3 2.2-4.5 4.5-4.5s3.8 1.5 4.5 4.5" />
    </>
  ),
};

export const ExpertiseIcon = ({ icon, className = 'size-[15px]' }: ExpertiseIconProps) => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {ICON_PATHS[icon]}
  </svg>
);
