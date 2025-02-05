import { Github, Twitter, Linkedin } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 animated-bg">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <div className="flex flex-col items-center space-y-6 animate-slide-up">
            {/* Profile Image */}
            <div className="relative w-40 h-40 mb-4">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent animate-pulse opacity-50"></div>
              <Avatar className="w-full h-full border-4 border-white/10 glass">
                <AvatarImage
                  src="https://github.com/codeaj001.png"
                  alt="Code AJ"
                  className="rounded-full"
                />
                <AvatarFallback className="text-2xl">AJ</AvatarFallback>
              </Avatar>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-float neon-glow">
              Hi, I'm Code AJ
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-300 animate-glow">
              Aspiring Full Stack Solana Developer
            </p>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-400">
              Graduate of School of Solana Season 6 by Ackee Blockchain Security
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 animate-slide-in">
            <a
              href="https://github.com/codeaj001"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-3 hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <Github size={32} className="text-white hover:text-primary transition-colors duration-300" />
            </a>
            <a
              href="https://twitter.com/your-twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-3 hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-secondary/20"
            >
              <Twitter size={32} className="text-white hover:text-secondary transition-colors duration-300" />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-3 hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-accent/20"
            >
              <Linkedin size={32} className="text-white hover:text-accent transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;