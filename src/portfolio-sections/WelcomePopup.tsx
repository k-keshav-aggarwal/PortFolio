import React, { useState, useEffect } from 'react';
import { X, Code, Coffee, BookOpen, Terminal } from 'lucide-react';
import { Button } from './ui/button';

const WelcomePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenWelcomePopup');
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('hasSeenWelcomePopup', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="glass-card w-[90%] max-w-3xl p-8 md:p-12 rounded-lg animate-fade-in">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-primary/20 p-3 rounded-lg">
              <Terminal className="h-8 w-8 text-primary" />
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={handleClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-typing">
          <span className="text-gradient">Hello World!</span> <br />
          <span className="text-xl md:text-2xl mt-2 block opacity-90">I'm a Developer Who Loves Coding, Coffee, and Books</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="flex items-center gap-3 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="bg-primary/20 p-2 rounded-full">
              <Code className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Clean Code</h3>
              <p className="text-sm text-muted-foreground">Crafting elegant solutions</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 animate-fade-in" style={{animationDelay: '0.5s'}}>
            <div className="bg-primary/20 p-2 rounded-full">
              <Coffee className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Fueled by Coffee</h3>
              <p className="text-sm text-muted-foreground">For those late night sessions</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 animate-fade-in" style={{animationDelay: '0.7s'}}>
            <div className="bg-primary/20 p-2 rounded-full">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium">Always Learning</h3>
              <p className="text-sm text-muted-foreground">Through books and practice</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <Button onClick={handleClose} className="w-full hover-glow">
            Enter My Digital Space
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;
