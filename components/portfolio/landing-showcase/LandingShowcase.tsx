import { CapabilitiesTechStack } from './CapabilitiesTechStack';
import { EngineeringPrinciples } from './EngineeringPrinciples';
import { FeaturedWork } from './FeaturedWork';
import { LandingBackground } from './LandingBackground';
import { LandingHero } from './LandingHero';

export const LandingShowcase = () => (
  <main id="main-content" tabIndex={-1} className="relative overflow-x-clip bg-page text-foreground">
    <LandingBackground />
    <LandingHero />
    <CapabilitiesTechStack />
    <FeaturedWork />
    <EngineeringPrinciples />
  </main>
);
