

import { Button } from "@/portfolio-sections/ui/button";
import { Input } from "@/portfolio-sections/ui/input";
import { Textarea } from "@/portfolio-sections/ui/textarea";
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gradient">Get In Touch</h2>
        <div className="h-1 w-20 bg-primary mb-8 sm:mb-12"></div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <p className="text-base sm:text-lg mb-6 sm:mb-8">
              I'm currently looking for new opportunities to grow my skills and would love to hear from you. 
              Whether you have a question, want to collaborate on a project, or just want to say hi, 
              I'll try my best to get back to you!
            </p>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center">
                <Mail size={18} className="text-primary mr-3 sm:mr-4 flex-shrink-0" />
                <span className="text-sm sm:text-base break-all">ka9812204392@gmail.com</span>
              </div>
              
              <div className="flex items-center">
                <Phone size={18} className="text-primary mr-3 sm:mr-4 flex-shrink-0" />
                <span className="text-sm sm:text-base">+91 9812204392</span>
              </div>
              
              <div className="flex items-center">
                <MapPin size={18} className="text-primary mr-3 sm:mr-4 flex-shrink-0" />
                <span className="text-sm sm:text-base">Thapar Institute of Engineering and Technology, Patiala</span>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-4 sm:p-6 rounded-lg border border-white/10 mt-8 lg:mt-0">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your Name"
                      required
                      className="bg-secondary/30 border-white/10 text-sm sm:text-base"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      required
                      className="bg-secondary/30 border-white/10 text-sm sm:text-base"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="How can I help you?"
                    required
                    className="bg-secondary/30 border-white/10"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    rows={5}
                    required
                    className="bg-secondary/30 border-white/10"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-black hover:bg-primary/80"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
