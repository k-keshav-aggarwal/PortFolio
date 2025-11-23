
import { Card, CardContent } from "@/portfolio-sections/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gradient">About Me</h2>
        <div className="h-1 w-20 bg-primary mb-8 sm:mb-12"></div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
          <div>
            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Hello! I'm Keshav Aggarwal, a passionate and dedicated Second year Computer Science student with an unwavering focus on modern web development and software engineering. My coding journey began during high school when I first discovered the magic of HTML and CSS, and since then, I've been completely captivated by the endless possibilities of technology and its power to create meaningful digital experiences.
            </p>
            
            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Currently, I'm studying at <span className="text-primary font-medium">Thapar Institute of Engineering and Technology</span> where 
              I'm building a strong foundation in computer science principles while pursuing my passion for creating 
              beautiful, functional websites and innovative digital solutions.
            </p>
            
            <p className="text-base sm:text-lg">
              When I'm not immersed in coding or academics, you can find me exploring cutting-edge design trends, participating in challenging hackathons, contributing to impactful open-source projects, and staying updated with the latest technological advancements. I'm constantly seeking opportunities to expand my knowledge, collaborate with like-minded developers, and create solutions that make a positive difference in people's lives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-8 lg:mt-0">
            <Card className="glass-card overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-bold mb-3 sm:mb-4 text-lg sm:text-xl text-primary">Education</h3>
                <p className="text-sm sm:text-base text-muted-foreground">B.Tech. Computer Science</p>
                <p className="text-sm sm:text-base">Thapar Institute of Engineering and Technology</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-2">2024 - Present</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-bold mb-3 sm:mb-4 text-lg sm:text-xl text-primary">Goals & Vision</h3>
                <ul className="list-disc ml-4 text-xs sm:text-sm space-y-1 sm:space-y-2">
                  <li>Master React, TypeScript & Node.js</li>
                  <li>Build scalable full-stack applications</li>
                  <li>Secure prestigious tech internships</li>
                  <li>Lead meaningful open-source projects</li>
                  <li>Develop AI-powered web solutions</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="glass-card overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-bold mb-3 sm:mb-4 text-lg sm:text-xl text-primary">Passions & Hobbies</h3>
                <ul className="list-disc ml-4 text-xs sm:text-sm space-y-1 sm:space-y-2">
                  <li>Competitive Programming</li>
                  <li>Advanced UI/UX Design</li>
                  <li>Technical Content Writing</li>
                  <li>Strategic Gaming & Esports</li>
                  <li>Photography & Digital Art</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="glass-card overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-bold mb-3 sm:mb-4 text-lg sm:text-xl text-primary">Tech Interests</h3>
                <ul className="list-disc ml-4 text-xs sm:text-sm space-y-1 sm:space-y-2">
                  <li>Web Accessibility & Inclusion</li>
                  <li>Modern JavaScript Frameworks</li>
                  <li>Responsive & Mobile-First Design</li>
                  <li>Performance & SEO Optimization</li>
                  <li>Cloud Computing & DevOps</li>
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
