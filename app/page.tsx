import { About } from '@/components/portfolio/About';
import { Approach } from '@/components/portfolio/Approach';
import { CareerMetrics } from '@/components/portfolio/CareerMetrics';
import { Experience } from '@/components/portfolio/Experience';
import { Footer } from '@/components/portfolio/Footer';
import { Header } from '@/components/portfolio/Header';
import { Hero } from '@/components/portfolio/Hero';
import { Projects } from '@/components/portfolio/Projects';
import { TechStack } from '@/components/portfolio/TechStack';

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-[#07110f] text-[#f2f4ee]">
      <a
        className="fixed top-[-80px] left-5 z-[100] rounded-lg bg-[#71f6b5] px-[18px] py-3 font-bold text-[#07110f] focus:top-4"
        href="#main-content"
      >
        Skip to content
      </a>
      <Header />
      <Hero />
      <CareerMetrics />
      <Projects />
      <TechStack />
      <Approach />
      <Experience />
      <About />
      <Footer />
    </main>
  );
}
