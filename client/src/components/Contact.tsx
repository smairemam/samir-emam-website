import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Formspree integration - Replace with actual Formspree endpoint
      // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // Simulated submission for now
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Analytics event tracking placeholder
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_submit', {
          event_category: 'engagement',
          event_label: 'Contact Form',
        });
      }

      toast.success('Message sent successfully! I usually respond within 1-2 business days.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Please try again later');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            Let's Collaborate
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            I usually respond within 1-2 business days
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-6 shadow-md">
                <h3 className="text-xl font-bold text-primary mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:samemam71@gmail.com"
                    className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
                  >
                    <div className="p-2 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <span>samemam71@gmail.com</span>
                  </a>
                  <a
                    href="tel:+971506034637"
                    className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
                  >
                    <div className="p-2 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <span>+971 50 603 4637</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/samiremam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
                  >
                    <div className="p-2 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <Linkedin className="h-5 w-5 text-accent" />
                    </div>
                    <span>linkedin.com/in/samiremam</span>
                  </a>
                </div>
              </Card>
              <Card className="p-6 shadow-md bg-accent/5">
                <p className="text-sm text-foreground">
                  <strong>Location:</strong> Silicon Oasis, Dubai, UAE
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Open to opportunities across UAE & MENA region
                </p>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-6 shadow-md">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    required
                    rows={5}
                    className="w-full"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-accent"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
