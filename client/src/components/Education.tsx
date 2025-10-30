import { Card } from '@/components/ui/card';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: "Bachelor's degree, Psychology",
    institution: 'Faculty of Arts at The University of Tanta',
    year: '2012',
    type: 'degree',
  },
];

const certifications = [
  {
    name: 'Social Media Marketing',
    institution: 'Udemy Academy',
    type: 'certification',
  },
  {
    name: 'Social Media Marketing',
    institution: 'eMarketing Institute',
    type: 'certification',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-card">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Education & Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-accent mb-6 flex items-center gap-2">
                <GraduationCap className="h-6 w-6" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <h4 className="text-lg font-bold text-primary mb-2">{edu.degree}</h4>
                    <p className="text-foreground font-medium">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mt-1">{edu.year}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-accent mb-6 flex items-center gap-2">
                <Award className="h-6 w-6" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card
                    key={index}
                    className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <h4 className="text-lg font-bold text-primary mb-2">{cert.name}</h4>
                    <p className="text-foreground font-medium">{cert.institution}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
