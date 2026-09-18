
import Hero from '../components/Hero';
import About from '../components/About';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';
import BackToTop from '../components/BackToTop';

const Index = () => {
  return (
    <div className="page-shell">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <BackToTop />
    </div>
  );
};

export default Index;
