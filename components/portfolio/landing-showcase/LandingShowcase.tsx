import { CapabilitiesTechStack } from './CapabilitiesTechStack';
import { FeaturedWork } from './FeaturedWork';
import { LandingBackground } from './LandingBackground';
import { LandingHero } from './LandingHero';

export const LandingShowcase = () => (
  <main id="main-content" className="relative overflow-x-clip bg-[#030d0a] text-[#f5f7f3]">
    <LandingBackground />
    <LandingHero />
    <CapabilitiesTechStack />
    <FeaturedWork />
  </main>
);
