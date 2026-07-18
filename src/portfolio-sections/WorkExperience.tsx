

import { Briefcase } from 'lucide-react';

const WorkExperience = () => {
  const experiences = [
    {
      title: "Teaching and Lab Intern",
      company: "IECS (Management Infotech System)",
      period: "June 2026 – July 2026",
      location: "Hisar, India",
      bullets: [
        "Conducted hands-on laboratory sessions for 80+ students across multiple batches in Python, C, and Java, guiding students through coding exercises and practical implementations.",
        "Explained programming concepts, resolved technical doubts, assisted with debugging, and provided one-on-one mentoring to strengthen students' problem-solving and coding skills."
      ]
    },
    {
      title: "Student Intern – Center of Excellence in Data Science and AI (CoDSAI)",
      company: "Thapar Institute of Engineering & Technology",
      period: "September 2025 – Present",
      location: "Patiala, India",
      bullets: [
        "Selected under the CoDSAI Seed Funding Program for a faculty-led research project on AI-assisted community energy sharing.",
        "Developing AI-driven methods to analyse stakeholder value propositions, energy-sharing scenarios, and decision-support models for sustainable energy systems.",
        "Collaborating with faculty researchers on literature review, data analysis, and prototype development while contributing to ongoing research deliverables."
      ]
    },
    {
      title: "Research Development Team Lead",
      company: "Studifysuccess Pvt. Ltd.",
      period: "April 2025 – September 2025",
      location: "Remote, India",
      bullets: [
        "Supervised 3–5 interns on weekly contact-mining and market research tasks; reviewed output, gave feedback, and consolidated findings into structured reports for the founding team.",
        "Coordinated daily check-ins and tracked task completion across the research pipeline."
      ]
    },
    {
      title: "Executive Member — Microsoft Learn Student Chapter",
      company: "Thapar Institute of Engineering & Technology",
      period: "September 2024 – September 2025",
      location: "Patiala, India",
      bullets: [
        "Organised and co-delivered technical workshops for 200+ students; handled event logistics, speaker coordination, and session materials across a team of members.",
        "Contributed to community content and student engagement initiatives throughout the academic year."
      ]
    },
    {
      title: "Freelance Web Developer",
      company: "Self-employed",
      period: "January 2025 – Present",
      location: "Remote",
      bullets: [
        "Design and develop websites for small businesses and individuals with custom solutions tailored to client needs.",
        "Implement responsive designs and ensure cross-browser compatibility."
      ]
    },
    {
      title: "Content Intern",
      company: "Studifysuccess Pvt. Ltd.",
      period: "December 2024 – January 2025",
      location: "Remote, India",
      bullets: [
        "Drafted blog posts and articles by researching topics, creating outlines, and writing engaging content for the platform's audience."
      ]
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-gradient">Work Experience</h2>
        <div className="h-1 w-20 bg-primary mb-12"></div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-white/10 pl-8 ml-4">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-12 relative">
                <div className="absolute -left-12 mt-1.5">
                  <div className="bg-primary/20 p-2 rounded-full border border-primary">
                    <Briefcase size={18} className="text-primary" />
                  </div>
                </div>
                <div className="glass-card p-6 rounded-lg">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {exp.period}
                    {exp.location && <span className="ml-2 text-muted-foreground/70">· {exp.location}</span>}
                  </p>
                  <ul className="list-disc list-inside space-y-1.5">
                    {exp.bullets.map((bullet, bi) => (
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

export default WorkExperience;
