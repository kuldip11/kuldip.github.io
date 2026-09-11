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
  { label: 'Servora (POS)', href: ROUTES.project('servora') },
  { label: 'React Components', href: ROUTES.projects },
  { label: 'UI/UX Implementations', href: ROUTES.projects },
  { label: 'Open Source', href: siteConfig.github, external: true },
  { label: 'View All', href: ROUTES.projects },
] as const satisfies readonly FooterLink[];

export const footerMoreLinks = [
  { label: 'Blog', suffix: ' (Soon)', href: ROUTES.articles },
  { label: 'Resume', href: ROUTES.resume },
  { label: 'Download CV', href: '/Kuldip_Kumar_Sah.pdf', download: true },
  { label: 'Privacy Policy' },
  { label: 'Terms of Use' },
] as const satisfies readonly FooterLink[];

export const footerSocialLinks = [
  { href: siteConfig.github, label: 'GitHub', icon: 'github' },
  { href: siteConfig.linkedin, label: 'LinkedIn', icon: 'linkedin' },
  { href: 'https://x.com/kuldip11', label: 'X', icon: 'x' },
  { href: siteConfig.contactHref, label: 'Email', icon: 'mail' },
] as const;
