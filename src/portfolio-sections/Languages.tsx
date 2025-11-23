

import { Globe, Code } from 'lucide-react';
import { Progress } from "@/portfolio-sections/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/portfolio-sections/ui/tabs";

const Languages = () => {
  const humanLanguages = [
    {
      name: "English",
      proficiency: "Fluent",
      level: 88
    },
    {
      name: "Hindi",
      proficiency: "Native",
      level: 100
    }
  ];

  const programmingLanguages = [
    {
      name: "JavaScript",
      proficiency: "Advanced",
      level: 85
    },
    {
      name: "TypeScript",
      proficiency: "Intermediate",
      level: 70
    },
    {
      name: "Python",
      proficiency: "Intermediate",
      level: 75
    },
    {
      name: "Java",
      proficiency: "Beginner",
      level: 45
    },
    {
      name: "C++",
      proficiency: "Beginner",
      level: 50
    },
    {
      name: "HTML",
      proficiency: "Advanced",
      level: 90
    },
    {
      name: "CSS",
      proficiency: "Advanced",
      level: 85
    },
    {
      name: "React",
      proficiency: "Intermediate",
      level: 75
    },
    {
      name: "C",
      proficiency: "Beginner",
      level: 50
    }
  ];

  return (
    <section id="languages" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-gradient">Languages</h2>
        <div className="h-1 w-20 bg-primary mb-12"></div>
        
        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="programming" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-10">
              <TabsTrigger value="programming" className="flex items-center gap-2">
                <Code size={16} />
                Programming Languages
              </TabsTrigger>
              <TabsTrigger value="human" className="flex items-center gap-2">
                <Globe size={16} />
                Human Languages
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="programming" className="space-y-8">
              {programmingLanguages.map((lang, index) => (
                <div key={index} className="glass-card p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">{lang.name}</h3>
                    <span className="text-sm bg-accent/20 text-accent px-3 py-1 rounded-full">
                      {lang.proficiency}
                    </span>
                  </div>
                  <Progress value={lang.level} className="h-2" />
                </div>
              ))}
            </TabsContent>

            <TabsContent value="human" className="space-y-8">
              {humanLanguages.map((lang, index) => (
                <div key={index} className="glass-card p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold">{lang.name}</h3>
                    <span className="text-sm bg-primary/20 text-primary px-3 py-1 rounded-full">
                      {lang.proficiency}
                    </span>
                  </div>
                  <Progress value={lang.level} className="h-2" />
                </div>
              ))}
            </TabsContent>
            
          </Tabs>
        </div>
      </div>
      
    </section>
  );
};

export default Languages;
