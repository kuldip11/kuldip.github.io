import { Footer } from '@/components/portfolio/Footer';
import { Header } from '@/components/portfolio/Header';
import { SkipLink } from '@/components/ui';

const PortfolioLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <>
    <SkipLink />
    <Header />
    {children}
    <Footer />
  </>
);

export default PortfolioLayout;
