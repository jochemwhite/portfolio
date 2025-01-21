import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import WordRotate from "./ui/word-rotate";

const Hero = () => {
  return (
    <section className="container py-20 md:py-32">
      <div className="flex flex-col items-center text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Hi, I'm Jochem</h1>
          <div className="text-xl md:text-2xl text-muted-foreground flex  items-center space-x-1.5">
            <p className="">Ik ben een </p> <WordRotate className="" words={["Fullstack Developer", "web ontwikkelaar", "software enegier"]} />
          </div>
        </div>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Mijn naam is Jochem van der Wit, en ik help lokale bedrijven en ondernemers bij het bouwen van moderne websites en webapplicaties die écht
          impact maken. Of je nu een nieuwe website nodig hebt, je huidige platform wilt verbeteren, of een specifiek idee wilt realiseren, ik sta
          voor je klaar.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild>
            <a href="#contact">
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#portfolio">View My Work</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
