import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Users, Sparkles, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Events = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    time: '',
    serviceType: '',
    guestCount: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Event inquiry submitted:', formData);
    
    toast({
      title: "Event Inquiry Submitted",
      description: "Thank you for your interest! Lezli will contact you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      date: '',
      time: '',
      serviceType: '',
      guestCount: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="events" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-cinzel-decorative text-4xl md:text-5xl font-bold text-primary mb-4">
            Upcoming Events
          </h2>
          <p className="font-cinzel text-xl text-muted-foreground max-w-3xl mx-auto">
            Join Lezli for group readings, spiritual workshops, and special events. 
            Or inquire about booking your own private event.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Event Information */}
          <div className="space-y-8 animate-fade-in">
            <Card className="bg-card/50 border-primary/30 shadow-mystical">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                  <CardTitle className="font-cinzel-decorative text-2xl text-primary">
                    Public Events
                  </CardTitle>
                </div>
                <CardDescription className="font-cinzel text-muted-foreground">
                  Experience group readings and spiritual gatherings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Sample upcoming events */}
                <div className="p-4 bg-gradient-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-cinzel font-semibold text-primary mb-1">
                        Group Mediumship Circle
                      </h4>
                      <p className="font-cinzel text-sm text-muted-foreground">
                        Monthly gathering for spirit communication
                      </p>
                    </div>
                    <Sparkles className="h-5 w-5 text-primary mt-1" />
                  </div>
                  <div className="text-sm text-muted-foreground font-cinzel">
                    <p>First Friday of each month • 7:00 PM</p>
                    <p>Limited to 12 participants</p>
                  </div>
                </div>

                <div className="p-4 bg-gradient-rose/10 rounded-lg border border-secondary/20">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-cinzel font-semibold text-secondary mb-1">
                        Psychic Development Workshop
                      </h4>
                      <p className="font-cinzel text-sm text-muted-foreground">
                        Learn to develop your own intuitive abilities
                      </p>
                    </div>
                    <Users className="h-5 w-5 text-secondary mt-1" />
                  </div>
                  <div className="text-sm text-muted-foreground font-cinzel">
                    <p>Monthly workshop • Saturdays 2:00 PM</p>
                    <p>All skill levels welcome</p>
                  </div>
                </div>

                <div className="bg-muted/30 p-4 rounded-lg border border-border">
                  <p className="font-cinzel text-sm text-center text-muted-foreground">
                    Event schedules and booking information will be announced on our social media 
                    and through our newsletter. Contact Lezli to join our mailing list.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Private Event Inquiry Form */}
          <div className="animate-fade-in">
            <Card className="bg-card/50 border-secondary/30 shadow-mystical">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="h-6 w-6 text-secondary" />
                  <CardTitle className="font-cinzel-decorative text-2xl text-secondary">
                    Private Events
                  </CardTitle>
                </div>
                <CardDescription className="font-cinzel text-muted-foreground">
                  Book Lezli for your special occasion
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="font-cinzel text-card-foreground">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="font-cinzel"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="font-cinzel text-card-foreground">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="font-cinzel"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone" className="font-cinzel text-card-foreground">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="font-cinzel"
                    />
                  </div>

                  {/* Event Details */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label className="font-cinzel text-card-foreground">Event Type</Label>
                      <Select value={formData.eventType} onValueChange={(value) => handleInputChange('eventType', value)}>
                        <SelectTrigger className="font-cinzel">
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="birthday">Birthday Party</SelectItem>
                          <SelectItem value="bachelorette">Bachelorette Party</SelectItem>
                          <SelectItem value="corporate">Corporate Event</SelectItem>
                          <SelectItem value="fundraiser">Fundraiser</SelectItem>
                          <SelectItem value="private-party">Private Party</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="font-cinzel text-card-foreground">Service Type</Label>
                      <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                        <SelectTrigger className="font-cinzel">
                          <SelectValue placeholder="Preferred service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="medium">Mediumship</SelectItem>
                          <SelectItem value="psychic">Psychic Readings</SelectItem>
                          <SelectItem value="both">Both</SelectItem>
                          <SelectItem value="unsure">Not Sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="date" className="font-cinzel text-card-foreground">
                        Desired Date
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        className="font-cinzel"
                      />
                    </div>
                    <div>
                      <Label htmlFor="time" className="font-cinzel text-card-foreground">
                        Preferred Time
                      </Label>
                      <Input
                        id="time"
                        type="time"
                        value={formData.time}
                        onChange={(e) => handleInputChange('time', e.target.value)}
                        className="font-cinzel"
                      />
                    </div>
                    <div>
                      <Label htmlFor="guestCount" className="font-cinzel text-card-foreground">
                        Guest Count
                      </Label>
                      <Input
                        id="guestCount"
                        type="number"
                        placeholder="How many?"
                        value={formData.guestCount}
                        onChange={(e) => handleInputChange('guestCount', e.target.value)}
                        className="font-cinzel"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="font-cinzel text-card-foreground">
                      Additional Details
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your event, special requests, or questions..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="font-cinzel resize-none"
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-cinzel transition-mystical"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Submit Event Inquiry
                  </Button>

                  <p className="text-xs text-center text-muted-foreground font-cinzel">
                    We'll respond within 24 hours with availability and pricing information.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;