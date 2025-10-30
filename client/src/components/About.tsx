import { Card } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function About() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            About Me
          </h2>
          <div
            ref={elementRef}
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <Card className="p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-foreground leading-relaxed">
                  I'm <strong>Samir Emam</strong> — a Social Media Marketing Specialist with{' '}
                  <strong>13+ years of hands-on experience</strong> building engagement and brand
                  growth across platforms (Facebook, Instagram, Twitter, YouTube, Google Ads). I've
                  led social for enterprise and agency clients including{' '}
                  <strong>e& UAE</strong> and <strong>Raya Contact Center</strong>, delivering
                  campaign strategies, content creation, and performance optimization.
                </p>
                <p className="text-lg text-foreground leading-relaxed mt-6">
                  My expertise spans <strong>digital marketing</strong>,{' '}
                  <strong>social media management</strong>, and{' '}
                  <strong>campaign optimization</strong>. I combine creative content development with
                  data-driven insights to deliver measurable results that drive business growth and
                  brand awareness.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
