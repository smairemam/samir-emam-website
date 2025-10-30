import { Button } from '@/components/ui/button';
import { Download, Mail } from 'lucide-react';

export default function Hero() {
  const handleDownloadCV = () => {
    // Analytics event tracking placeholder
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cv_download', {
        event_category: 'engagement',
        event_label: 'CV Download',
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
            Samir Emam
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent">
            Social Media Marketing Specialist
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Campaign-led content. Measurable engagement. Brand growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-accent text-lg px-8 py-6"
              onClick={handleDownloadCV}
            >
              <a href="/assets/SamirProfile.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download CV (PDF)
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground pt-4">
            Based in Dubai — open to opportunities across UAE & MENA
          </p>
        </div>
      </div>
    </section>
  );
}
