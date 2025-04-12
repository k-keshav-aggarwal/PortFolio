
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-gradient">About Me</h2>
        <div className="h-1 w-20 bg-primary mb-12"></div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6">
              Hello! I'm Keshav Aggarwal, a passionate first-year computer science student with a focus on web development.
              My journey into coding began during high school where I first discovered HTML and CSS, 
              and I've been hooked ever since.
            </p>
            
            <p className="text-lg mb-6">
              Currently, I'm studying at <span className="text-primary font-medium">Thapar Institute of Enginnering and Technology</span> where 
              I'm building a strong foundation in computer science principles while pursuing my passion for creating 
              beautiful, functional websites.
            </p>
            
            <p className="text-lg">
              When I'm not coding or studying, you can find me exploring new design trends, participating in hackathons,
              or contributing to open-source projects. I'm always looking for opportunities to learn and grow as a developer.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="glass-card overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <h3 className="font-bold mb-4 text-xl text-primary">Education</h3>
                <p className="text-muted-foreground">B.Tech. Computer Science</p>
                <p>Thapar Institute of Enginnering and Technology</p>
                <p className="text-sm text-muted-foreground mt-2">2024 - Present</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <h3 className="font-bold mb-4 text-xl text-primary">Goals</h3>
                <ul className="list-disc ml-4 text-sm space-y-2">
                  <li>Master React & TypeScript</li>
                  <li>Build a full-stack app</li>
                  <li>Land an internship</li>
                  <li>Contribute to open source</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="glass-card overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <h3 className="font-bold mb-4 text-xl text-primary">Hobbies</h3>
                <ul className="list-disc ml-4 text-sm space-y-2">
                  <li>Competitive Coding</li>
                  <li>UI/UX Design</li>
                  <li>Tech Blogging</li>
                  <li>Gaming</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="glass-card overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <h3 className="font-bold mb-4 text-xl text-primary">Interests</h3>
                <ul className="list-disc ml-4 text-sm space-y-2">
                  <li>Web Accessibility</li>
                  <li>Modern JS Frameworks</li>
                  <li>Responsive Design</li>
                  <li>Performance Optimization</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
