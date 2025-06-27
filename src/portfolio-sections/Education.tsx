

import { GraduationCap } from 'lucide-react';

const Education = () => {
  const educationItems = [
    {
      degree: "Bachelor of Technology in Computer Enginnering",
      institution: "Thapar Institute of Engineering and Technology",
      period: "2024 - Present",
      description: "First-year student focusing on computer science fundamentals, data structures, and web development technologies. Active member of the coding club and web development society."
    },
    {
      degree: "Senior Secondary",
      institution: "Rahul Public School",
      period: "2022 - 2024",
      description: "Secured 94.7% Percentile in JEE Mains. Participated in Various Extra Curricular Activities."
    },
    {
      degree: "Matriculation",
      institution: "OP Jindal Modern School",
      period: "2009 - 2022",
      description: "Secured 89.2% in CBSE Class 10. Participated in various extracurricular activities, including science fairs and coding competitions."
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-gradient">Education</h2>
        <div className="h-1 w-20 bg-primary mb-12"></div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-white/10 pl-8 ml-4">
            {educationItems.map((item, index) => (
              <div key={index} className="mb-12 relative">
                <div className="absolute -left-12 mt-1.5">
                  <div className="bg-primary/20 p-2 rounded-full border border-primary">
                    <GraduationCap size={18} className="text-primary" />
                  </div>
                </div>
                <div className="glass-card p-6 rounded-lg">
                  <h3 className="text-xl font-semibold">{item.degree}</h3>
                  <p className="text-primary font-medium">{item.institution}</p>
                  <p className="text-sm text-muted-foreground mb-4">{item.period}</p>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
