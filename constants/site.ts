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
  socialDescription: 'I build frontend systems that stay fast as products get complex.',
  email: 'kuldipkumarsah112@gmail.com',
  github: 'https://github.com/kuldip11',
  linkedin: 'https://linkedin.com/in/kuldip-kumar-sah',
  location: 'India',
  url: configuredSiteUrl ?? 'http://localhost:3000',
  image: '/og.png',
  personId: '#person',
} as const;

export const socialImage = {
  url: `${siteConfig.url}${siteConfig.image}`,
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — ${siteConfig.role}`,
} as const;

export const servoraLinks = [
  { label: 'Website', href: 'https://servora-one.vercel.app/', description: 'Marketing website' },
  {
    label: 'Admin / POS',
    href: 'https://servora-web-lyart.vercel.app',
    description: 'Restaurant administration and POS',
  },
  { label: 'Kitchen', href: 'https://servora-kitchen.vercel.app', description: 'Kitchen display system' },
  { label: 'Waiter', href: 'https://servora-waiter.vercel.app', description: 'Waiter ordering application' },
  {
    label: 'Customer',
    href: 'https://servora-customer.vercel.app',
    description: 'Customer QR ordering application',
  },
  { label: 'GitHub', href: 'https://github.com/kuldip11/Servora', description: 'Source repository' },
  { label: 'API', href: 'https://servora-api-5198.onrender.com', description: 'Deployed backend service' },
] as const;
