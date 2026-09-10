export const siteConfig = {
  name: 'Kuldip Kumar Sah',
  shortName: 'Kuldip Sah',
  role: 'Senior Frontend Engineer',
  description:
    'Kuldip Kumar Sah is a Senior Frontend Engineer specializing in React, Next.js and TypeScript, building scalable web applications, high-performance data interfaces and frontend architecture for complex products.',
  email: 'kuldipkumarsah112@gmail.com',
  github: 'https://github.com/kuldip11',
  linkedin: 'https://linkedin.com/in/kuldip-kumar-sah',
  location: 'India',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
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
  { label: 'Customer', href: 'https://servora-customer.vercel.app', description: 'Customer QR ordering application' },
  { label: 'GitHub', href: 'https://github.com/kuldip11/Servora', description: 'Source repository' },
  { label: 'API', href: 'https://servora-api-5198.onrender.com', description: 'Deployed backend service' },
] as const;
