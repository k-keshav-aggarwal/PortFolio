

import { Quote, User } from 'lucide-react';

const References = () => {
  const references = [
    {
      name: "Dr. Chinmaya Panigrahy",
      title: "Assistant Professor - II, TIET",
      quote: "A dedicated student with exceptional problem-solving skills and a keen interest in web development. Shows great promise in the field of computer science.",
      specialization: "Image Processing and Fractal Dimension",
      contact: "chinmaya.panigrahy@thapar.edu",
      url: "https://csed.thapar.edu/facultydetails/MTQ4OA=="
    },
    {
      name: "Dr. Jaskirat Singh",
      title: "Assistant Professor - I, TIET",
      quote: "Keshav is a bright student who consistently demonstrates technical proficiency and a strong drive for learning new technologies.",
      specialization: "EEG Signal Processing, Cognitive Remediation",
      contact: "jaskirat.singh@thapar.edu",
      url: "https://csed.thapar.edu/facultydetails/MTQyNQ=="
    },
  ];

  return (
    <section id="references" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-gradient">References</h2>
        <div className="h-1 w-20 bg-primary mb-12"></div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {references.map((ref, index) => (
            <div key={index} className="glass-card p-6 rounded-lg">
              <Quote className="text-primary mb-4 opacity-60" size={32} />
              
              <p className="italic mb-6">"{ref.quote}"</p>

              
              <div className="flex items-center gap-3 mt-auto">
                <div className="bg-primary/20 p-2 rounded-full">
                  <User size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{ref.name}</h3>
                  <p className="text-sm text-muted-foreground">{ref.title}</p>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/5 space-y-1">
                <p className="text-xs text-muted-foreground"><span className="text-primary/70">Specialization:</span> {ref.specialization}</p>
                <p className="text-xs text-muted-foreground"><span className="text-primary/70">Email:</span> <a href={`mailto:${ref.contact}`} className="hover:text-primary transition-colors">{ref.contact}</a></p>
                {ref.url && <p className="text-xs text-muted-foreground"><span className="text-primary/70">Profile:</span> <a href={ref.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors truncate block">{ref.url}</a></p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;
