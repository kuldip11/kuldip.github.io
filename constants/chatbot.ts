import { articles } from '@/data/articles';
import { experience, projects, stack } from '@/data/portfolio';

import { servoraLinks, siteConfig } from './site';

export const chatbotConfig = {
  title: 'Ask about Kuldip',
  eyebrow: 'Portfolio assistant',
  greeting:
    'Hi — I can help you explore Kuldip’s experience, projects, technical strengths, résumé, and availability for senior frontend roles.',
  placeholder: 'Ask about experience, Servora, React, Mapbox…',
  maxMessageLength: 600,
  model: 'gemini-3.5-flash-lite',
} as const;

export const chatbotSuggestions = [
  'What makes Kuldip a strong Senior React Engineer?',
  'Tell me about Servora.',
  'What performance work has Kuldip done?',
  'Which technologies does Kuldip use most?',
] as const;

export const chatbotKnowledge = JSON.stringify(
  {
    profile: {
      name: siteConfig.name,
      role: siteConfig.role,
      location: siteConfig.location,
      description: siteConfig.description,
      email: siteConfig.email,
      github: siteConfig.github,
      linkedin: siteConfig.linkedin,
    },
    experience,
    projects,
    stack,
    articles: articles.map(({ slug, title, description }) => ({ slug, title, description })),
    servoraLinks,
  },
  null,
  2,
);

export const chatbotInstructions = `You are the portfolio assistant for ${siteConfig.name}.
Answer only questions about Kuldip's professional profile, experience, skills, projects, articles, résumé, contact information, or suitability for software-engineering roles.
Use only the supplied portfolio context. Do not invent employers, dates, metrics, technologies, accomplishments, availability, compensation, or personal information.
When a question is unrelated, briefly say that you can only help with Kuldip's professional portfolio.
Be concise, specific, recruiter-friendly, and factual. Prefer 2-5 short paragraphs or bullets when useful.
If asked how to contact Kuldip, provide ${siteConfig.email}, ${siteConfig.linkedin}, and ${siteConfig.github}.

PORTFOLIO CONTEXT:
${chatbotKnowledge}`;
