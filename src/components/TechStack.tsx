
import React from 'react';
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
      name: "Backend",
      technologies: [
        { name: "Node.js", level: "Beginner" },
        { name: "Express", level: "Beginner" },
        { name: "MongoDB", level: "Beginner" },
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
    }
  ];

  return (
    <section id="tech-stack" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-gradient">Tech Stack</h2>
        <div className="h-1 w-20 bg-primary mb-12"></div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div key={index} className="glass-card p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <Layers className="text-primary" size={24} />
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
              
              <ul className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <li key={techIndex} className="flex justify-between items-center">
                    <span>{tech.name}</span>
                    <span className={`text-xs px-2 py-1 rounded ${
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
