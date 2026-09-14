import { landingPageKeywords } from '@/constants/seo';
import { siteConfig } from '@/constants/site';

export const JsonLd = () => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${siteConfig.url}/#profile-page`,
    url: siteConfig.url,
    name: `${siteConfig.name} — ${siteConfig.role}`,
    description: siteConfig.description,
    mainEntity: {
      '@type': 'Person',
      '@id': `${siteConfig.url}/${siteConfig.personId}`,
      name: siteConfig.name,
      jobTitle: siteConfig.role,
      url: siteConfig.url,
      image: `${siteConfig.url}/kuldip.png`,
      email: `mailto:${siteConfig.email}`,
      sameAs: [siteConfig.github, siteConfig.linkedin],
      knowsAbout: [...landingPageKeywords],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
};
