

import { Button } from '@/portfolio-sections/ui/button';
import { Coffee, BookOpen, Code } from 'lucide-react';

const Introduction = () => {
  return (
    <section id="about" className="py-20 bg-background relative scroll-mt-16">
      <div id="introduction" className="absolute -top-16"></div>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-gradient">About Me</h2>
        <div className="h-1 w-20 bg-primary mb-12"></div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-lg mb-6">
              Hello! I'm Keshav Aggarwal, a Computer Science student at <strong className="text-foreground">Thapar Institute of Engineering and Technology (TIET)</strong>, Patiala. I have a strong passion for full-stack web development, machine learning, and applied AI. My coding journey began with HTML and CSS, and has since expanded to building production-ready architectures, deploying CNN models, and exploring the power of data-driven digital experiences.
            </p>
            <p className="text-lg mb-6">
              When I'm not studying or coding, you'll find me exploring technical books, participating in hackathons, or working on innovative side projects that bridge the gap between technology and real-world problem solving.
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
                <span>Third-year Computer Science student (CGPA: 8.9)</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/20 p-1 rounded mr-3 text-primary"><Code size={18} /></span>
                <span>Full-Stack & Machine Learning Practitioner</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/20 p-1 rounded mr-3 text-primary"><Coffee size={18} /></span>
                <span>Hackathon Winner & Tech Enthusiast</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/20 p-1 rounded mr-3 text-primary"><BookOpen size={18} /></span>
                <span>Avid reader of tech & fiction books</span>
              </li>
              <li className="flex items-start">
                <span className="bg-primary/20 p-1 rounded mr-3 text-primary"><BookOpen size={18} /></span>
                <span>Hobbyist Writer</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
