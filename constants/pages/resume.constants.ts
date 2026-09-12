export const RESUME_SKILLS = {
  Frontend: [
    ['React', '95%'],
    ['Next.js', '90%'],
    ['TypeScript', '90%'],
    ['JavaScript', '95%'],
    ['Tailwind CSS', '88%'],
  ],
  Backend: [
    ['Node.js', '82%'],
    ['Bun', '82%'],
    ['Elysia.js', '78%'],
    ['REST APIs', '88%'],
    ['Backend Integration', '90%'],
  ],
  'Tools & DevOps': [
    ['Git & GitHub', '92%'],
    ['Docker', '80%'],
    ['CI/CD', '86%'],
    ['Vercel', '90%'],
    ['Vitest & Playwright', '88%'],
  ],
  Databases: [
    ['PostgreSQL', '84%'],
    ['Redis', '76%'],
    ['Drizzle ORM', '82%'],
    ['SQL & Data Modeling', '82%'],
    ['Multi-tenant Data Design', '85%'],
  ],
  Others: [
    ['Frontend Architecture', '92%'],
    ['Performance', '90%'],
    ['Accessibility', '86%'],
    ['Monorepos', '88%'],
    ['Cross-functional Collaboration', '92%'],
  ],
} as const;

export type ResumeSkillTab = keyof typeof RESUME_SKILLS;

export const RESUME_SKILL_TABS = Object.keys(RESUME_SKILLS) as ResumeSkillTab[];

export const RESUME_METRICS = [
  ['5+', 'Years Experience'],
  ['20+', 'Projects'],
  ['5+', 'Teams Collaborated'],
  ['100%', 'Commitment'],
] as const;

export const RESUME_NAVIGATION = ['Overview', 'Experience', 'Skills', 'Education', 'Certifications'] as const;
export const RESUME_TRAITS = ['Problem Solver', 'Team Player', 'Fast Learner', 'Product Mindset'] as const;
export const RESUME_HIGHLIGHTS = [
  'Built and shipped real-world products',
  'SaaS, POS and multi-tenant systems',
  'Strong focus on performance and UX',
  'Cross-functional collaboration',
  'Continuous learning and technical depth',
] as const;
