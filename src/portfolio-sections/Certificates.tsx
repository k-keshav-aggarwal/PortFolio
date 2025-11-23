

import { Award } from 'lucide-react';

const Certificates = () => {
const certificates = [
  {
    name: "BIOS Hackathon v1.0 - Track: Overclocked",
    issuer: "Department of Computer Science & Engineering, TIET with IEEE Student Branch TIET",
    date: "November 2025",
    description: "Secured 1st position in the Overclocked track at BIOS Hackathon v1.0."
  },
  {
    name: "GitHub Advanced Security (Part 1)",
    issuer: "GitHub",
    date: "July 2025",
    description: "Completed part 1 of GitHub Advanced Security fundamentals covering key security workflows and best practices."
  },
  {
    name: "GitHub Fundamentals – Administration Basics",
    issuer: "GitHub",
    date: "July 2025",
    description: "Completed part 1 of GitHub Fundamentals focusing on admin basics, product features, and repository-level management."
  },
  {
    name: "Microsoft AI for Leaders in Sustainability",
    issuer: "Microsoft",
    date: "July 2025",
    description: "Completed Microsoft’s learning program on applying AI to sustainability and environmental leadership."
  },
  {
    name: "AI/ML BootCamp",
    issuer: "Google Developer Groups TIET",
    date: "April 2025",
    description: "Completed the AI/ML BootCamp organized by GDG TIET."
  },
  {
    name: "Cryptic Hunt'25",
    issuer: "United Latino Students Association",
    date: "April 2025",
    description: "Participated in Cryptic Hunt'25 organized by ULSA."
  },
  {
    name: "Microsoft Learn Student Chapter Certifications",
    issuer: "Microsoft Learn Student Ambassadors",
    date: "April 2025",
    description: "Completed MLSA certifications focused on AI and Prompt Engineering."
  },
  {
    name: "Prompt Engineering Workshop",
    issuer: "Microsoft Learn Student Ambassadors",
    date: "April 2025",
    description: "Completed the Prompt Engineering workshop conducted under the MLSA chapter."
  },
  {
    name: "Minecraft Education Session on AI",
    issuer: "Microsoft Learn Student Ambassadors",
    date: "April 2025",
    description: "Completed the MLSA workshop on Minecraft Education and artificial intelligence."
  },
  {
    name: "T-Sustainathon Best Proposal",
    issuer: "Thapar Institute of Engineering and Technology",
    date: "March 2025",
    description: "Awarded for presenting the best proposal at T-Sustainathon 2025."
  },
  {
    name: "Synapse 2025",
    issuer: "GENE Society TIET",
    date: "February 2025",
    description: "Secured 1st position in Synapse 2025, the ideathon organized by GENE Society TIET."
  },
  {
    name: "Android App Development Training Program",
    issuer: "Humble Coders",
    date: "February 2025",
    description: "Completed a 5-day Android App Development workshop and built 3 functional applications."
  },
  {
    name: "Organizing Team – Android App Development Program",
    issuer: "Humble Coders & CSED Department, TIET",
    date: "February 2025",
    description: "Recognized for contribution as a member of the organizing team for the Android App Development Workshop."
  },
  {
    name: "Experiential Learning Activities (ELC)",
    issuer: "Thapar Institute of Engineering & Technology",
    date: "January 2025",
    description: "Completed hands-on modules involving Tinkercad, Arduino IDE, and Python programming."
  },
  {
    name: "Microsoft Learning Paths (1 to 14)",
    issuer: "Microsoft",
    date: "January 2025",
    description: "Completed the entire series of Microsoft Learning Paths across technology, productivity, and cloud modules."
  },
  {
    name: "De'Talk Personal & Professional Development Certifications",
    issuer: "De'Talk",
    date: "August 2024",
    description:
      "Completed a series of De'Talk development workshops covering interpersonal skills, executive skills, stress mastery, personality development, and quality-of-life improvement."
  }
];

  return (
    <section id="certificates" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-gradient">Certificates</h2>
        <div className="h-1 w-20 bg-primary mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="glass-card p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-primary" size={20} />
                <h3 className="text-xl font-semibold">{cert.name}</h3>
              </div>
              <p className="text-primary mb-1">{cert.issuer}</p>
              <p className="text-sm text-muted-foreground mb-3">{cert.date}</p>
              <p className="text-sm">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
