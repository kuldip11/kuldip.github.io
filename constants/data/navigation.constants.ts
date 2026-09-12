import { ROUTES } from '@/constants/routes';

export const mainNavigation = [
  { label: 'Home', href: ROUTES.home },
  { label: 'Projects', href: ROUTES.projects },
  { label: 'Articles', href: ROUTES.articles },
  { label: 'Resume', href: ROUTES.resume },
] as const;

export const headerNavigation = [
  { label: 'Home', href: ROUTES.homeTop },
  { label: 'Projects', href: ROUTES.homeWork },
  { label: 'Experience', href: ROUTES.homeExperience },
  { label: 'Approach', href: ROUTES.homeApproach },
] as const;

export const footerNavigation = [
  { label: 'Projects', href: ROUTES.projects },
  { label: 'Articles', href: ROUTES.articles },
  { label: 'About', href: ROUTES.about },
  { label: 'Résumé', href: ROUTES.resume },
] as const;
