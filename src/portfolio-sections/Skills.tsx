import { Progress } from "@/portfolio-sections/ui/progress";

const Skills = () => {
  const frontendSkills = [
    { name: "HTML / CSS", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "React.js", level: 70 },
    { name: "TypeScript", level: 60 },
    { name: "Next.js", level: 60 },
    { name: "Node.js / Express.js", level: 65 },
    { name: "PostgreSQL / PL/pgSQL", level: 65 },
  ];

  const mlSkills = [
    { name: "Python", level: 80 },
    { name: "Scikit-learn", level: 75 },
    { name: "Pandas / NumPy", level: 78 },
    { name: "CNN (EfficientNet-B2)", level: 65 },
    { name: "Random Forest / Gradient Boosting", level: 72 },
    { name: "Feature Engineering / SMOTE", level: 68 },
    { name: "Grad-CAM / Explainable AI", level: 60 },
  ];

  const devTools = [
    "Git & GitHub",
    "VS Code",
    "Vite",
    "npm",
    "Vercel",
    "Chrome DevTools",
    "ESLint",
    "Prettier",
    "Arduino IDE",
    "Figma",
  ];

  const techLibraries = [
    "Matplotlib",
    "Seaborn",
    "NumPy",
    "Pandas",
    "Scikit-Learn",
    "SOLIDWORKS",
    "Autodesk Tinkercad",
    "REST APIs",
    "PL/pgSQL",
  ];

  const softSkills = [
    "Prompt Engineering",
    "System Design",
    "Cross-functional Coordination",
    "Technical Presentations",
    "Stakeholder Communication",
    "Research Project Management",
    "Team Leadership",
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gradient">
          Skills & Technologies
        </h2>
        <div className="h-1 w-20 bg-primary mb-8 sm:mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
              Web & Backend Development
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {frontendSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm sm:text-base">{skill.name}</span>
                    <span className="text-primary text-sm sm:text-base">
                      {skill.level}%
                    </span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 mt-8 lg:mt-0">
              Data Science & Machine Learning
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {mlSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm sm:text-base">{skill.name}</span>
                    <span className="text-primary text-sm sm:text-base">
                      {skill.level}%
                    </span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
              Development Tools
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {devTools.map((tech) => (
                <span
                  key={tech}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary/50 rounded-full text-xs sm:text-sm border border-white/5 hover:border-primary/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-4 sm:mb-6">
              Technical Libraries & Engineering Tools
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {techLibraries.map((tech) => (
                <span
                  key={tech}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary/50 rounded-full text-xs sm:text-sm border border-white/5 hover:border-primary/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
              Professional Skills
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-accent/10 rounded-full text-xs sm:text-sm border border-accent/20 hover:border-accent/50 transition-colors text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
