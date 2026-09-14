import { FEATURE_FLAGS } from '@/constants/config/feature-flags.constants';
import { ROUTES } from '@/constants/routes';
import { siteConfig } from '@/constants/site';
import type { FooterLink } from '@/types/navigation.types';

export const footerQuickLinks = [
  { label: 'Home', href: ROUTES.homeTop },
  { label: 'Projects', href: ROUTES.projects },
  ...(FEATURE_FLAGS.articles ? [{ label: 'Articles', href: ROUTES.articles }] : []),
  { label: 'About', href: ROUTES.about },
  { label: 'Résumé', href: ROUTES.resume },
] as const satisfies readonly FooterLink[];

export const footerFeaturedLinks = [
  { label: 'Servora · Restaurant OS', href: ROUTES.project('servora') },
  { label: 'TallyLite · Business App', href: ROUTES.project('tallylite') },
  ...(FEATURE_FLAGS.articles ? [{ label: 'Engineering Articles', href: ROUTES.articles }] : []),
  { label: 'GitHub', href: siteConfig.github, external: true },
  { label: 'View All Projects', href: ROUTES.projects },
] as const satisfies readonly FooterLink[];

export const footerMoreLinks = [
  ...(FEATURE_FLAGS.articles ? [{ label: 'Articles', href: ROUTES.articles }] : []),
  { label: 'Resume', href: ROUTES.resume },
  { label: 'Download CV', href: ROUTES.resumeDownload, download: true },
  { label: 'Privacy Policy' },
  { label: 'Terms of Use' },
] as const satisfies readonly FooterLink[];

export const footerSocialLinks = [
  { href: siteConfig.github, label: 'GitHub', icon: 'github' },
  { href: siteConfig.linkedin, label: 'LinkedIn', icon: 'linkedin' },
  { href: siteConfig.contactHref, label: 'Email', icon: 'mail' },
] as const;

export const FOOTER_CONTENT = {
  contact: {
    eyebrow: "Let's build something useful",
    title: 'Have a product problem worth solving?',
    description:
      "I'm interested in ambitious frontend and product engineering work where architecture, usability and delivery quality all matter.",
    actionLabel: "Let's connect",
  },
  intro:
    'Building scalable, maintainable product interfaces with React, Next.js, TypeScript and an architecture-first engineering approach.',
  exploreLabel: 'Explore',
  selectedWorkLabel: 'Selected work',
  copyrightSuffix: 'All rights reserved.',
  navigationLabel: 'Footer navigation',
  featuredWorkLabel: 'Featured work',
  builtWithLabel: 'Built with Next.js & TypeScript.',
} as const;
