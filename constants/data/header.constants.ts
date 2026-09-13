import { siteConfig } from '@/constants/site';

export const HEADER_CONTENT = {
  contactLabel: "Let's connect",
  mobileEyebrow: 'Navigation',
  mobileIntro: 'Explore my work, writing and experience.',
  openMenuLabel: 'Open navigation menu',
  closeMenuLabel: 'Close navigation menu',
  menuOpenLabel: 'Navigation menu is open',
  dismissMenuLabel: 'Dismiss navigation menu',
  mainNavigationLabel: 'Main navigation',
  mobileNavigationLabel: 'Mobile navigation',
  mobileMainNavigationLabel: 'Mobile main navigation',
  socialLinks: [
    { label: 'GitHub', href: siteConfig.github },
    { label: 'LinkedIn', href: siteConfig.linkedin },
  ],
} as const;
