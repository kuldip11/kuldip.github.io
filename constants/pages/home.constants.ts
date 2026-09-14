import { ROUTES } from '@/constants/routes';
import { siteConfig } from '@/constants/site';

export const HOME_PAGE_CONTENT = {
  expertiseLabel: 'Core expertise',
  hero: {
    eyebrow: siteConfig.role,
    title: 'Building frontend systems that scale with the product.',
    description:
      'I design and build scalable React and Next.js products, from frontend architecture and design systems to performance, testing and delivery.',
    primaryAction: { label: 'View projects', href: ROUTES.projects },
    secondaryAction: { label: 'Download résumé', href: '/Kuldip_Kumar_Sah.pdf' },
    tertiaryAction: { label: 'GitHub', href: siteConfig.github },
    portraitAlt: `${siteConfig.name}, ${siteConfig.role}`,
    locationLabel: `Based in ${siteConfig.location}`,
  },
  capabilities: {
    sectionLabel: 'Capabilities and tech stack',
    eyebrow: 'What I do',
    title: 'Engineering products beyond the component layer.',
    description:
      'I work across architecture, product delivery and quality so interfaces stay maintainable as products grow.',
  },
  technology: {
    eyebrow: 'Technology',
    title: 'A focused stack for modern product work.',
  },
  featured: {
    eyebrow: 'Featured Projects',
    title: 'Products built with architecture in mind.',
    viewAllLabel: 'View all projects',
    projectActionLabel: 'View case study',
    liveActionLabel: 'Open live product',
  },
  experience: {
    eyebrow: 'Experience',
    title: 'From shipping features to owning product architecture.',
    description:
      'My work has grown from frontend delivery into application architecture, product quality and end-to-end engineering ownership.',
    actionLabel: 'View résumé',
    actionHref: ROUTES.resume,
  },
  approach: {
    eyebrow: 'How I work',
    title: 'Build for change, not just for launch.',
    description:
      'I make ownership explicit, keep business rules out of presentation code, and treat accessibility, performance and testing as product work.',
    actionLabel: 'More about my approach',
    actionHref: ROUTES.about,
  },
} as const;

export const HOME_EXPERTISE = [
  { label: '5+ years experience', icon: 'experience' },
  { label: 'React / Next.js', icon: 'react' },
  { label: 'Product architecture', icon: 'architecture' },
] as const;

export type ExpertiseIconName = (typeof HOME_EXPERTISE)[number]['icon'];

export const HOME_CAPABILITIES = [
  {
    id: 'frontend-architecture',
    icon: 'architecture',
    title: 'Frontend architecture',
    description: 'Scalable application structures, reusable component systems and maintainable boundaries.',
  },
  {
    id: 'product-engineering',
    icon: 'code',
    title: 'Product engineering',
    description: 'React, Next.js and TypeScript features taken from product requirement through production.',
  },
  {
    id: 'performance-quality',
    icon: 'performance',
    title: 'Performance & quality',
    description: 'Accessibility, testing, performance and delivery discipline built into the product workflow.',
  },
] as const;

export const HOME_PRINCIPLES = [
  {
    title: 'Make ownership explicit.',
    description:
      'Critical decisions should have one clear authority, whether that is pricing on the server, route data in a typed model, or presentation inside a focused component.',
  },
  {
    title: 'Design for change.',
    description:
      'Good architecture should make the next product change easier instead of only making the current implementation look organized.',
  },
  {
    title: 'Treat quality as product work.',
    description:
      'Accessibility, performance, testing and failure states belong in the product workflow rather than being deferred to a cleanup phase.',
  },
] as const;

export const HOME_TOOL_GROUPS = [
  {
    label: 'Frontend',
    items: [
      { name: 'React', slug: 'react' },
      { name: 'Next.js', slug: 'nextdotjs' },
      { name: 'TypeScript', slug: 'typescript' },
      { name: 'JavaScript', slug: 'javascript' },
      { name: 'Tailwind CSS', slug: 'tailwindcss' },
    ],
  },
  {
    label: 'Platform',
    items: [
      { name: 'Node.js', slug: 'nodedotjs' },
      { name: 'PostgreSQL', slug: 'postgresql' },
      { name: 'Docker', slug: 'docker' },
    ],
  },
  {
    label: 'Delivery & design',
    items: [
      { name: 'GitHub', slug: 'github' },
      { name: 'Git', slug: 'git' },
      { name: 'Vercel', slug: 'vercel' },
      { name: 'Figma', slug: 'figma' },
    ],
  },
] as const;
