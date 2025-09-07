import { Sparkles, Heart, Star } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-8 w-8 text-primary glow-primary" />
              <div>
                <h3 className="font-cinzel-decorative text-2xl font-bold text-primary">
                  Purple Rose Psychic
                </h3>
                <p className="font-cinzel text-sm text-secondary">
                  with Lezli Hall
                </p>
              </div>
            </div>
            <p className="font-cinzel text-muted-foreground mb-4 leading-relaxed">
              Providing compassionate spiritual guidance through channeled readings 
              and evidential mediumship. Helping souls find clarity, healing, and 
              connection with the divine and their loved ones who have passed on.
            </p>
            <p className="font-cinzel-decorative text-lg text-accent font-semibold">
              Wouldn't You Like To Know?
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-cinzel-decorative text-lg font-semibold text-primary mb-4">
              Quick Links
            </h4>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection('about')}
                className="block font-cinzel text-muted-foreground hover:text-primary transition-mystical text-left"
              >
                About Lezli
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block font-cinzel text-muted-foreground hover:text-primary transition-mystical text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('booking')}
                className="block font-cinzel text-muted-foreground hover:text-primary transition-mystical text-left"
              >
                Book Reading
              </button>
              <button
                onClick={() => scrollToSection('events')}
                className="block font-cinzel text-muted-foreground hover:text-primary transition-mystical text-left"
              >
                Events
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block font-cinzel text-muted-foreground hover:text-primary transition-mystical text-left"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block font-cinzel text-muted-foreground hover:text-primary transition-mystical text-left"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Services & Pricing */}
          <div>
            <h4 className="font-cinzel-decorative text-lg font-semibold text-secondary mb-4">
              Services & Rates
            </h4>
            <div className="space-y-2 font-cinzel text-sm">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Channeled Reading</span>
                <span className="text-secondary font-semibold">$35/15min</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Mediumship</span>
                <span className="text-secondary font-semibold">$85/30min</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Special Combo</span>
                <span className="text-secondary font-semibold">$75</span>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-gradient-primary/10 rounded-lg border border-primary/20">
              <p className="font-cinzel text-xs text-card-foreground text-center">
                Phone & video readings available worldwide
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="font-cinzel text-sm text-muted-foreground">
                © {currentYear} Purple Rose Psychic. All rights reserved.
              </p>
              <p className="font-cinzel text-xs text-muted-foreground">
                Lezli Hall - Professional Psychic Medium
              </p>
            </div>

            {/* Spiritual Message */}
            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end space-x-2 mb-1">
                <Heart className="h-4 w-4 text-secondary animate-pulse" />
                <span className="font-cinzel text-sm text-muted-foreground">
                  Spreading Light & Love
                </span>
                <Star className="h-4 w-4 text-primary animate-mystical-float" />
              </div>
              <p className="font-cinzel text-xs text-muted-foreground italic">
                "Every soul deserves to know their path"
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-border pt-6">
          <div className="bg-muted/30 p-4 rounded-lg">
            <p className="font-cinzel text-xs text-center text-muted-foreground leading-relaxed">
              <strong>Disclaimer:</strong> Readings are for entertainment and spiritual guidance purposes. 
              Psychic readings cannot replace professional medical, legal, or financial advice. 
              You must be 18+ to receive a reading. Results are not guaranteed as everyone has free will 
              to make their own choices.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-4 left-4 opacity-30 pointer-events-none">
        <Sparkles className="h-4 w-4 text-primary animate-mystical-float" />
      </div>
      <div className="absolute bottom-8 right-8 opacity-30 pointer-events-none">
        <Star className="h-3 w-3 text-secondary animate-pulse" />
      </div>
    </footer>
  );
};

export default Footer;