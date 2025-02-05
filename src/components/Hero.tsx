import { Github, Twitter, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-float neon-glow">
            Hi, I'm Code AJ
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Aspiring Full Stack Solana Developer
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-400">
            Graduate of School of Solana Season 6 by Ackee Blockchain Security
          </p>
          
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/codeaj001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-300"
            >
              <Github size={32} />
            </a>
            <a
              href="https://twitter.com/your-twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-300"
            >
              <Twitter size={32} />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors duration-300"
            >
              <Linkedin size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;