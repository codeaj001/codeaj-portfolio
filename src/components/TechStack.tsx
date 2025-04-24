import { Code, Terminal, Layers, Database } from 'lucide-react';

const TechStack = () => {
  const technologies = [
    { name: 'React', image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png', category: 'frontend' },
    { name: 'HTML', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfQgxarjzYx75kEwzMuk2feqeJbICz7coTQ&s', category: 'frontend'},
    { name: 'TypeScript', image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png', category: 'frontend' },
    { name: 'Next.js', image: 'https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000', category: 'frontend' },
    { name: 'Tailwind CSS', image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/tailwind/tailwind.png', category: 'frontend' },
    // { name: 'Node.js', image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png', category: 'backend' },
    // { name: 'Express', image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png', category: 'backend' },
    // { name: 'MongoDB', image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png', category: 'backend' },
    { name: 'PostgreSQL', image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png', category: 'backend' },
    // { name: 'GraphQL', image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/graphql/graphql.png', category: 'backend' },
    { name: 'Docker', image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png', category: 'tools' },
    { name: 'Git', image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png', category: 'tools' },
    { name: 'VS Code', image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png', category: 'tools' },
    { name: 'Solana', image: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png', category: 'blockchain' },
    { name: 'Rust', image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/rust/rust.png', category: 'blockchain' },
    { name: 'Anchor', image: 'https://camo.githubusercontent.com/590ccfb4e70a27673047ee879ed409981c05b2da403e60b4aaa7961ccdb46001/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f46565556614f3958454141756c764b3f666f726d61743d706e67266e616d653d736d616c6c', category: 'blockchain' },
    { name: 'TypeScript', image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png', category: 'blockchain' },
    { name: 'Penetration Testing', image: 'https://cdn-icons-png.flaticon.com/512/6357/6357048.png', category: 'security' },
    { name: 'Web3 Security', image: 'https://www.oclc.org/content/marketing/publish/en_us/trust/security/jcr%3Acontent/hero_area/parsyscolumncontrol_/col0/parsyscolumncontrol/col0/parsyscolumncontrol/col1/image.img.png/1686837674374.png', category: 'security' },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 animated-bg cyber-grid">
      <div className="container mx-auto px-4">
        <div className="glass cyber-border p-8 rounded-2xl">
          <div className="flex items-center gap-4 mb-12">
            <Terminal size={32} className="text-primary animate-pulse" />
            <h2 className="text-3xl font-bold neon-text-primary">Tech Stack</h2>
          </div>
          
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Code size={24} className="text-primary" />
                <h3 className="text-xl font-semibold terminal-text">Frontend Technologies</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {technologies.filter(tech => tech.category === 'frontend').map((tech, index) => (
                  <div
                    key={`${tech.name}-${index}`}
                    className="tech-card"
                  >
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                      <div className="relative glass p-4 rounded-xl flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300 cyber-border">
                        <img
                          src={tech.image}
                          alt={tech.name}
                          className="w-14 h-14 object-contain animate-float"
                        />
                        <span className="text-base font-medium text-gray-300 group-hover:text-primary transition-colors">
                          {tech.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Database size={24} className="text-secondary" />
                <h3 className="text-xl font-semibold terminal-text">Backend & Database</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {technologies.filter(tech => tech.category === 'backend').map((tech, index) => (
                  <div
                    key={`${tech.name}-${index}`}
                    className="tech-card"
                  >
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                      <div className="relative glass p-4 rounded-xl flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300 cyber-border">
                        <img
                          src={tech.image}
                          alt={tech.name}
                          className="w-14 h-14 object-contain animate-float"
                        />
                        <span className="text-base font-medium text-gray-300 group-hover:text-primary transition-colors">
                          {tech.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Layers size={24} className="text-accent" />
                <h3 className="text-xl font-semibold terminal-text">Tools & DevOps</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {technologies.filter(tech => tech.category === 'tools').map((tech, index) => (
                  <div
                    key={`${tech.name}-${index}`}
                    className="tech-card"
                  >
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                      <div className="relative glass p-4 rounded-xl flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300 cyber-border">
                        <img
                          src={tech.image}
                          alt={tech.name}
                          className="w-14 h-14 object-contain animate-float"
                        />
                        <span className="text-base font-medium text-gray-300 group-hover:text-primary transition-colors">
                          {tech.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Terminal size={24} className="text-primary" />
                <h3 className="text-xl font-semibold terminal-text">Blockchain & Web3</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {technologies.filter(tech => tech.category === 'blockchain').map((tech, index) => (
                  <div
                    key={`${tech.name}-${index}`}
                    className="tech-card"
                  >
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                      <div className="relative glass p-4 rounded-xl flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300 cyber-border">
                        <img
                          src={tech.image}
                          alt={tech.name}
                          className="w-14 h-14 object-contain animate-float"
                        />
                        <span className="text-base font-medium text-gray-300 group-hover:text-primary transition-colors">
                          {tech.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Terminal size={24} className="text-accent" />
                <h3 className="text-xl font-semibold terminal-text">Security & Testing</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {technologies.filter(tech => tech.category === 'security').map((tech, index) => (
                  <div
                    key={`${tech.name}-${index}`}
                    className="tech-card"
                  >
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                      <div className="relative glass p-4 rounded-xl flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300 cyber-border">
                        <img
                          src={tech.image}
                          alt={tech.name}
                          className="w-14 h-14 object-contain animate-float"
                        />
                        <span className="text-base font-medium text-gray-300 group-hover:text-primary transition-colors">
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
