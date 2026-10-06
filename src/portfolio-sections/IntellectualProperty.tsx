import { ShieldCheck } from 'lucide-react';

const IntellectualProperty = () => {
  return (
    <section id="intellectual-property" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-gradient">Intellectual Property</h2>
        <div className="h-1 w-20 bg-primary mb-12"></div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-6 sm:p-8 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="bg-primary/20 p-3 rounded-full border border-primary flex-shrink-0 mt-1">
                <ShieldCheck size={24} className="text-primary" />
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <h3 className="text-xl sm:text-2xl font-semibold">
                    A Refrigerator Defrost Water Collection System with Integrated Drain Valve
                  </h3>
                  <span className="text-xs bg-white/10 px-2 py-1 rounded w-fit text-muted-foreground">
                    2026
                  </span>
                </div>

                <p className="text-primary font-medium text-sm sm:text-base">
                  Registered Industrial Design · Design Registration No. 502258-001
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Government of India (IP India)
                </p>

                <div className="space-y-1.5 text-sm text-muted-foreground border-t border-white/10 pt-4 mb-4">
                  <p><span className="text-foreground font-medium">Role:</span> Creator / Designer (Keshav Aggarwal)</p>
                  <p><span className="text-foreground font-medium">Registered Proprietor:</span> Thapar Institute of Engineering & Technology, Patiala</p>
                  <p><span className="text-foreground font-medium">Jurisdiction:</span> Patent Office, Government of India (IP India)</p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  An engineering design innovation focused on refrigeration appliance efficiency, featuring an integrated drain valve mechanism combined with an ergonomic defrost water collection system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntellectualProperty;
