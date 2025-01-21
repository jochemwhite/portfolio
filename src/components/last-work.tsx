import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

const LastWork = () => {
  return (
    <section id="portfolio" className="container py-12">
      <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">Latest Work</h2>
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>E-Commerce Platform</CardTitle>
          <CardDescription>A modern e-commerce solution built with Next.js and Supabase</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-video rounded-lg overflow-hidden bg-muted mb-4">
            <img
              src="https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
              alt="Project Screenshot"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              A full-featured e-commerce platform with real-time inventory management,
              secure payments, and an intuitive admin dashboard.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge>Next.js</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Tailwind CSS</Badge>
              <Badge>Supabase</Badge>
              <Badge>Stripe</Badge>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex gap-4">
          <Button asChild>
            <a href="https://demo-project.com" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/username/project" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> View Code
            </a>
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default LastWork;