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
  architecture: (
    <>
      <rect x="4" y="4" width="6" height="6" rx="1.5" />
      <rect x="14" y="4" width="6" height="6" rx="1.5" />
      <rect x="9" y="14" width="6" height="6" rx="1.5" />
      <path d="M7 10v2h10v-2M12 12v2" />
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
