

import { Coffee, BookOpen, Code, Headphones, Camera, Map, Terminal, Laptop, Github, Waves } from 'lucide-react';

const Hobbies = () => {
  const hobbies = [
    {
      name: "Reading",
      icon: BookOpen,
      description: "Diving into fiction, technical books, and memoirs - particularly enjoy science fiction and books about software development philosophy."
    },
    {
      name: "Coding Projects",
      icon: Code,
      description: "Working on personal coding projects, contributing to open-source and exploring new programming languages and frameworks."
    },
    {
      name: "Terminal Customization",
      icon: Terminal,
      description: "Customizing my development environment with themes, plugins and productivity shortcuts for maximum efficiency."
    },
    {
      name: "GitHub Contributions",
      icon: Github,
      description: "Making regular contributions to open-source projects and building my digital garden of code and documentation."
    },
    {
      name: "Tech Workstation Setup",
      icon: Laptop,
      description: "Creating the perfect ergonomic workspace with the right equipment for productive and comfortable coding sessions."
    },
    {
      name: "Music",
      icon: Headphones,
      description: "Listening to a wide range of genres, while coding or relaxing."
    },
    {
      name: "Swimming",
      icon: Waves,
      description: "Enjoying the tranquility of water, whether it's in a pool or the ocean and practicing different swimming techniques."
    },
    {
      name: "Travel",
      icon: Map,
      description: "Exploring new cultures and places, with a particular interest in tech hubs around the world."
    },
    {
      name: "Cooking",
      icon: Coffee,
      description: "Experimenting with new recipes and cuisines and enjoying the process of cooking as a form of relaxation."
    }
  ];

  return (
    <section id="hobbies" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-gradient">Hobbies & Interests</h2>
        <div className="h-1 w-20 bg-primary mb-12"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-lg hover:border-primary/30 transition-all duration-300 hover-lift hover-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                  <hobby.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{hobby.name}</h3>
                <p className="text-muted-foreground">{hobby.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
