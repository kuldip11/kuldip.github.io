import { Footer } from '@/components/portfolio/Footer';
import { Header } from '@/components/portfolio/Header';

const PortfolioLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <>
    <a
      className="fixed top-[-80px] left-5 z-[100] rounded-lg bg-accent px-[18px] py-3 font-bold text-[#04100c] focus:top-4"
      href="#main-content"
    >
      Skip to content
    </a>
    <Header />
    {children}
    <Footer />
  </>
);

export default PortfolioLayout;
