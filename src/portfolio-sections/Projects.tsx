
import { ExternalLink, Github, FolderOpen } from 'lucide-react';
import { Button } from '@/portfolio-sections/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      description: "A responsive portfolio website built with React and Tailwind CSS to showcase my projects and skills.",
      technologies: ["React", "Tailwind CSS", "Responsive Design"],
      github: "https://github.com/k-keshav-aggarwal/portfolio",
      liveDemo: "https://keshavpf.vercel.app/",
      image: "/placeholder.svg"
    },
    {
      title: "EcoSortAI",
      description: ".",
      technologies: ["JavaScript", "API Integration", "CSS"],
      github: "https://github.com/k-keshav-aggarwal/ecosortai",
      liveDemo: "https://weather-app.example.com",
      image: "/placeholder.svg"
    },
    {
      title: "Education Website Template",
      description: "A full-stack task management application with user authentication, task creation, and organization features.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/k-keshav-aggarwal/Educational-Website-Template",
      liveDemo: "https://task-manager.example.com",
      image: "/placeholder.svg"
    },
    {
      title: "Tic-Tac-Toe Game",
      description: "A responsive e-commerce website with product catalog, shopping cart, and checkout functionality.",
      technologies: ["React", "CSS", "State Management"],
      github: "https://github.com/k-keshav-aggarwal/TIC-TAC-TOE",
      liveDemo: "https://ecommerce.example.com",
      image: "/placeholder.svg"
    },
    {
      title: "StopWatch",
      description: "An interactive quiz application with multiple categories, timer, and score tracking.",
      technologies: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/k-keshav-aggarwal/StopWatch",
      liveDemo: "https://quiz-app.example.com",
      image: "/placeholder.svg"
    },
    {
      title: "MLSC Tech Fest-2025 Sponsors Page",
      description: "A blog platform wit2me/blog-platform",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/k-keshav-aggarwal/makeathon7-website",
      liveDemo: "https://blog-platform.example.com",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gradient">Projects</h2>
        <div className="h-1 w-20 bg-primary mb-8 sm:mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-card rounded-lg overflow-hidden flex flex-col h-full">
              <div className="h-48 bg-secondary/50 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
              
              <div className="p-4 sm:p-6 flex-grow">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold">{project.title}</h3>
                  <FolderOpen className="text-primary flex-shrink-0 ml-2" size={20} />
                </div>
                
                <p className="text-sm sm:text-base text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-4 sm:p-6 pt-0 flex gap-2 sm:gap-4">
                <Button asChild variant="ghost" size="sm" className="flex-1 text-xs sm:text-sm">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1 sm:gap-2">
                    <Github size={14} />
                    <span>Code</span>
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm" className="flex-1 text-xs sm:text-sm">
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1 sm:gap-2">
                    <ExternalLink size={14} />
                    <span>Demo</span>
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
