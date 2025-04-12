
import React from 'react';
import { Rocket } from 'lucide-react';

const Startup = () => {
  return (
    <section id="startup" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-gradient">Startup Experience</h2>
        <div className="h-1 w-20 bg-primary mb-12"></div>
        
        <div className="glass-card p-8 rounded-lg max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="bg-primary/10 p-6 rounded-full">
              <Rocket size={64} className="text-primary" />
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-2">EcoSort AI</h3>
              <p className="text-primary mb-4">Founding Team and Frontend Developer Director</p>
              
              <p className="mb-4">
                As part of the founding team at EcoSortAI, I contribute to developing
                a web application that helps manage our online presence.
                My responsibilities include:
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Building responsive UI components using React and Tailwind CSS</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Collaborating with UX designers to implement user-friendly interfaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Participating in product strategy and feature planning meetings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Optimizing application performance and ensuring cross-browser compatibility</span>
                </li>
              </ul>
              
              <p className="text-muted-foreground">
                This startup experience has provided valuable insights into product development,
                team collaboration, and agile methodologies while applying my technical skills in a real-world setting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Startup;
