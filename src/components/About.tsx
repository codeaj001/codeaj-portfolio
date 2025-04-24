
import { User, Code, Rocket, Terminal } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 animated-bg cyber-grid">
      <div className="container mx-auto px-4">
        <div className="glass cyber-border p-8 rounded-2xl space-y-8 animate-fade-in">
          <div className="flex items-center gap-4 mb-6">
            <User size={32} className="text-primary animate-pulse" />
            <h2 className="text-3xl font-bold neon-text">About Me</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Terminal size={20} className="text-secondary" />
                <p className="terminal-text font-medium">$ whoami</p>
              </div>
              
              <p className="text-lg text-gray-300">
                I'm Code AJ, a passionate Full Stack Developer and Web3 Security enthusiast 
                with a love for creating innovative web applications and exploring cybersecurity.
              </p>
              
              <div className="relative h-64 my-6 rounded-xl overflow-hidden border border-primary/30">
                <img 
                  src="/lovable-uploads/0dd6e14d-98c4-4e6d-9dfc-7b70646d23fc.png" 
                  alt="Code AJ" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-xs terminal-text">// Life philosophy</div>
                  <p className="text-white font-medium">"Security is not a product, but a process"</p>
                </div>
              </div>
            </div>
            
            <div className="glass p-6 rounded-xl cyber-border">
              <div className="flex items-center gap-4 mb-4">
                <Terminal size={20} className="text-secondary" />
                <p className="terminal-text font-medium">$ experience</p>
              </div>
              
              <div className="space-y-5 text-gray-300">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium flex items-center gap-2">
                    <Code size={18} className="text-primary" />
                    Web3 & Blockchain Development
                  </h3>
                  <p className="text-sm text-gray-400 pl-6">
                    Building decentralized applications with Solana, Anchor, Rust, and TypeScript
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium flex items-center gap-2">
                    <Code size={18} className="text-secondary" />
                    Cybersecurity & Penetration Testing
                  </h3>
                  <p className="text-sm text-gray-400 pl-6">
                    Exploring web3 security, creating educational content, and identifying vulnerabilities
                  </p>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium flex items-center gap-2">
                    <Rocket size={18} className="text-accent" />
                    Continuous Learning
                  </h3>
                  <p className="text-sm text-gray-400 pl-6">
                    Always exploring new technologies in blockchain and cybersecurity
                  </p>
                </div>
                
                <div className="mt-8 p-3 rounded-lg bg-white/5 border border-primary/20">
                  <div className="text-xs terminal-text mb-1">// Current status</div>
                  <p className="text-white font-medium">
                    Building secure web3 solutions and creating security content
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
