import Hero from '@/components/hero';
import LastWork from '@/components/last-work';
import SkillSet from '@/components/skill-set';
import Certifications from '@/components/certifications';

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <LastWork />
      <SkillSet />
      <Certifications />
    </div>
  );
}