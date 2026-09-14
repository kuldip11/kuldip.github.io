export type ExperienceEntry = {
  readonly period: string;
  readonly role: string;
  readonly company: string;
  readonly location: string;
  readonly summary: string;
  readonly current: boolean;
};

export const experience = [
  {
    period: '2026 — NOW',
    role: 'Senior Frontend Engineer',
    company: 'Software Workshop',
    location: 'Mumbai',
    summary:
      'Leading enterprise workflow delivery, frontend architecture and performance across SaaS, fintech and proptech products.',
    current: true,
  },
  {
    period: '2022 — 2026',
    role: 'Associate Frontend Developer',
    company: 'Software Workshop',
    location: 'Mumbai',
    summary:
      'Built modular onboarding journeys, high-density map experiences and more than fifty reusable interface components.',
    current: false,
  },
  {
    period: '2021 — 2022',
    role: 'Frontend Developer',
    company: 'Eleva Infotech',
    location: 'Bangalore',
    summary: 'Developed role-based restaurant operations spanning order, billing, menu, outlet and kitchen workflows.',
    current: false,
  },
] as const satisfies readonly ExperienceEntry[];
