import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, DollarSign, Sparkles, Heart, Zap } from 'lucide-react';

const Services = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: "Channeled Readings",
      description: "Receive divine guidance and insights from higher spiritual sources",
      price: "$35",
      duration: "15 minutes",
      icon: Sparkles,
      features: [
        "Direct spiritual guidance",
        "Life path insights",
        "Answer specific questions",
        "Spiritual clarity"
      ],
      gradient: "bg-gradient-primary",
      borderColor: "border-primary/30"
    },
    {
      title: "Evidential Mediumship",
      description: "Connect with departed loved ones for healing and closure",
      price: "$85",
      duration: "30 minutes",
      icon: Heart,
      features: [
        "Messages from loved ones",
        "Evidential details",
        "Healing communication",
        "Emotional closure"
      ],
      gradient: "bg-gradient-rose",
      borderColor: "border-secondary/30"
    },
    {
      title: "Special Combo",
      description: "Experience both channeled guidance and mediumship in one session",
      price: "$75",
      duration: "Combined session",
      icon: Zap,
      features: [
        "Best of both worlds",
        "Comprehensive reading",
        "Maximum value",
        "Complete spiritual experience"
      ],
      gradient: "bg-gradient-primary",
      borderColor: "border-accent/30"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-cinzel-decorative text-4xl md:text-5xl font-bold text-primary mb-4">
            Spiritual Services
          </h2>
          <p className="font-cinzel text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our sacred offerings designed to provide you with the 
            spiritual guidance and connection you seek
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.title}
                className={`${service.borderColor} bg-card/50 hover:shadow-mystical transition-mystical animate-fade-in group`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${service.gradient}/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-cinzel-decorative text-2xl text-primary">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="font-cinzel text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Pricing */}
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <DollarSign className="h-5 w-5 text-secondary" />
                      <span className="font-cinzel-decorative text-3xl font-bold text-secondary">
                        {service.price}
                      </span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="font-cinzel text-sm text-muted-foreground">
                        {service.duration}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-cinzel font-semibold text-card-foreground mb-3">
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="font-cinzel text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Book Button */}
                  <Button
                    onClick={scrollToBooking}
                    className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-cinzel transition-mystical"
                  >
                    Book This Reading
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Information */}
        <Card className="bg-gradient-mystical/30 border-primary/20 shadow-mystical">
          <CardContent className="p-8 text-center">
            <h3 className="font-cinzel-decorative text-2xl font-bold text-primary mb-4">
              How Your Reading Works
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-cinzel-decorative text-xl font-bold text-primary">1</span>
                </div>
                <p className="font-cinzel text-sm text-card-foreground">
                  Book your preferred session type and time
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-cinzel-decorative text-xl font-bold text-secondary">2</span>
                </div>
                <p className="font-cinzel text-sm text-card-foreground">
                  Connect via phone or video call at your scheduled time
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-cinzel-decorative text-xl font-bold text-accent">3</span>
                </div>
                <p className="font-cinzel text-sm text-card-foreground">
                  Receive your personalized spiritual guidance
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Services;