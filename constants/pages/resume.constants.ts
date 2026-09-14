export const RESUME_PAGE_CONTENT = {
  eyebrow: 'Professional profile',
  title: 'Senior frontend engineering across product, architecture and delivery.',
  intro:
    'I build scalable React and TypeScript products, design maintainable frontend systems and stay close to the details that shape performance, accessibility and user experience.',
  summary:
    'Results-driven Senior Frontend Engineer with 5+ years of experience building modern web applications using React, Next.js and TypeScript. I enjoy solving product problems that require clear architecture, reusable systems and close collaboration across design, backend and product teams.',
  beyondWork:
    'I enjoy exploring new technologies, writing technical notes and building side projects that turn architectural ideas into working products.',
  education: {
    degree: "Bachelor's Degree",
    detail: 'Electronics & Instrumentation · India',
  },
  certifications: ['AWS / Cloud Fundamentals', 'Frontend Engineering', 'JavaScript & Algorithms'],
  metricsLabel: 'Career highlights',
  actions: {
    downloadLabel: 'Download PDF',
    linkedinLabel: 'LinkedIn',
    contactLabel: "Let's connect",
  },
  sections: {
    summaryEyebrow: 'Overview',
    summaryTitle: 'Professional summary',
    highlightsEyebrow: 'Selected impact',
    highlightsTitle: 'What I bring to a product team',
    experienceEyebrow: 'Experience',
    experienceTitle: 'Career timeline',
    currentLabel: 'Current',
    skillsEyebrow: 'Technical expertise',
    skillsTitle: 'Tools I use to ship products',
    skillTabsLabel: 'Core skill categories',
    educationLabel: 'Education',
    certificationsLabel: 'Certifications',
    selectedProjectEyebrow: 'Selected project',
    beyondEyebrow: 'Beyond the résumé',
    beyondTitle: 'I keep learning by building.',
  },
} as const;

export const RESUME_SKILLS = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
  Backend: ['Node.js', 'Bun', 'Elysia.js', 'REST APIs', 'Backend Integration'],
  'Tools & DevOps': ['Git & GitHub', 'Docker', 'CI/CD', 'Vercel', 'Vitest & Playwright'],
  Databases: ['PostgreSQL', 'Redis', 'Drizzle ORM', 'SQL & Data Modeling', 'Multi-tenant Data Design'],
  Others: ['Frontend Architecture', 'Performance', 'Accessibility', 'Monorepos', 'Cross-functional Collaboration'],
} as const;

export type ResumeSkillTab = keyof typeof RESUME_SKILLS;

export const RESUME_SKILL_TABS = Object.keys(RESUME_SKILLS) as ResumeSkillTab[];

export const RESUME_METRICS = [
  { value: '5+', label: 'Years experience' },
  { value: '20+', label: 'Projects' },
  { value: '5+', label: 'Teams collaborated' },
  { value: '4', label: 'Product domains' },
] as const;

export const RESUME_NAVIGATION = [
  { label: 'Overview', href: '#overview' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
] as const;

export const RESUME_TRAITS = ['Problem Solver', 'Team Player', 'Fast Learner', 'Product Mindset'] as const;
export const RESUME_HIGHLIGHTS = [
  'Built and shipped real-world products across SaaS, fintech, proptech and restaurant operations.',
  'Designed reusable frontend systems for dense, role-based and multi-surface workflows.',
  'Strong focus on performance, accessibility, testing and maintainable product architecture.',
  'Collaborated closely with product, design and backend teams from discovery through delivery.',
] as const;
