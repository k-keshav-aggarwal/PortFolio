import { ExternalLink, FolderOpen, Brain, Zap, Database, Wind, GraduationCap, Layout, Gamepad2, Leaf, Sparkles } from 'lucide-react';
import { Button } from '@/portfolio-sections/ui/button';

const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const Projects = () => {
  const projects = [
    {
      title: "Malaria Detection — CNN with Explainable AI",
      description: "Trained an image classification model on the NIH dataset (27,558 images) achieving ~97% validation accuracy and AUC ≈ 0.99. Compared EfficientNet-B2 against MobileNetV2 and EfficientNet-B0 and selected the best model based on accuracy vs. inference speed. Integrated Grad-CAM for visual explainability of model predictions.",
      technologies: ["Python", "EfficientNet-B2", "Grad-CAM", "TensorFlow/Keras", "NIH Dataset"],
      github: "https://github.com/k-keshav-aggarwal",
      liveDemo: "",
      icon: Brain,
      themeColor: "from-rose-500/20 via-pink-500/10 to-indigo-500/20",
      accentColor: "text-rose-400",
      badge: ""
    },
    {
      title: "Decentralised Energy Trading Platform",
      description: "Built a peer-to-peer energy marketplace from scratch in 24 hours as architect and team lead for a 3-person group; handled system design, task split, and final presentation to IEEE/TIET judges. Awarded 1st Place at BIOS Hackathon v1.0.",
      technologies: ["React", "Next.js", "System Design", "P2P Architecture"],
      github: "https://github.com/k-keshav-aggarwal",
      liveDemo: "",
      icon: Zap,
      themeColor: "from-amber-500/20 via-yellow-500/10 to-orange-500/20",
      accentColor: "text-amber-400",
      badge: "🏆 1st Place — BIOS Hackathon v1.0"
    },
    {
      title: "Thapar OLX — Campus Marketplace",
      description: "Built a campus buy/sell platform with user accounts, listings, cart, messaging, and admin controls backed by a fully normalised (3NF) PostgreSQL database with referential constraints and PL/pgSQL triggers for automated integrity enforcement.",
      technologies: ["PostgreSQL", "PL/pgSQL", "Node.js", "Express.js", "REST APIs"],
      github: "https://github.com/k-keshav-aggarwal",
      liveDemo: "",
      icon: Database,
      themeColor: "from-blue-500/20 via-indigo-500/10 to-cyan-500/20",
      accentColor: "text-blue-400",
      badge: ""
    },
    {
      title: "Air Quality Index Prediction Engine",
      description: "An end-to-end supervised AQI prediction model using pollutant indicators PM2.5, PM10, NO₂, SO₂, CO, and O₃. Achieved R² = 0.91 across 5-fold cross-validation, outperforming a linear regression baseline. Includes feature importance charts and a real-time prediction interface.",
      technologies: ["Python", "Random Forest", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
      github: "https://github.com/k-keshav-aggarwal",
      liveDemo: "",
      icon: Wind,
      themeColor: "from-teal-500/20 via-emerald-500/10 to-cyan-500/20",
      accentColor: "text-teal-400",
      badge: ""
    },
    {
      title: "Student Performance Classification",
      description: "A full ML pipeline predicting student performance using academic and behavioural features. Compared 4 classifiers (Logistic Regression, SVM, Random Forest, Gradient Boosting), resolved class imbalance with SMOTE, tuned the best model with GridSearchCV, and built an interactive prediction dashboard using ipywidgets.",
      technologies: ["Python", "Gradient Boosting", "SMOTE", "GridSearchCV", "Scikit-learn"],
      github: "https://github.com/k-keshav-aggarwal",
      liveDemo: "",
      icon: GraduationCap,
      themeColor: "from-purple-500/20 via-fuchsia-500/10 to-violet-500/20",
      accentColor: "text-purple-400",
      badge: ""
    },
    {
      title: "Personal Portfolio",
      description: "A responsive portfolio website built with React and Tailwind CSS to showcase projects, skills, and experience. Features dark mode, glassmorphism design, and smooth animations.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      github: "https://github.com/k-keshav-aggarwal/PortFolio",
      liveDemo: "https://ka-pf.vercel.app/",
      icon: Layout,
      themeColor: "from-cyan-500/20 via-sky-500/10 to-blue-500/20",
      accentColor: "text-cyan-400",
      badge: "✨ Live"
    },
    {
      title: "SpieleZone",
      description: "A full UI overhaul for Spiele Zone, including redesigned layouts, color schemes, typography, responsive behaviour, and interactive components. Delivered a polished, immersive experience aligned with the gaming aesthetic while maintaining performance and accessibility.",
      technologies: ["Front-End Development", "Web Development", "UI/UX"],
      github: "https://github.com/k-keshav-aggarwal/SpieleZone",
      liveDemo: "https://spiele-zone.vercel.app",
      icon: Gamepad2,
      themeColor: "from-violet-500/20 via-purple-500/10 to-pink-500/20",
      accentColor: "text-violet-400",
      badge: "✨ Live"
    },
    {
      title: "EcoSortAI",
      description: "An AI-powered waste sorting application that helps users categorize different types of waste for proper disposal and recycling.",
      technologies: ["JavaScript", "API Integration", "CSS"],
      github: "https://github.com/k-keshav-aggarwal/EcoSortAI",
      liveDemo: "https://eco-sort-ai.vercel.app/",
      icon: Leaf,
      themeColor: "from-emerald-500/20 via-green-500/10 to-teal-500/20",
      accentColor: "text-emerald-400",
      badge: "✨ Live"
    },
    {
      title: "Education Website Template",
      description: "A responsive educational website template with modern design, course sections, and interactive features for academic institutions.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/k-keshav-aggarwal/Educational-Website-Template",
      liveDemo: "",
      icon: Sparkles,
      themeColor: "from-sky-500/20 via-blue-500/10 to-indigo-500/20",
      accentColor: "text-sky-400",
      badge: ""
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gradient">Projects</h2>
        <div className="h-1 w-20 bg-primary mb-8 sm:mb-12"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-card rounded-lg overflow-hidden flex flex-col h-full hover:transform hover:scale-[1.02] transition-all duration-300">
              <div className={`h-40 sm:h-44 bg-gradient-to-br ${project.themeColor} border-b border-white/5 relative overflow-hidden flex items-center justify-center group`}>
                <div className={`p-4 rounded-2xl bg-background/60 backdrop-blur-md border border-white/10 ${project.accentColor} transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <project.icon size={36} />
                </div>
                {project.badge && (
                  <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-full shadow-md">
                    {project.badge}
                  </div>
                )}
              </div>
              
              <div className="p-4 sm:p-6 flex-grow">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold leading-tight pr-2">{project.title}</h3>
                  <FolderOpen className="text-primary flex-shrink-0 ml-2" size={20} />
                </div>
                
                <p className="text-sm sm:text-base text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-4 sm:p-6 pt-0 flex gap-2 sm:gap-4">
                <Button asChild variant="ghost" size="sm" className="flex-1 text-xs sm:text-sm hover:bg-primary/10" disabled={!project.github}>
                  <a href={project.github || '#'} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1 sm:gap-2">
                    <GithubIcon size={14} />
                    <span>Code</span>
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm" className="flex-1 text-xs sm:text-sm hover:bg-accent/10" disabled={!project.liveDemo}>
                  <a href={project.liveDemo || '#'} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1 sm:gap-2">
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
