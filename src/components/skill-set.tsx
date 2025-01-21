import { Card, CardContent } from '@/components/ui/card';
import { CodeXml as Html5, Rss as Css3, FileJson2, Database, Github as Git, Globe, Server, Layout, Terminal, Cloud } from 'lucide-react';

const skills = [
  { name: 'HTML5', icon: Html5, category: 'Frontend' },
  { name: 'CSS3', icon: Css3, category: 'Frontend' },
  { name: 'TypeScript', icon: FileJson2, category: 'Frontend' },
  { name: 'React', icon: Layout, category: 'Frontend' },
  { name: 'Node.js', icon: Server, category: 'Backend' },
  { name: 'PostgreSQL', icon: Database, category: 'Backend' },
  { name: 'REST APIs', icon: Globe, category: 'Backend' },
  { name: 'Git', icon: Git, category: 'Tools' },
  { name: 'Docker', icon: Terminal, category: 'DevOps' },
  { name: 'AWS', icon: Cloud, category: 'DevOps' },
];

const SkillSet = () => {
  return (
    <section className="container py-12">
      <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">Skill Set</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {skills.map((skill) => (
          <Card key={skill.name} className="group hover:border-primary transition-colors">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-2">
              <skill.icon className="h-8 w-8 group-hover:text-primary transition-colors" />
              <h3 className="font-medium">{skill.name}</h3>
              <p className="text-sm text-muted-foreground">{skill.category}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SkillSet;