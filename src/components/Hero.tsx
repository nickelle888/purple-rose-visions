import { Button } from '@/components/ui/button';
import { Sparkles, Star } from 'lucide-react';
import heroBackground from '@/assets/mystical-hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          onError={(e) => {
            console.error('Video failed to load:', e);
            e.currentTarget.style.display = 'none';
          }}
          onLoadStart={() => console.log('Video loading started')}
          onCanPlay={() => console.log('Video can play')}
        >
          <source src="/Firefly A close-up of a tarot table illuminated by flickering lit candles, casting a warm glow. The  (4).mp4" type="video/mp4" />
        </video>
        {/* Fallback background */}
        <div 
          className="w-full h-full bg-gradient-mystical"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-mystical opacity-50"></div>
        <div className="absolute inset-0 mystical-overlay"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-20 left-10 h-6 w-6 text-secondary animate-mystical-float opacity-70" />
        <Star className="absolute top-32 right-20 h-4 w-4 text-primary-glow animate-pulse opacity-60" />
        <Sparkles className="absolute bottom-40 left-20 h-8 w-8 text-accent animate-glow-pulse opacity-50" />
        <Star className="absolute bottom-20 right-10 h-5 w-5 text-secondary animate-mystical-float opacity-80" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          {/* Main Title */}
          <h1 className="font-cinzel-decorative text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent glow-primary">
              Purple Rose
            </span>
            <br />
            <span className="text-foreground">Psychic</span>
          </h1>

          {/* Psychic Name */}
          <div className="mb-6">
            <p className="font-cinzel text-xl md:text-2xl text-secondary font-medium">
              with Lezli Hall
            </p>
          </div>

          {/* Tagline */}
          <div className="mb-8">
            <p className="font-cinzel-decorative text-2xl md:text-3xl text-accent font-semibold animate-glow-pulse">
              Wouldn't You Like To Know?
            </p>
          </div>

          {/* Description */}
          <div className="mb-10 max-w-2xl mx-auto">
            <p className="font-cinzel text-lg md:text-xl text-muted-foreground leading-relaxed">
              Discover the mysteries of your past, present, and future through 
              channeled readings and evidential mediumship. Experience spiritual 
              guidance that illuminates your path forward.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection('booking')}
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-cinzel text-lg px-8 py-3 glow-primary transition-mystical"
            >
              Book Your Reading
            </Button>
            <Button
              onClick={() => scrollToSection('services')}
              variant="outline"
              size="lg"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-cinzel text-lg px-8 py-3 transition-mystical"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;