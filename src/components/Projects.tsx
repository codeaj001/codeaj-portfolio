
import { Github, ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "StellarSwap",
      description: "A decentralized cryptocurrency exchange platform with a modern UI, enabling users to swap digital assets seamlessly.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "DaisyUI"],
      githubUrl: "https://github.com/codeaj001",
      liveUrl: "http://stellarswap.vercel.app/"
    },
    {
      title: "Coming Soon",
      description: "A decentralized NFT marketplace built on Solana blockchain using Rust and React.",
      techStack: ["Solana", "Rust", "React", "Web3.js"],
      githubUrl: "https://github.com/codeaj001",
      liveUrl: "#"
    },
    {
      title: "Coming Soon",
      description: "Real-time DeFi dashboard for tracking Solana tokens and NFTs.",
      techStack: ["TypeScript", "Next.js", "Tailwind CSS", "Solana/Web3.js"],
      githubUrl: "https://github.com/codeaj001",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 animated-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 neon-glow animate-float">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass card-hover border-none backdrop-blur-lg animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full bg-white/10 text-primary animate-pulse"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-end space-x-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
                >
                  <Github className="w-5 h-5 text-white hover:text-primary" />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
                >
                  <ExternalLink className="w-5 h-5 text-white hover:text-primary" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
