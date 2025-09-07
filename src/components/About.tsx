import { Card, CardContent } from '@/components/ui/card';
import { Eye, Heart, Sparkles, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Star className="h-6 w-6 text-secondary mr-2" />
            <h2 className="font-cinzel-decorative text-4xl md:text-5xl font-bold text-primary">
              About the Psychic
            </h2>
            <Star className="h-6 w-6 text-secondary ml-2" />
          </div>
          <p className="font-cinzel text-xl text-muted-foreground">
            Meet Lezli Hall
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <Card className="bg-card/50 border-primary/20 shadow-mystical">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="font-cinzel-decorative text-3xl font-bold text-primary mb-2">
                      Lezli Hall
                    </h3>
                    <p className="font-cinzel text-lg text-secondary">
                      Gifted Medium & Spiritual Guide
                    </p>
                  </div>

                  <p className="font-cinzel text-base text-card-foreground leading-relaxed">
                    With over two decades of experience in the spiritual arts, Lezli Hall 
                    has dedicated her life to bridging the gap between the physical and 
                    spiritual realms. Her natural psychic abilities manifested at an early 
                    age, and she has spent years honing her gifts to provide accurate, 
                    compassionate guidance to those seeking answers.
                  </p>

                  <p className="font-cinzel text-base text-card-foreground leading-relaxed">
                    Lezli specializes in evidential mediumship, bringing forth specific 
                    details and messages from loved ones who have passed on. Her channeled 
                    readings offer profound insights into life's challenges, relationships, 
                    career paths, and spiritual growth opportunities.
                  </p>

                  <p className="font-cinzel text-base text-card-foreground leading-relaxed">
                    Known for her warm, empathetic approach, Lezli creates a safe space 
                    where clients feel comfortable exploring their deepest questions. 
                    Her readings are not just about predicting the future, but empowering 
                    individuals to make informed decisions and find peace in their journey.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Abilities & Specialties */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="font-cinzel-decorative text-2xl font-bold text-center text-accent mb-8">
              Spiritual Gifts & Specialties
            </h3>

            <div className="space-y-4">
              <Card className="bg-gradient-primary/10 border-primary/30 hover:shadow-mystical transition-mystical">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Eye className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-cinzel font-semibold text-primary mb-2">
                        Clairvoyant Vision
                      </h4>
                      <p className="font-cinzel text-sm text-muted-foreground">
                        Clear psychic sight that reveals hidden truths and future possibilities.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-rose/10 border-secondary/30 hover:shadow-mystical transition-mystical">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Heart className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-cinzel font-semibold text-secondary mb-2">
                        Evidential Mediumship
                      </h4>
                      <p className="font-cinzel text-sm text-muted-foreground">
                        Connecting with departed loved ones to bring healing and closure.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-primary/10 border-accent/30 hover:shadow-mystical transition-mystical">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Sparkles className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-cinzel font-semibold text-accent mb-2">
                        Channeled Guidance
                      </h4>
                      <p className="font-cinzel text-sm text-muted-foreground">
                        Receiving divine messages and wisdom from higher spiritual sources.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 bg-muted/30 rounded-lg border border-border">
              <p className="font-cinzel text-sm text-center text-muted-foreground italic">
                "My mission is to bring light, healing, and understanding to all who 
                seek spiritual guidance. Every reading is a sacred opportunity to 
                help someone find their way."
              </p>
              <p className="font-cinzel-decorative text-center text-secondary mt-2">
                — Lezli Hall
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;