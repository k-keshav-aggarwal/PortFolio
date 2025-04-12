
import React from 'react';
import { Quote, User } from 'lucide-react';

const References = () => {
  const references = [
    {
      name: "Dr. Chinmaya Panigrahy",
      title: "Computer Science Assistant Professor, Thapar Institute of Engineering and Technology",
      quote: "A dedicated student with exceptional problem-solving skills and a keen interest in web development. Shows great promise in the field of computer science.",
      specialization: "Image Processing and Fractal Dimension",
      contact: "Available upon request"
    },
  ];

  return (
    <section id="references" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-gradient">References</h2>
        <div className="h-1 w-20 bg-primary mb-12"></div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {references.map((ref, index) => (
            <div key={index} className="glass-card p-6 rounded-lg">
              <Quote className="text-primary mb-4 opacity-60" size={32} />
              
              <p className="italic mb-6">"{ref.quote}"</p>

              
              <div className="flex items-center gap-3 mt-auto">
                <div className="bg-primary/20 p-2 rounded-full">
                  <User size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{ref.name}</h3>
                  <p className="text-sm text-muted-foreground">{ref.title}</p>
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4">{ref.contact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
