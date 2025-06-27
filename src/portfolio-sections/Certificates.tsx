

import { Award } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      name: "Minecraft Education Session on AI",
      issuer: "Microsoft Learn Student Ambassador",
      date: "April 2025",
      description: "Recognized for attendance and completion of the MLSA workshop on hands-on Minecraft Education session on AI."
    },
    {
      name: "T-Sustainathon Best Proposal",
      issuer: "Thapar Institute Of Engineering and Technology",
      date: "March 2025",
      description: "Certificate of Award for the Best Proposal."
    },
    {
      name: "Synapse 2025",
      issuer: "Gene Society Thapar",
      date: "February 2025",
      description: "Winner of the Synapse 2025 Ideathon organized by Gene Society Thapar."
    },
    {
      name: "Android App Development Training Program",
      issuer: "Humble Coders",
      date: "February 2025",
      description: "Completing 5 days Android App Development training program and successfully building 3 project apps."
    },
    {
      name: "Member Of the Organizing Team",
      issuer: "Humble Coders and Head, CSED Thapar",
      date: "February 2025",
      description: "In recognition of Valuable contribution as a member of the organizing team for the conduction of Android App Development Workshop held by Humble Coders."
    },
    {
      name: "Enhancing Social Intelligence: Interpersonal Skills",
      issuer: "De'Talk",
      date: "August 2024",
      description: "https://detalks.com/certificates/35cd778f-a672-49a3-a262-7c1950825e59"
    },
    {
      name: "Mstering Executive Skills",
      issuer: "De'Talk",
      date: "August 2024",
      description: "https://detalks.com/certificates/774bc435-b521-4452-a81f-22a421df792b"
    },
    {
      name: "Optimising Your Quality Of Life",
      issuer: "De'Talk",
      date: "August 2024",
      description: "https://detalks.com/certificates/598d4ef1-615c-4c9c-adab-29f7866a2d79"
    },
    {
      name: "Stress Mastery Workshop: Building Your Coping Skills",
      issuer: "De'Talk",
      date: "August 2024",
      description: "https://detalks.com/certificates/9de051fb-f5c7-464b-acc8-5f6ae3aa4bb6"
    },
    {
      name: "Understanding and Appllying Your Big Five Personality Traits",
      issuer: "De'Talk",
      date: "August 2024",
      description: "https://detalks.com/certificates/8d8d25dd-a668-4de0-a664-ec35509c7039"
    },
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
