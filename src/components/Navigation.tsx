import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-primary glow-primary" />
            <div>
              <h1 className="font-cinzel-decorative text-xl font-bold text-primary">
                Purple Rose Psychic
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="font-cinzel text-foreground hover:text-primary transition-mystical"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="font-cinzel text-foreground hover:text-primary transition-mystical"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="font-cinzel text-foreground hover:text-primary transition-mystical"
            >
              Booking
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className="font-cinzel text-foreground hover:text-primary transition-mystical"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="font-cinzel text-foreground hover:text-primary transition-mystical"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="font-cinzel text-foreground hover:text-primary transition-mystical"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-card/95">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 font-cinzel text-foreground hover:text-primary transition-mystical"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 font-cinzel text-foreground hover:text-primary transition-mystical"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('booking')}
                className="block w-full text-left px-3 py-2 font-cinzel text-foreground hover:text-primary transition-mystical"
              >
                Booking
              </button>
              <button
                onClick={() => scrollToSection('events')}
                className="block w-full text-left px-3 py-2 font-cinzel text-foreground hover:text-primary transition-mystical"
              >
                Events
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left px-3 py-2 font-cinzel text-foreground hover:text-primary transition-mystical"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 font-cinzel text-foreground hover:text-primary transition-mystical"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;