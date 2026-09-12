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
  ['code', 'Build scalable products', 'From idea to a polished, production-ready frontend application.'],
  ['architecture', 'Design maintainable architecture', 'Reusable UI systems and clean, maintainable codebases.'],
  ['performance', 'Optimize performance', 'Fast, accessible and delightful user experiences.'],
  ['cloud', 'Work end-to-end', 'Integrate with APIs, testing, deployment and iterate based on real user feedback.'],
] as const;

export const HOME_TOOLS = [
  ['React', 'react'],
  ['Next.js', 'nextdotjs'],
  ['TypeScript', 'typescript'],
  ['JavaScript', 'javascript'],
  ['Node.js', 'nodedotjs'],
  ['PostgreSQL', 'postgresql'],
  ['Tailwind CSS', 'tailwindcss'],
  ['Docker', 'docker'],
  ['GitHub', 'github'],
  ['Git', 'git'],
  ['Vercel', 'vercel'],
  ['Figma', 'figma'],
] as const;
