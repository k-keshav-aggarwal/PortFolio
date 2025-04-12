
import React from 'react';
import { Button } from '@/components/ui/button';
import { Coffee, BookOpen, Code } from 'lucide-react';

const Introduction = () => {
  return (
    <section id="introduction" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-gradient">Introduction</h2>
        <div className="h-1 w-20 bg-primary mb-12"></div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-lg mb-6">
              Hello! I'm a first-year college student majoring in Computer Science with a passion for web development, 
              great coffee, and thought-provoking books. My coding journey began with HTML and CSS, and has since 
              expanded to include JavaScript, React, and various modern web technologies.
            </p>
            <p className="text-lg mb-6">
              When I'm not studying or coding, you'll find me exploring local coffee shops with a technical book in hand, 
              or working on side projects that combine my love for technology and creativity.
            </p>
            <Button asChild variant="outline" className="mt-4">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          
          <div className="glass-card p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="bg-primary/20 p-1 rounded mr-3 text-primary"><Code size={18} /></span>
                <span>First-year Computer Science student</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/20 p-1 rounded mr-3 text-primary"><Code size={18} /></span>
                <span>Self-taught web developer</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/20 p-1 rounded mr-3 text-primary"><Coffee size={18} /></span>
                <span>Coffee enthusiast</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/20 p-1 rounded mr-3 text-primary"><BookOpen size={18} /></span>
                <span>Avid reader of tech & fiction books</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/20 p-1 rounded mr-3 text-primary"><BookOpen size={18} /></span>
                <span>Hobbie Writer</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
