
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import Objective from '@/components/Objective';
import WorkExperience from '@/components/WorkExperience';
import Education from '@/components/Education';
import TechStack from '@/components/TechStack';
import Startup from '@/components/Startup';
import Skills from '@/components/Skills';
import Certificates from '@/components/Certificates';
import Projects from '@/components/Projects';
import Publications from '@/components/Publications';
import Hobbies from '@/components/Hobbies';
import Languages from '@/components/Languages';
import References from '@/components/References';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WelcomePopup from '@/components/WelcomePopup';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <WelcomePopup />
      <Header />
      <Hero />
      <Introduction />
      <Objective />
      <WorkExperience />
      <Education />
      <TechStack />
      <Startup />
      <Skills />
      <Certificates />
      <Projects />
      <Publications />
      <Hobbies />
      <Languages />
      <References />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
