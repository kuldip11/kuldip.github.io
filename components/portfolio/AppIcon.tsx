import type { ReactNode } from 'react';

export type AppIconName =
  | 'apps'
  | 'architecture'
  | 'arrow-down'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-up'
  | 'arrow-up-right'
  | 'article'
  | 'briefcase'
  | 'cloud'
  | 'code'
  | 'education'
  | 'experience'
  | 'featured'
  | 'mail'
  | 'message-circle'
  | 'moon'
  | 'performance'
  | 'plus'
  | 'refresh'
  | 'summary'
  | 'sun'
  | 'testing'
  | 'x';

interface AppIconProps {
  name: AppIconName;
  className?: string;
  strokeWidth?: number;
}

const commonProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
};

export const AppIcon = ({ name, className = 'size-4', strokeWidth = 1.8 }: AppIconProps) => {
  const paths = {
    apps: (
      <>
        <rect x="4" y="4" width="6" height="6" rx="1.5" />
        <rect x="14" y="4" width="6" height="6" rx="1.5" />
        <rect x="4" y="14" width="6" height="6" rx="1.5" />
        <rect x="14" y="14" width="6" height="6" rx="1.5" />
      </>
    ),
    architecture: (
      <>
        <rect x="4" y="4" width="6" height="5" rx="1.3" />
        <rect x="14" y="15" width="6" height="5" rx="1.3" />
        <path d="M10 6.5h3a3 3 0 0 1 3 3V15M14 17.5h-3a3 3 0 0 1-3-3V9" />
      </>
    ),
    'arrow-down': <path d="M12 5v14m0 0 5-5m-5 5-5-5" />,
    'arrow-left': <path d="M19 12H5m0 0 5-5m-5 5 5 5" />,
    'arrow-right': <path d="M5 12h14m0 0-5-5m5 5-5 5" />,
    'arrow-up': <path d="M12 19V5m0 0-5 5m5-5 5 5" />,
    'arrow-up-right': (
      <>
        <path d="M7 17 17 7" />
        <path d="M9 7h8v8" />
      </>
    ),
    article: (
      <>
        <path d="M6 3h9l3 3v15H6z" />
        <path d="M14 3v4h4M9 11h6M9 15h6M9 19h4" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="12" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" />
      </>
    ),
    cloud: <path d="M7 18h10a4 4 0 0 0 .5-7.97A6 6 0 0 0 6.2 8.2 4.5 4.5 0 0 0 7 18Z" />,
    code: (
      <>
        <path d="m9 7-5 5 5 5M15 7l5 5-5 5M13.5 5l-3 14" />
      </>
    ),
    education: (
      <>
        <path d="m3 9 9-5 9 5-9 5z" />
        <path d="M7 12v4c2.8 2 7.2 2 10 0v-4M21 9v6" />
      </>
    ),
    experience: (
      <>
        <path d="M5 4h14v16H5z" />
        <path d="M9 8h6M9 12h6M9 16h4" />
      </>
    ),
    featured: <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" />,
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    moon: <path d="M20 15.2A8 8 0 0 1 8.8 4 8.5 8.5 0 1 0 20 15.2Z" />,
    'message-circle': (
      <>
        <path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 8.7 8.7 0 0 1-4-.95L3 20l1.25-4.35A8.2 8.2 0 0 1 3 11.5a8.5 8.5 0 0 1 18 0Z" />
        <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" />
      </>
    ),
    performance: (
      <>
        <path d="M4 16a8 8 0 1 1 16 0" />
        <path d="m12 16 4-5M7.5 13.5h.01M16.5 13.5h.01" />
      </>
    ),
    plus: <path d="M12 5v14M5 12h14" />,
    refresh: (
      <>
        <path d="M20 6v5h-5" />
        <path d="M19 11a7 7 0 1 0 .2 3" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
      </>
    ),
    summary: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </>
    ),
    testing: (
      <>
        <path d="M9 3v5l-4.5 8A3 3 0 0 0 7.1 20h9.8a3 3 0 0 0 2.6-4L15 8V3" />
        <path d="M8 13h8M8 3h8" />
      </>
    ),
    x: <path d="M6 6l12 12M18 6 6 18" />,
  } satisfies Record<AppIconName, ReactNode>;

  return (
    <svg {...commonProps} className={className} strokeWidth={strokeWidth} aria-hidden="true">
      {paths[name]}
    </svg>
  );
};
