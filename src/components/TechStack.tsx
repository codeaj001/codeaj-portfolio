
import { Code } from 'lucide-react';

const TechStack = () => {
  const technologies = [
    { name: 'Rust', image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/rust/rust.png' },
    { name: 'Solana', image: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png' },
    { name: 'TypeScript', image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png' },
    { name: 'Next.js', image: 'https://assets.vercel.com/image/upload/v1662130559/nextjs/icon.png' },
    { name: 'JavaScript', image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png' },
    { name: 'Python', image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png' },
    { name: 'HTML', image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png' },
    { name: 'CSS', image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png' },
    { name: 'Git', image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png' },
    { name: 'GitHub', image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
    { name: 'Tailwind CSS', image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/tailwind/tailwind.png' },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 animated-bg">
      <div className="container mx-auto px-4">
        <div className="glass p-8 rounded-2xl">
          <div className="flex items-center gap-4 mb-12">
            <Code size={32} className="text-primary animate-pulse" />
            <h2 className="text-3xl font-bold neon-text-primary">Tech Stack</h2>
          </div>
          
          <div className="overflow-hidden">
            <div className="marquee-container">
              <div className="marquee">
                {[...technologies, ...technologies].map((tech, index) => (
                  <div
                    key={`${tech.name}-${index}`}
                    className="tech-card"
                  >
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                      <div className="relative glass p-4 rounded-xl flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300">
                        <img
                          src={tech.image}
                          alt={tech.name}
                          className="w-16 h-16 object-contain animate-float"
                        />
                        <span className="text-lg font-medium text-gray-300 group-hover:text-primary transition-colors neon-text">
                          {tech.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
