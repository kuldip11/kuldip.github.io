import { ROUTES } from '@/constants/routes';

export const mainNavigation = [
  { label: 'Home', href: ROUTES.home },
  { label: 'Projects', href: ROUTES.projects },
  { label: 'Articles', href: ROUTES.articles },
  { label: 'About', href: ROUTES.about },
  { label: 'Résumé', href: ROUTES.resume },
] as const;

export const footerNavigation = [
  { label: 'Projects', href: ROUTES.projects },
  { label: 'Articles', href: ROUTES.articles },
  { label: 'About', href: ROUTES.about },
  { label: 'Résumé', href: ROUTES.resume },
] as const;
