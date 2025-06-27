

import { FileText, ExternalLink } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      title: "The Manor's Secret",
      journal: "Mystery Fiction",
      date: "December 2024 - Present",
      description: "This novel interweaves themes of friendship, love, and the power of second chances with the chilling allure of hidden secrets and a shadowy past.",
      link: "https://example.com/publication1"
    },
    {
      title: "The Women Clad in Blue",
      journal: "Mystery Fiction Romance",
      date: "September 2024 - Present",
      description: ".",
      link: "https://example.com/publication2"
    },
    {
      title: "Kiem's Unsolved Mysteries",
      journal: "Mystery Fiction",
      date: "September 2024",
      description: ".",
      link: "https://example.com/publication3"
    }
  ];

  return (
    <section id="publications" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-gradient">Publications</h2>
        <div className="h-1 w-20 bg-primary mb-12"></div>
        
        <div className="max-w-4xl mx-auto">
          {publications.map((pub, index) => (
            <div key={index} className="mb-8">
              <div className="glass-card p-6 rounded-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <FileText className="text-primary" size={20} />
                    <h3 className="text-xl font-semibold">{pub.title}</h3>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{pub.journal}</span>
                    <span className="text-xs bg-white/10 px-2 py-1 rounded">{pub.date}</span>
                  </div>
                </div>
                
                <p className="mb-4">{pub.description}</p>
                
                <a 
                  href={pub.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  <span>Read Publication</span>
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
