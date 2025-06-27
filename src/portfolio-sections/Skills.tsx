

import { Progress } from "@/portfolio-sections/ui/progress";

const Skills = () => {
  const frontendSkills = [
    { name: "HTML", level: 80 },
    { name: "CSS", level: 75 },
    { name: "JavaScript", level: 65 },
    { name: "React", level: 60 },
    { name: "Tailwind CSS", level: 70 },
  ];

  const otherSkills = [
    { name: "Git/GitHub", level: 60 },
    { name: "Responsive Design", level: 75 },
    { name: "UI/UX Basics", level: 65 },
    { name: "Problem Solving", level: 70 },
    { name: "TypeScript", level: 40 },
  ];

  const technologies = [
    "VSCode", "npm", "Webpack", "Figma", "Chrome DevTools", 
    "GitHub Pages", "Netlify", "Jest", "ESLint", "Prettier"
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gradient">Skills & Technologies</h2>
        <div className="h-1 w-20 bg-primary mb-8 sm:mb-12"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Front-end Development</h3>
            <div className="space-y-4 sm:space-y-6">
              {frontendSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm sm:text-base">{skill.name}</span>
                    <span className="text-primary text-sm sm:text-base">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 mt-8 lg:mt-0">Other Skills</h3>
            <div className="space-y-4 sm:space-y-6">
              {otherSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm sm:text-base">{skill.name}</span>
                    <span className="text-primary text-sm sm:text-base">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 sm:mt-16">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {technologies.map((tech) => (
              <span 
                key={tech} 
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary/50 rounded-full text-xs sm:text-sm border border-white/5 hover:border-primary/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
