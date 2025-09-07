import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Contact form submitted:', formData);
    
    toast({
      title: "Message Sent Successfully",
      description: "Thank you for reaching out! Lezli will respond within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-cinzel-decorative text-4xl md:text-5xl font-bold text-primary mb-4">
            Contact Lezli
          </h2>
          <p className="font-cinzel text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about readings or need spiritual guidance? 
            Reach out and let's connect on your spiritual journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <Card className="bg-card/50 border-primary/30 shadow-mystical">
              <CardHeader>
                <CardTitle className="font-cinzel-decorative text-2xl text-primary flex items-center">
                  <MessageCircle className="h-6 w-6 mr-3" />
                  Get In Touch
                </CardTitle>
                <CardDescription className="font-cinzel text-muted-foreground">
                  Multiple ways to connect with Lezli Hall
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Contact Methods */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-gradient-primary/10 rounded-lg border border-primary/20">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-cinzel font-semibold text-card-foreground">Email</p>
                      <p className="font-cinzel text-sm text-muted-foreground">
                        lezli@purplerosepsychic.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-gradient-rose/10 rounded-lg border border-secondary/20">
                    <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                    <div>
                      <p className="font-cinzel font-semibold text-card-foreground">Phone</p>
                      <p className="font-cinzel text-sm text-muted-foreground">
                        Available during reading sessions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-gradient-primary/10 rounded-lg border border-accent/20">
                    <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                    <div>
                      <p className="font-cinzel font-semibold text-card-foreground">Location</p>
                      <p className="font-cinzel text-sm text-muted-foreground">
                        Phone & Video Readings Available Worldwide
                      </p>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-muted/30 p-4 rounded-lg border border-border">
                  <h4 className="font-cinzel font-semibold text-card-foreground mb-2">
                    Response Time
                  </h4>
                  <ul className="space-y-1 font-cinzel text-sm text-muted-foreground">
                    <li>• Email inquiries: Within 24 hours</li>
                    <li>• Booking questions: Same day</li>
                    <li>• Event inquiries: Within 48 hours</li>
                    <li>• Urgent matters: Please call directly</li>
                  </ul>
                </div>

                {/* Office Hours */}
                <div className="bg-gradient-mystical/20 p-4 rounded-lg border border-primary/20">
                  <h4 className="font-cinzel font-semibold text-primary mb-2">
                    Availability
                  </h4>
                  <div className="space-y-1 font-cinzel text-sm text-muted-foreground">
                    <p>Monday - Friday: 9:00 AM - 8:00 PM PST</p>
                    <p>Saturday: 10:00 AM - 6:00 PM PST</p>
                    <p>Sunday: 12:00 PM - 5:00 PM PST</p>
                    <p className="text-xs mt-2 italic">
                      Reading times may vary - check Calendly for current availability
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="bg-card/50 border-secondary/30 shadow-mystical">
              <CardHeader>
                <CardTitle className="font-cinzel-decorative text-2xl text-secondary flex items-center">
                  <Send className="h-6 w-6 mr-3" />
                  Send a Message
                </CardTitle>
                <CardDescription className="font-cinzel text-muted-foreground">
                  Fill out the form below and Lezli will get back to you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-name" className="font-cinzel text-card-foreground">
                        Full Name *
                      </Label>
                      <Input
                        id="contact-name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="font-cinzel"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-email" className="font-cinzel text-card-foreground">
                        Email Address *
                      </Label>
                      <Input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="font-cinzel"
                        required
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <Label htmlFor="contact-phone" className="font-cinzel text-card-foreground">
                      Phone Number (Optional)
                    </Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="font-cinzel"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <Label className="font-cinzel text-card-foreground">Subject *</Label>
                    <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)} required>
                      <SelectTrigger className="font-cinzel">
                        <SelectValue placeholder="What can I help you with?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="reading-question">Question About Readings</SelectItem>
                        <SelectItem value="booking-help">Booking Assistance</SelectItem>
                        <SelectItem value="private-event">Private Event Inquiry</SelectItem>
                        <SelectItem value="pricing">Pricing Information</SelectItem>
                        <SelectItem value="spiritual-guidance">Spiritual Guidance</SelectItem>
                        <SelectItem value="testimonial">Share a Testimonial</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="contact-message" className="font-cinzel text-card-foreground">
                      Your Message *
                    </Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Please share your questions or tell me how I can help you on your spiritual journey..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="font-cinzel resize-none"
                      rows={6}
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-cinzel transition-mystical"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>

                  {/* Privacy Note */}
                  <p className="text-xs text-center text-muted-foreground font-cinzel">
                    Your information is kept private and secure. 
                    We respect your privacy and will never share your details.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 animate-fade-in">
          <Card className="bg-gradient-mystical/20 border-primary/20 shadow-mystical">
            <CardHeader className="text-center">
              <CardTitle className="font-cinzel-decorative text-2xl text-primary">
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 font-cinzel text-sm">
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">
                    How do phone readings work?
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    Phone readings are just as effective as in-person sessions. Psychic energy transcends physical distance, and I can connect with your energy through your voice and intention.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">
                    What should I expect during a reading?
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    Come with an open mind and specific questions. I'll tune into your energy and relay the messages I receive. Feel free to ask questions and participate in the conversation.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">
                    Do you record readings?
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    I don't record sessions, but you're welcome to record on your end for personal reference. Many clients find it helpful to revisit their readings later.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">
                    Can you guarantee specific outcomes?
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    Readings provide guidance and insight, but the future isn't set in stone. You have free will to make choices that can influence outcomes based on the guidance received.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;