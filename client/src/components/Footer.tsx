import { Download, Mail, Phone, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleDownloadCV = () => {
    // Analytics event tracking placeholder
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'cv_download', {
        event_category: 'engagement',
        event_label: 'CV Download Footer',
      });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Samir Emam</h3>
              <p className="text-sm opacity-90">
                Social Media Marketing Specialist with 13+ years of experience driving brand growth
                and engagement.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <nav className="space-y-2">
                <a
                  href="#about"
                  className="block text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all"
                >
                  About
                </a>
                <a
                  href="#skills"
                  className="block text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all"
                >
                  Skills
                </a>
                <a
                  href="#experience"
                  className="block text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all"
                >
                  Experience
                </a>
                <a
                  href="#projects"
                  className="block text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="block text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all"
                >
                  Contact
                </a>
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold mb-4">Get In Touch</h4>
              <div className="space-y-3">
                <a
                  href="mailto:samemam71@gmail.com"
                  className="flex items-center gap-2 text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all"
                >
                  <Mail className="h-4 w-4" />
                  samemam71@gmail.com
                </a>
                <a
                  href="tel:+971506034637"
                  className="flex items-center gap-2 text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all"
                >
                  <Phone className="h-4 w-4" />
                  +971 50 603 4637
                </a>
                <a
                  href="https://www.linkedin.com/in/samiremam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn Profile
                </a>
                <a
                  href="/assets/SamirProfile.pdf"
                  download
                  onClick={handleDownloadCV}
                  className="flex items-center gap-2 text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all font-medium"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-sm opacity-75">
              © {currentYear} Samir Emam. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
