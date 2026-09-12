import { ROUTES } from '@/constants/routes';
import { siteConfig } from '@/constants/site';
import type { FooterLink } from '@/types/navigation.types';

export const footerQuickLinks = [
  { label: 'Home', href: ROUTES.homeTop },
  { label: 'Projects', href: ROUTES.projects },
  { label: 'Experience', href: ROUTES.homeExperience },
  { label: 'Approach', href: ROUTES.homeApproach },
  { label: 'Contact', href: siteConfig.contactHref },
] as const satisfies readonly FooterLink[];

export const footerFeaturedLinks = [
  { label: 'Servora · Restaurant OS', href: ROUTES.project('servora') },
  { label: 'TallyLite · Business App', href: ROUTES.project('tallylite') },
  { label: 'Engineering Articles', href: ROUTES.articles },
  { label: 'GitHub', href: siteConfig.github, external: true },
  { label: 'View All Projects', href: ROUTES.projects },
] as const satisfies readonly FooterLink[];

export const footerMoreLinks = [
  { label: 'Articles', href: ROUTES.articles },
  { label: 'Resume', href: ROUTES.resume },
  { label: 'Download CV', href: '/Kuldip_Kumar_Sah.pdf', download: true },
  { label: 'Privacy Policy' },
  { label: 'Terms of Use' },
] as const satisfies readonly FooterLink[];

export const footerSocialLinks = [
  { href: siteConfig.github, label: 'GitHub', icon: 'github' },
  { href: siteConfig.linkedin, label: 'LinkedIn', icon: 'linkedin' },
  { href: siteConfig.contactHref, label: 'Email', icon: 'mail' },
] as const;
