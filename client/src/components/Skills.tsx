import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  TrendingUp,
  Share2,
  Target,
  BarChart,
  Edit,
  Users,
  Megaphone,
  Zap,
} from 'lucide-react';

const skills = [
  { name: 'Social Media Marketing', icon: Share2 },
  { name: 'Digital Marketing', icon: TrendingUp },
  { name: 'Campaign Management', icon: Target },
  { name: 'Content Creation', icon: Edit },
  { name: 'Analytics & Reporting', icon: BarChart },
  { name: 'Community Management', icon: Users },
  { name: 'Paid Advertising', icon: Megaphone },
  { name: 'Brand Strategy', icon: Zap },
];

export default function Skills() {
  const { elementRef, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            Core Skills
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Expertise across social media platforms, campaign strategy, and performance optimization
          </p>
          <div
            ref={elementRef}
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="group relative overflow-hidden rounded-xl border-2 border-gray-200 bg-white p-6 text-center transition-all duration-300 hover:border-accent hover:shadow-xl hover:-translate-y-2 cursor-pointer"
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className="p-3 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                      {skill.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-primary mb-4">{t('skills.platforms')}</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Facebook', 'Instagram', 'Twitter', 'YouTube', 'Google Ads', 'LinkedIn'].map(
                (platform) => (
                  <Badge
                    key={platform}
                    variant="secondary"
                    className="text-base px-4 py-2 bg-primary text-white hover:bg-accent transition-colors"
                  >
                    {platform}
                  </Badge>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
