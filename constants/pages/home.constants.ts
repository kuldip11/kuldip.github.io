export const HOME_EXPERTISE = [
  { label: '5+ Years', icon: 'experience' },
  { label: 'React / Next.js', icon: 'react' },
  { label: 'TypeScript', icon: 'typescript' },
  { label: 'Frontend Architecture', icon: 'architecture' },
  { label: 'Performance', icon: 'performance' },
  { label: 'Testing & CI/CD', icon: 'testing' },
  { label: 'Full-stack Collaboration', icon: 'collaboration' },
] as const;

export type ExpertiseIconName = (typeof HOME_EXPERTISE)[number]['icon'];

export const HOME_CAPABILITIES = [
  ['</>', 'Build scalable products', 'From idea to a polished, production-ready frontend application.'],
  ['▱', 'Design maintainable architecture', 'Reusable UI systems and clean, maintainable codebases.'],
  ['ϟ', 'Optimize performance', 'Fast, accessible and delightful user experiences.'],
  ['☁', 'Work end-to-end', 'Integrate with APIs, testing, deployment and iterate based on real user feedback.'],
] as const;

export const HOME_TOOLS = [
  ['React', 'react', '61DAFB'],
  ['Next.js', 'nextdotjs', 'FFFFFF'],
  ['TypeScript', 'typescript', '3178C6'],
  ['JavaScript', 'javascript', 'F7DF1E'],
  ['Node.js', 'nodedotjs', '5FA04E'],
  ['PostgreSQL', 'postgresql', '4169E1'],
  ['Tailwind CSS', 'tailwindcss', '06B6D4'],
  ['Docker', 'docker', '2496ED'],
  ['GitHub', 'github', 'FFFFFF'],
  ['Git', 'git', 'F05032'],
  ['Vercel', 'vercel', 'FFFFFF'],
  ['Figma', 'figma', 'F24E1E'],
] as const;

export const HERO_EXPERTISE = [
  { label: '5+ Years', icon: 'experience' },
  { label: 'React / Next.js', icon: 'react' },
  { label: 'TypeScript', icon: 'typescript' },
  { label: 'Frontend Architecture', icon: 'architecture' },
  { label: 'Performance', icon: 'performance' },
  { label: 'Testing & CI/CD', icon: 'testing' },
  { label: 'Full-stack Collaboration', icon: 'collaboration' },
] as const;

export const HOME_CAPABILITY_CARDS = [
  ['</>', 'Build scalable products', 'From idea to a polished, production-ready frontend application.'],
  ['▱', 'Design maintainable architecture', 'Reusable UI systems and clean, maintainable codebases.'],
  ['↯', 'Optimize performance', 'Fast, accessible and delightful user experiences.'],
  ['☁', 'Work end-to-end', 'Integrate with APIs, testing and deployment, then iterate from real feedback.'],
] as const;

export const SYSTEM_CAPABILITIES = [
  {
    number: '01',
    title: 'PRODUCT FRONTEND',
    copy: 'Complex React & Next.js applications, responsive UI and reusable component systems.',
    stack: 'React · Next.js · TypeScript',
  },
  {
    number: '02',
    title: 'ARCHITECTURE & SCALE',
    copy: 'Maintainable frontend architecture for multi-role products, monorepos and enterprise workflows.',
    stack: 'Architecture · RBAC · Monorepos',
  },
  {
    number: '03',
    title: 'PERFORMANCE & DATA UI',
    copy: 'Fast experiences for dense data, maps and interaction-heavy interfaces at production scale.',
    stack: 'Mapbox · Core Web Vitals · SSR',
  },
  {
    number: '04',
    title: 'FULL-STACK DELIVERY',
    copy: 'Enough backend depth to own typed APIs, data flows, testing and production delivery end to end.',
    stack: 'Bun · PostgreSQL · Redis · CI/CD',
  },
] as const;

export const HOME_SECTION_HEADERS = {
  projects: {
    index: '01',
    eyebrow: 'Selected systems',
    title: 'Proof lives in the work.',
    copy: 'Three stories about scale, architecture and turning operational complexity into clear product experiences.',
  },
  approach: {
    index: '02',
    eyebrow: 'How I engineer',
    title: 'Clarity is a technical decision.',
  },
  experience: {
    index: '03',
    eyebrow: 'Experience',
    title: 'From interfaces to systems.',
  },
} as const;
