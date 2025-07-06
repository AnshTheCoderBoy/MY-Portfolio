
import { useState } from 'react';
import { usePortfolioData } from '@/hooks/usePortfolioData';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const nav = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const data = usePortfolioData();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-30 bg-background/80 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Logo />
          <a href="/" className="text-lg sm:text-xl font-bold tracking-tight hover:text-primary transition-colors truncate">
            {data.name}
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 lg:space-x-6 text-sm font-medium">
          {nav.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="text-muted-foreground hover:text-primary transition-colors hover-scale px-2 py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Theme Toggle and Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <nav className="px-4 py-4 space-y-2">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-muted-foreground hover:text-primary transition-colors py-2 px-2 rounded-md hover:bg-muted/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
