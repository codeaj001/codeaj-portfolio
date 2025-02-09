import { User, Code, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 animated-bg">
      <div className="container mx-auto px-4">
        <div className="glass p-8 rounded-2xl space-y-8 animate-fade-in">
          <div className="flex items-center gap-4 mb-6">
            <User size={32} className="text-primary animate-pulse" />
            <h2 className="text-3xl font-bold neon-glow">About Me</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg text-gray-300">
                I'm Abduljalal Abdullahi Shama, known as Code AJ in the web3 space. As an aspiring Full Stack Solana Developer, 
                I'm passionate about building decentralized applications and contributing to the blockchain ecosystem.
              </p>
              <p className="text-lg text-gray-300">
                I successfully completed the School of Solana Season 6 program by Ackee Blockchain Security, 
                and documented my 30-day journey learning Rust on Twitter.
              </p>
            </div>
            <div className="glass p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <Code size={24} className="text-secondary" />
                <h3 className="text-xl font-semibold">Achievements</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <Rocket size={16} className="text-accent" />
                  School of Solana Season 6 Graduate
                </li>
                <li className="flex items-center gap-2">
                  <Rocket size={16} className="text-accent" />
                  30 Days of Rust Challenge Completed
                </li>
                <li className="flex items-center gap-2">
                  <Rocket size={16} className="text-accent" />
                  Active Superteam Community Lurker (Member soon)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;