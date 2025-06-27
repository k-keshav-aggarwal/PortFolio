

import { Briefcase } from 'lucide-react';

const WorkExperience = () => {
  const experiences = [
    {
      title: "Content Intern",
      company: "StudifySuccess",
      period: "December 2024 - January 2025",
      description: "Drafting Blog Posts & Articles: Researching topics, creating outlines, writing engaging content."
    },
    {
      title: "Executive Member",
      company: "Microsoft Student Learn Chapter, TIET",
      period: "Sep 2024 - Present",
      description: "."
    },
    {
      title: "Freelance Web Developer",
      company: "Self-employed",
      period: "April 2025 - Present",
      description: "Design and develop websites for small businesses and individuals. Create custom solutions tailored to client needs. Implement responsive designs and ensure cross-browser compatibility."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-gradient">Work Experience</h2>
        <div className="h-1 w-20 bg-primary mb-12"></div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-white/10 pl-8 ml-4">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-12 relative">
                <div className="absolute -left-12 mt-1.5">
                  <div className="bg-primary/20 p-2 rounded-full border border-primary">
                    <Briefcase size={18} className="text-primary" />
                  </div>
                </div>
                <div className="glass-card p-6 rounded-lg">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
