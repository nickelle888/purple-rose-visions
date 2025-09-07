import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "California",
      rating: 5,
      text: "Lezli's reading was absolutely incredible. She connected with my grandmother and provided specific details that only she would know. The healing and closure I received was life-changing. I cannot recommend her enough!",
      service: "Evidential Mediumship"
    },
    {
      name: "Michael R.",
      location: "Texas",
      rating: 5,
      text: "I was skeptical at first, but Lezli's channeled reading gave me the clarity I desperately needed about my career path. Her guidance was spot-on, and everything she said has come to pass. Amazing gift!",
      service: "Channeled Reading"
    },
    {
      name: "Jennifer K.",
      location: "New York",
      rating: 5,
      text: "The combo session was perfect! Lezli brought through messages from my father and also provided incredible spiritual guidance for my future. She's compassionate, accurate, and truly gifted.",
      service: "Special Combo"
    },
    {
      name: "David L.",
      location: "Florida",
      rating: 5,
      text: "Lezli helped me connect with my late wife, and the messages she brought through were so specific and comforting. She has a rare gift and delivers it with such kindness and professionalism.",
      service: "Evidential Mediumship"
    },
    {
      name: "Amanda T.",
      location: "Colorado",
      rating: 5,
      text: "I've had several readings with different psychics, but Lezli stands out completely. Her accuracy is remarkable, and she truly cares about helping people. I'm a client for life!",
      service: "Channeled Reading"
    },
    {
      name: "Robert H.",
      location: "Arizona",
      rating: 5,
      text: "Lezli's reading at our private party was the highlight of the evening! Every guest was amazed by her accuracy and the beautiful messages she delivered. Professional and truly gifted.",
      service: "Private Event"
    }
  ];

  const renderStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => (
      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
    ));
  };

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-cinzel-decorative text-4xl md:text-5xl font-bold text-primary mb-4">
            Client Testimonials
          </h2>
          <p className="font-cinzel text-xl text-muted-foreground max-w-3xl mx-auto">
            Read what clients say about their spiritual experiences with Lezli Hall
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card/50 border-primary/20 shadow-mystical hover:shadow-lg transition-mystical animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex justify-center mb-4">
                  <Quote className="h-8 w-8 text-secondary/50 group-hover:text-secondary transition-mystical" />
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-4 space-x-1">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <blockquote className="font-cinzel text-sm text-card-foreground leading-relaxed mb-4 text-center italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Service Badge */}
                <div className="flex justify-center mb-3">
                  <span className="bg-gradient-primary/20 text-primary px-3 py-1 rounded-full text-xs font-cinzel font-semibold">
                    {testimonial.service}
                  </span>
                </div>

                {/* Client Info */}
                <div className="text-center">
                  <p className="font-cinzel-decorative font-semibold text-primary">
                    {testimonial.name}
                  </p>
                  <p className="font-cinzel text-xs text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-primary/10 border-primary/30 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-cinzel-decorative font-bold text-primary mb-2">
                500+
              </div>
              <p className="font-cinzel text-sm text-muted-foreground">
                Satisfied Clients
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-rose/10 border-secondary/30 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-cinzel-decorative font-bold text-secondary mb-2">
                20+
              </div>
              <p className="font-cinzel text-sm text-muted-foreground">
                Years Experience
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-primary/10 border-accent/30 text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-cinzel-decorative font-bold text-accent mb-2">
                98%
              </div>
              <p className="font-cinzel text-sm text-muted-foreground">
                Positive Reviews
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in">
          <Card className="bg-gradient-mystical/30 border-primary/20 shadow-mystical inline-block">
            <CardContent className="p-8">
              <h3 className="font-cinzel-decorative text-2xl font-bold text-primary mb-4">
                Ready for Your Own Reading?
              </h3>
              <p className="font-cinzel text-muted-foreground mb-6">
                Join hundreds of satisfied clients who have found clarity and healing through spiritual guidance
              </p>
              <button
                onClick={() => {
                  const element = document.getElementById('booking');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground px-8 py-3 rounded-lg font-cinzel font-semibold transition-mystical glow-primary"
              >
                Book Your Reading Today
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;