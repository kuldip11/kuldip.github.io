import { siteConfig } from '@/data/site';
export function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: siteConfig.url,
    name: `${siteConfig.name} — ${siteConfig.role}`,
    mainEntity: {
      '@type': 'Person',
      name: siteConfig.name,
      jobTitle: siteConfig.role,
      url: siteConfig.url,
      image: `${siteConfig.url}/kuldip.jpg`,
      email: `mailto:${siteConfig.email}`,
      sameAs: [siteConfig.github, siteConfig.linkedin],
      knowsAbout: [
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Frontend Architecture',
        'Web Performance',
        'Mapbox',
        'Testing',
        'Accessibility',
        'CI/CD',
      ],
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
