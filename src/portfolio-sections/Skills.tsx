import { Progress } from "@/portfolio-sections/ui/progress";

const Skills = () => {
  const frontendSkills = [
    { name: "React.js / Next.js", level: 82 },
    { name: "Node.js / Express.js", level: 78 },
    { name: "PostgreSQL / PL/pgSQL", level: 80 },
    { name: "REST APIs", level: 85 },
    { name: "JavaScript / TypeScript", level: 85 },
    { name: "HTML5 / CSS3", level: 90 },
    { name: "Vite", level: 82 },
  ];

  const mlSkills = [
    { name: "Python", level: 90 },
    { name: "Agentic AI & RAG Systems", level: 84 },
    { name: "Scikit-learn", level: 82 },
    { name: "Pandas / NumPy", level: 85 },
    { name: "CNN (EfficientNet-B2)", level: 75 },
    { name: "Random Forest / Gradient Boosting", level: 80 },
    { name: "Grad-CAM (Explainable AI)", level: 74 },
    { name: "SMOTE / Feature Engineering", level: 78 },
  ];

  const devTools = [
    "Git",
    "GitHub",
    "Vercel",
    "VS Code",
    "Vite",
    "Arduino IDE",
    "SOLIDWORKS",
    "Autodesk Tinkercad",
    "Prompt Engineering",
    "Chrome DevTools",
    "ESLint",
    "Prettier",
  ];

  const techLibraries = [
    "Agentic AI",
    "RAG Systems",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "REST APIs",
    "PostgreSQL",
    "PL/pgSQL",
    "Grad-CAM",
    "SMOTE",
  ];

  const softSkills = [
    "System Design",
    "Technical Presentations",
    "Cross-functional Coordination",
    "Stakeholder Communication",
    "Research & Team Leadership",
    "Prompt Engineering",
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
