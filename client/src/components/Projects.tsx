import { Card } from '@/components/ui/card';
import { Target, Zap, TrendingUp } from 'lucide-react';

const projects = [
  {
    title: 'Enterprise Social Media Campaign',
    objective: 'Increase brand awareness and engagement for e& UAE telecommunications services',
    action:
      'Developed and executed multi-platform social media strategy across Facebook, Instagram, and Twitter with targeted content and paid advertising',
    result: '+40% engagement rate, +25% follower growth, improved brand sentiment across all channels',
    icon: Target,
  },
  {
    title: 'Contact Center Digital Presence',
    objective: 'Establish strong social media presence for Raya Contact Center',
    action:
      'Created comprehensive content calendar, community management protocols, and customer engagement strategies',
    result:
      'Successfully built engaged community, reduced response time by 50%, increased customer satisfaction scores',
    icon: Zap,
  },
  {
    title: 'Multi-Client Campaign Management',
    objective: 'Drive measurable results for diverse freelance clients across media industry',
    action:
      'Managed end-to-end social media marketing including strategy, content creation, analytics, and optimization across multiple platforms',
    result:
      'Consistent growth in reach and engagement, improved ROI for paid campaigns, long-term client retention',
    icon: TrendingUp,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
            Featured Projects
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Proven track record of delivering measurable results through strategic social media campaigns
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card
                  key={index}
                  className="p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
                >
                  <div className="mb-4">
                    <div className="inline-flex p-3 rounded-full bg-accent/10 mb-4">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-4">{project.title}</h3>
                  </div>
                  <div className="space-y-4 flex-1">
                    <div>
                      <h4 className="text-sm font-bold text-accent uppercase mb-1">Objective</h4>
                      <p className="text-sm text-foreground">{project.objective}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-accent uppercase mb-1">Action</h4>
                      <p className="text-sm text-foreground">{project.action}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-accent uppercase mb-1">Result</h4>
                      <p className="text-sm text-foreground font-medium">{project.result}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
