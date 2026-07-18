


import { Award } from 'lucide-react';

const Certificates = () => {
const certificates = [
  {
    name: "BIOS Hackathon v1.0 — 1st Place (Overclocked Track)",
    issuer: "Department of Computer Science & Engineering, TIET with IEEE Student Branch TIET",
    date: "November 2025",
    description: "Secured 1st position in the Overclocked track at BIOS Hackathon v1.0. Built and presented a P2P energy trading platform in 24 hours; awarded for system design and product clarity."
  },
  {
    name: "SYNAPSE Ideathon — 1st Place",
    issuer: "GENE Society, TIET",
    date: "February 2025",
    description: "Won 1st place at SYNAPSE 2025 ideathon for structured problem decomposition and solution clarity."
  },
  {
    name: "T-Sustainathon — Best Proposal",
    issuer: "Thapar Institute of Engineering and Technology",
    date: "March 2025",
    description: "Awarded Best Proposal at T-Sustainathon 2025 for a feasible, well-scoped sustainability solution."
  },
  {
    name: "McKinsey.org Forward Program",
    issuer: "McKinsey.org",
    date: "December 2025",
    description: "Completed the selective global McKinsey Forward programme covering structured problem-solving, data-driven thinking, and professional communication."
  },
  {
    name: "Cisco — Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    date: "March 2026",
    description: "Completed Cisco's Introduction to Data Science covering data analytics, ML concepts, and data science in business contexts."
  },
  {
    name: "Infosys Springboard — Information Security Fundamentals",
    issuer: "Infosys Springboard",
    date: "March 2026",
    description: "Completed the Information Security Fundamentals course covering core cybersecurity principles, risk management, and security best practices."
  },
  {
    name: "Google Developer Groups AI/ML Bootcamp",
    issuer: "Google Developer Groups TIET",
    date: "April 2025",
    description: "Completed the AI/ML BootCamp with hands-on ML workflows and applied AI problem-solving organised by GDG TIET."
  },
  {
    name: "GitHub Advanced Security (Part 1)",
    issuer: "GitHub",
    date: "July 2025",
    description: "Completed part 1 of GitHub Advanced Security fundamentals covering key security workflows and best practices."
  },
  {
    name: "GitHub Fundamentals — Administration Basics",
    issuer: "GitHub",
    date: "July 2025",
    description: "Completed part 1 of GitHub Fundamentals focusing on admin basics, product features, and repository-level management."
  },
  {
    name: "Microsoft AI for Leaders in Sustainability",
    issuer: "Microsoft",
    date: "July 2025",
    description: "Completed Microsoft's learning program on applying AI to sustainability and environmental leadership."
  },
  {
    name: "Microsoft Learning Paths — 14 Modules",
    issuer: "Microsoft",
    date: "January 2025 – Present",
    description: "Completed the entire series of 14 Microsoft Learning Paths covering AI fundamentals, GitHub Advanced Security, cloud architecture, and Prompt Engineering."
  },
  {
    name: "Android App Development Training Program",
    issuer: "Humble Coders",
    date: "February 2025",
    description: "Completed a 5-day Android App Development workshop and built 3 functional applications. Also served on the organising team."
  },
  {
    name: "Experiential Learning Activities (ELC)",
    issuer: "Thapar Institute of Engineering & Technology",
    date: "January 2025",
    description: "Completed hands-on modules involving Tinkercad, Arduino IDE, and Python programming."
  },
  {
    name: "Cryptic Hunt '25",
    issuer: "United Latino Students Association",
    date: "April 2025",
    description: "Participated in Cryptic Hunt '25 organised by ULSA."
  },
  {
    name: "Prompt Engineering Workshop",
    issuer: "Microsoft Learn Student Ambassadors",
    date: "April 2025",
    description: "Completed the Prompt Engineering workshop conducted under the MLSA chapter."
  },
  {
    name: "De'Talk Personal & Professional Development",
    issuer: "De'Talk",
    date: "August 2024",
    description: "Completed a series of De'Talk development workshops covering interpersonal skills, executive skills, stress mastery, personality development, and quality-of-life improvement."
  }
];

  return (
    <section id="certificates" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-gradient">Achievements & Certifications</h2>
        <div className="h-1 w-20 bg-primary mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div key={index} className="glass-card p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-primary flex-shrink-0" size={20} />
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
