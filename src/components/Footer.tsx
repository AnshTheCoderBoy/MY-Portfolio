
import { usePortfolioData } from '@/hooks/usePortfolioData';

const Footer = () => {
  const data = usePortfolioData();
  
  return (
    <footer className="py-6 sm:py-8 border-t border-border text-center text-muted-foreground bg-background px-4 sm:px-6">
      <p className="text-sm sm:text-base">
        &copy; {new Date().getFullYear()} {data.name} · Portfolio
      </p>
    </footer>
  );
};

export default Footer;
