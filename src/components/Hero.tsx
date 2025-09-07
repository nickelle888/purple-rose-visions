import { Button } from '@/components/ui/button';
import { Sparkles, Star } from 'lucide-react';
import heroBackground from '@/assets/mystical-hero-bg.jpg';

const Hero = () => {
  console.log('Hero component rendering...');
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-mystical">
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="font-cinzel-decorative text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-foreground">
            Purple Rose Psychic
          </h1>
          <p className="font-cinzel text-xl md:text-2xl text-secondary font-medium mb-6">
            with Lezli Hall
          </p>
          <p className="font-cinzel-decorative text-2xl md:text-3xl text-accent font-semibold mb-8">
            Wouldn't You Like To Know?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('booking')}
              className="bg-primary text-primary-foreground font-cinzel text-lg px-8 py-3 rounded-lg"
            >
              Book Your Reading
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;