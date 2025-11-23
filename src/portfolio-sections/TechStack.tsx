

import { Layers } from 'lucide-react';

const TechStack = () => {
  const techCategories = [
    {
      name: "Frontend",
      technologies: [
        { name: "HTML5", level: "Advanced" },
        { name: "CSS3", level: "Advanced" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "React", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Advanced" },
      ]
    },
        {
      name: "Softwares",
      technologies: [
        { name: "AutoCad" , level: "Intermediate"},
        { name: "Solidworks" , level: "Intermediate"},
      ]
    },
    {
      name: "Tools & Others",
      technologies: [
        { name: "Git/GitHub", level: "Intermediate" },
        { name: "VS Code", level: "Advanced" },
        { name: "npm", level: "Intermediate" },
        { name: "Figma", level: "Intermediate" },
        { name: "Responsive Design", level: "Advanced" },
      ]
    },
    {
      name: "Backend",
      technologies: [
        { name: "Node.js", level: "Beginner" },
        { name: "Express", level: "Beginner" },
        { name: "MongoDB", level: "Beginner" },
      ]
    },
  ];

  return (
    <section id="tech-stack" className="py-16 sm:py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gradient">Tech Stack</h2>
        <div className="h-1 w-20 bg-primary mb-8 sm:mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {techCategories.map((category, index) => (
            <div key={index} className="glass-card p-4 sm:p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <Layers className="text-primary flex-shrink-0" size={24} />
                <h3 className="text-lg sm:text-xl font-semibold">{category.name}</h3>
              </div>
              
              <ul className="space-y-3 sm:space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <li key={techIndex} className="flex justify-between items-center gap-2">
                    <span className="text-sm sm:text-base truncate">{tech.name}</span>
                    <span className={`text-xs px-2 py-1 rounded flex-shrink-0 ${
                      tech.level === "Advanced" ? "bg-primary/20 text-primary" :
                      tech.level === "Intermediate" ? "bg-accent/20 text-accent" :
                      "bg-white/10 text-muted-foreground"
                    }`}>
                      {tech.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
