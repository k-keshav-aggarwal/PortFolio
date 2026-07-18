
import { Button } from "@/portfolio-sections/ui/button";
import { ChevronDown, Code, Terminal, Coffee } from 'lucide-react';

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

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
            CS Student · Full-Stack Developer · ML Practitioner
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
              <GithubIcon size={24} />
            </a>
            <a href="https://linkedin.com/agg-keshav" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover-lift touch-target" aria-label="LinkedIn Profile">
              <LinkedinIcon size={24} />
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
