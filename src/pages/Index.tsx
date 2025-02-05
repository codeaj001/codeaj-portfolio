import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import TechStack from '../components/TechStack';
import Projects from '../components/Projects';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
    </div>
  );
};

export default Index;