
import Header from '@/portfolio-sections/Header';
import Hero from '@/portfolio-sections/Hero';
import Introduction from '@/portfolio-sections/Introduction';
import Objective from '@/portfolio-sections/Objective';
import WorkExperience from '@/portfolio-sections/WorkExperience';
import Education from '@/portfolio-sections/Education';
import TechStack from '@/portfolio-sections/TechStack';
import Startup from '@/portfolio-sections/Startup';
import Skills from '@/portfolio-sections/Skills';
import Certificates from '@/portfolio-sections/Certificates';
import Projects from '@/portfolio-sections/Projects';
import Publications from '@/portfolio-sections/Publications';
import Hobbies from '@/portfolio-sections/Hobbies';
import Languages from '@/portfolio-sections/Languages';
import References from '@/portfolio-sections/References';
import Contact from '@/portfolio-sections/Contact';
import Footer from '@/portfolio-sections/Footer';
import WelcomePopup from '@/portfolio-sections/WelcomePopup';
import Chat from '../Chat';

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
      <Chat />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
