
import React from 'react';
import { Coffee, BookOpen, Code } from 'lucide-react';

const Objective = () => {
  return (
    <section id="objective" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-gradient">Portfolio Objective</h2>
        <div className="h-1 w-20 bg-primary mb-12"></div>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl mb-8">
            This portfolio serves as a comprehensive showcase of my skills, experiences, and 
            projects as I navigate my journey through computer science education and web development,
            fueled by great coffee and inspired by books.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="glass-card p-6 rounded-lg">
              <div className="bg-primary/20 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-primary" size={28} />
              </div>
              <h3 className="text-lg font-medium mb-3">Code</h3>
              <p className="text-muted-foreground">
                Showcase coding skills and development projects through real-world applications.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <div className="bg-primary/20 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="text-primary" size={28} />
              </div>
              <h3 className="text-lg font-medium mb-3">Coffee</h3>
              <p className="text-muted-foreground">
                Highlight how coffee culture inspires productivity and creativity in my development work.
              </p>
            </div>
            
            <div className="glass-card p-6 rounded-lg">
              <div className="bg-primary/20 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-primary" size={28} />
              </div>
              <h3 className="text-lg font-medium mb-3">Books</h3>
              <p className="text-muted-foreground">
                Connect technical knowledge with insights gained from reading diverse literature.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objective;
