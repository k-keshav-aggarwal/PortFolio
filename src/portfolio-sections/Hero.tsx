
import { Button } from "@/portfolio-sections/ui/button";
import { ChevronDown, Github, Linkedin, Code, Terminal, Coffee } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="hero-gradient min-h-screen flex items-center pt-16 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 text-4xl sm:text-6xl md:text-8xl text-primary">
          <Code />
        </div>
        <div className="absolute top-3/4 left-1/5 text-3xl sm:text-5xl md:text-7xl text-accent">
          {`{}`}
        </div>
        <div className="absolute top-1/3 right-1/4 text-3xl sm:text-4xl md:text-6xl text-primary/70">
          <Terminal />
        </div>
        <div className="absolute bottom-1/4 right-1/3 text-4xl sm:text-6xl md:text-8xl text-accent/70">
          <Coffee />
        </div>
        <div className="absolute bottom-1/3 left-2/3 text-2xl sm:text-3xl md:text-5xl text-primary/50">
          {"</>"} 
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center sm:text-left">
          <p className="text-primary font-medium animate-fade-in text-sm sm:text-base">Hello, my name is</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mt-4 sm:mt-6 animate-fade-in flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4" style={{ animationDelay: '0.1s' }}>
            <span className="text-gradient text-3xl sm:text-4xl md:text-5xl lg:text-7xl">Keshav Aggarwal</span>
            <span className="bg-primary/10 text-primary text-xs sm:text-sm py-1 px-2 rounded inline-block">dev</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold mt-3 sm:mt-4 text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
            First-Year Web Developer
          </h2>
          <div className="mt-4 sm:mt-6">
            <div className="font-mono text-xs sm:text-sm md:text-base text-muted-foreground bg-secondary/50 p-3 sm:p-4 rounded-md border border-accent/20 animate-fade-in overflow-x-auto" style={{ animationDelay: '0.3s' }}>
              <span className="text-accent">const</span> <span className="text-primary">passions</span> = [<span className="text-accent">'coding'</span>, <span className="text-accent">'coffee'</span>, <span className="text-accent">'books'</span>];
            </div>
          </div>
          
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in items-center sm:items-start" style={{ animationDelay: '0.4s' }}>
            <Button asChild className="bg-primary hover:bg-primary/80 text-primary-foreground hover-glow w-full sm:w-auto touch-target">
              <a href="#projects">View My Projects</a>
            </Button>
            <Button asChild variant="outline" className="border-primary text-foreground hover:text-primary hover-lift w-full sm:w-auto touch-target">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          
          <div className="mt-6 sm:mt-8 lg:mt-12 flex items-center justify-center sm:justify-start gap-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <a href="https://github.com/k-keshav-aggarwal" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover-lift touch-target" aria-label="GitHub Profile">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/agg-keshav" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover-lift touch-target" aria-label="LinkedIn Profile">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
