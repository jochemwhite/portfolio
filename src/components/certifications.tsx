import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award } from 'lucide-react';

const certifications = [
  {
    name: 'AWS Certified Solutions Architect',
    authority: 'Amazon Web Services',
    date: 'December 2023',
    description: 'Professional certification for designing distributed systems on AWS',
  },
  {
    name: 'Meta Frontend Developer',
    authority: 'Meta',
    date: 'October 2023',
    description: 'Advanced certification in modern frontend development practices',
  },
  {
    name: 'Google Cloud Professional Developer',
    authority: 'Google',
    date: 'August 2023',
    description: 'Expert-level cloud development certification',
  },
];

const Certifications = () => {
  return (
    <section className="container py-12">
      <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">Certifications</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <Card key={cert.name} className="group hover:border-primary transition-colors">
            <CardHeader>
              <Award className="h-8 w-8 mb-2 group-hover:text-primary transition-colors" />
              <CardTitle className="text-xl">{cert.name}</CardTitle>
              <CardDescription>{cert.authority}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{cert.description}</p>
              <p className="text-sm font-medium">{cert.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Certifications;