


import { GraduationCap } from 'lucide-react';

const Education = () => {
  const educationItems = [
    {
      degree: "Bachelor of Technology — Computer Science Engineering",
      institution: "Thapar Institute of Engineering and Technology",
      period: "August 2024 – May 2028",
      location: "Patiala, Punjab, India",
      bullets: [
        "Year III student · CGPA: 8.9 / 10.0",
        "Achieved an AGPA of 9.26 / 10.00 during the second year.",
        "Coursework: Data Structures & Algorithms, Machine Learning, DBMS, Operating Systems, Computer Networks"
      ]
    },
    {
      degree: "Senior Secondary (Science — PCM)",
      institution: "Rahul Public School",
      period: "July 2022 – July 2024",
      location: "Hisar, Haryana, India",
      bullets: [
        "Secured 94.7 percentile in JEE Mains.",
        "Participated in various extracurricular activities."
      ]
    },
    {
      degree: "Matriculation (CBSE Class X)",
      institution: "OP Jindal Modern School",
      period: "February 2009 – June 2022",
      location: "Hisar, Haryana, India",
      bullets: [
        "Secured 89.2% in CBSE Class 10.",
        "Participated in science fairs and coding competitions."
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-gradient">Education</h2>
        <div className="h-1 w-20 bg-primary mb-12"></div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-white/10 pl-8 ml-4">
            {educationItems.map((item, index) => (
              <div key={index} className="mb-12 relative">
                <div className="absolute -left-12 mt-1.5">
                  <div className="bg-primary/20 p-2 rounded-full border border-primary">
                    <GraduationCap size={18} className="text-primary" />
                  </div>
                </div>
                <div className="glass-card p-6 rounded-lg">
                  <h3 className="text-xl font-semibold">{item.degree}</h3>
                  <p className="text-primary font-medium">{item.institution}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {item.period}
                    {item.location && <span className="ml-2 text-muted-foreground/70">· {item.location}</span>}
                  </p>
                  <ul className="list-disc list-inside space-y-1.5">
                    {item.bullets.map((bullet, bi) => (
                      <li key={bi} className="text-sm leading-relaxed">{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
