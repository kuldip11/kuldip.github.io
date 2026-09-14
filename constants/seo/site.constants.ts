const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');

if (process.env.NODE_ENV === 'production' && !configuredSiteUrl) {
  throw new Error('NEXT_PUBLIC_SITE_URL must be set for production builds.');
}

export const siteConfig = {
  name: 'Kuldip Kumar Sah',
  shortName: 'Kuldip Sah',
  role: 'Senior Frontend Engineer',

  description:
    'Kuldip Kumar Sah is a Senior Frontend Engineer specializing in React, Next.js, TypeScript, frontend architecture and high-performance web applications.',

  socialDescription: 'Senior Frontend Engineer building frontend systems that stay fast as products get complex.',

  email: 'kuldipkumarsah112@gmail.com',

  contactHref: `mailto:kuldipkumarsah112@gmail.com?subject=${encodeURIComponent(
    'Portfolio enquiry',
  )}&body=${encodeURIComponent(
    `Hi Kuldip,

I came across your portfolio and wanted to get in touch.

`,
  )}`,

  github: 'https://github.com/kuldip11',
  linkedin: 'https://linkedin.com/in/kuldip-kumar-sah',
  location: 'India',

  url: configuredSiteUrl ?? 'http://localhost:3000',

  image: '/og.jpg',
  personId: '#person',
} as const;

export const socialImage = {
  url: siteConfig.image,
  width: 1200,
  height: 630,
  // type: 'image/jpeg',
  alt: `${siteConfig.name} — ${siteConfig.role}`,
} as const;

export { servoraLinks } from '@/constants/data/projects/servora.constants';
