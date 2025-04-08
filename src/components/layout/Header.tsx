
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-subtle py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img 
              src="/xbites-logo.png" 
              alt="xBites Logo" 
              className="h-10" 
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                console.error('xBites logo failed to load');
                target.onerror = null;
                target.src = '/placeholder.svg';
              }}
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#product" className="text-foreground/80 hover:text-foreground transition-colors">
            Product
          </a>
          <a href="#how-it-works" className="text-foreground/80 hover:text-foreground transition-colors">
            How It Works
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            className="rounded-full px-5 bg-primary text-white hover:bg-primary/90"
            onClick={() => window.open("https://calendly.com/khodier-mahmoud/30min", "_blank")}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-background z-40 pt-20 px-6 flex flex-col transform transition-transform duration-300 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6 py-8">
          <a 
            href="#product" 
            className="text-lg font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Product
          </a>
          <a 
            href="#how-it-works" 
            className="text-lg font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            How It Works
          </a>
        </nav>
        <div className="mt-8 flex flex-col space-y-4">
          <Button 
            className="w-full rounded-full py-6 bg-primary text-white"
            onClick={() => window.open("https://calendly.com/khodier-mahmoud/30min", "_blank")}
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
