import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ExternalLink, Phone } from 'lucide-react';

const Booking = () => {
  return (
    <section id="booking" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-cinzel-decorative text-4xl md:text-5xl font-bold text-primary mb-4">
            Book Your Reading
          </h2>
          <p className="font-cinzel text-xl text-muted-foreground">
            Schedule your spiritual guidance session with Lezli Hall
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Calendly Booking Card */}
          <Card className="bg-card/50 border-primary/30 shadow-mystical animate-fade-in">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-cinzel-decorative text-2xl text-primary">
                Online Scheduling
              </CardTitle>
              <CardDescription className="font-cinzel text-muted-foreground">
                Book directly through our secure calendar system
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-secondary" />
                  <span className="font-cinzel text-sm text-card-foreground">
                    Available 7 days a week
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-secondary" />
                  <span className="font-cinzel text-sm text-card-foreground">
                    Phone or video call options
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={() => window.open('https://calendly.com/purplerosepsychic', '_blank')}
                  className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-cinzel transition-mystical"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Book via Calendly
                </Button>
                <p className="text-xs text-center text-muted-foreground font-cinzel">
                  Secure booking powered by Calendly
                </p>
              </div>

              <div className="bg-muted/30 p-4 rounded-lg border border-border">
                <h4 className="font-cinzel font-semibold text-card-foreground mb-2">
                  What to Expect:
                </h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="font-cinzel text-muted-foreground">
                      Instant booking confirmation
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="font-cinzel text-muted-foreground">
                      Automatic reminders sent
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="font-cinzel text-muted-foreground">
                      Easy rescheduling options
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Quick Reference Card */}
          <Card className="bg-gradient-rose/10 border-secondary/30 shadow-mystical animate-fade-in">
            <CardHeader className="text-center">
              <CardTitle className="font-cinzel-decorative text-2xl text-secondary">
                Reading Options
              </CardTitle>
              <CardDescription className="font-cinzel text-muted-foreground">
                Choose the service that resonates with you
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Service Options */}
                <div className="space-y-4">
                  <div className="p-4 bg-card/30 rounded-lg border border-primary/20">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-cinzel font-semibold text-primary">
                        Channeled Reading
                      </h4>
                      <span className="font-cinzel-decorative text-lg font-bold text-secondary">
                        $35
                      </span>
                    </div>
                    <p className="font-cinzel text-sm text-muted-foreground mb-1">
                      15 minutes of spiritual guidance
                    </p>
                    <p className="font-cinzel text-xs text-muted-foreground">
                      Perfect for specific questions and quick insights
                    </p>
                  </div>

                  <div className="p-4 bg-card/30 rounded-lg border border-secondary/20">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-cinzel font-semibold text-secondary">
                        Evidential Mediumship
                      </h4>
                      <span className="font-cinzel-decorative text-lg font-bold text-secondary">
                        $85
                      </span>
                    </div>
                    <p className="font-cinzel text-sm text-muted-foreground mb-1">
                      30 minutes connecting with loved ones
                    </p>
                    <p className="font-cinzel text-xs text-muted-foreground">
                      Messages from those who have passed on
                    </p>
                  </div>

                  <div className="p-4 bg-card/30 rounded-lg border border-accent/20">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-cinzel font-semibold text-accent">
                        Special Combo
                      </h4>
                      <span className="font-cinzel-decorative text-lg font-bold text-secondary">
                        $75
                      </span>
                    </div>
                    <p className="font-cinzel text-sm text-muted-foreground mb-1">
                      Combined session experience
                    </p>
                    <p className="font-cinzel text-xs text-muted-foreground">
                      Both channeled guidance and mediumship
                    </p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-muted/30 p-4 rounded-lg border border-border">
                  <p className="font-cinzel text-sm text-center text-muted-foreground mb-2">
                    Need help choosing or have questions?
                  </p>
                  <Button
                    onClick={() => {
                      const element = document.getElementById('contact');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    variant="outline"
                    className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-cinzel transition-mystical"
                  >
                    Contact Lezli
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Booking;