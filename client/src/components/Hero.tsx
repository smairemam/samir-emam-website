import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-16 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            {t('hero.title')}
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-200">
            {t('hero.subtitle')}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            {t('hero.tagline')}
          </p>
          <div className="flex justify-center pt-6">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            >
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                {t('hero.cta')}
              </a>
            </Button>
          </div>
          <p className="text-sm text-gray-300 pt-4">
            {t('hero.location')}
          </p>
        </div>
      </div>
    </section>
  );
}
