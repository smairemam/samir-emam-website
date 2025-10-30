import { Card } from '@/components/ui/card';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Social Media Marketing Specialist',
    company: 'e& UAE',
    location: 'United Arab Emirates',
    period: 'February 2020 - Present (5 years 9 months)',
    description:
      'Leading social media strategy and campaign execution for one of the largest telecommunications companies in the UAE.',
  },
  {
    role: 'Social Media Specialist',
    company: 'Raya Contact Center',
    location: 'Dubai',
    period: 'February 2017 - July 2024 (7 years 6 months)',
    description:
      'Managed social media presence and engagement strategies for enterprise contact center operations.',
  },
  {
    role: 'Freelance Social Media Marketing',
    company: 'Self-Employed',
    location: 'Egypt',
    period: 'January 2012 - Present (13 years 10 months)',
    description:
      'Provided social media marketing services across multiple platforms including Facebook, Instagram, Twitter, YouTube, and Google Ads for diverse clients in the media industry.',
  },
  {
    role: 'Social Media Director',
    company: 'Al Fahd Montrial',
    location: 'Misr al-Gadida, Cairo Governorate, Egypt',
    period: 'February 2015 - January 2018 (3 years)',
    description: 'Directed social media strategy and content creation for brand awareness campaigns.',
  },
  {
    role: 'Social Media Director',
    company: 'Mazazikh TV Chanel',
    location: 'Misr al-Gadida, Cairo Governorate, Egypt',
    period: 'February 2015 - January 2018 (3 years)',
    description: 'Led social media initiatives for television channel brand development.',
  },
  {
    role: 'Social Media Marketing Manager',
    company: 'Your Way Digital Marketing',
    location: 'North Coast, Alexandria Governorate, Egypt',
    period: 'January 2014 - February 2015 (1 year 2 months)',
    description: 'Managed digital marketing campaigns and social media strategies for agency clients.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Experience
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            13+ years of proven expertise across enterprise, agency, and freelance roles
          </p>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 bg-white text-foreground shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-l-accent"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <Briefcase className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                        <p className="text-lg text-foreground font-medium">{exp.company}</p>
                        {exp.location && (
                          <p className="text-sm text-muted-foreground">{exp.location}</p>
                        )}
                      </div>
                    </div>
                    <p className="text-foreground mt-3">{exp.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground md:text-right flex-shrink-0">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
