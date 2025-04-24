
import { Github, ExternalLink, Code, Terminal } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Projects = () => {
  const projects = [
    {
      title: "CodeVerse",
      description: "A collaborative coding platform with real-time code sharing, syntax highlighting and integrated terminal for pair programming sessions.",
      techStack: ["React", "TypeScript", "Socket.io", "Node.js"],
      githubUrl: "https://github.com/gmdeveloper",
      liveUrl: "https://codeverse.demo",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "NexaFlow",
      description: "A task management system with kanban boards, customizable workflows and automated status updates for efficient project management.",
      techStack: ["Next.js", "Typescript", "Tailwind CSS", "MongoDB"],
      githubUrl: "https://github.com/gmdeveloper",
      liveUrl: "https://nexaflow.demo",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "DataViz",
      description: "An interactive data visualization tool for complex datasets, supporting various chart types and real-time data updates.",
      techStack: ["React", "D3.js", "GraphQL", "PostgreSQL"],
      githubUrl: "https://github.com/gmdeveloper",
      liveUrl: "https://dataviz.demo",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 animated-bg cyber-grid">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-12">
          <Code size={32} className="text-primary animate-pulse" />
          <h2 className="text-3xl font-bold neon-text-primary">
            Projects
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass cyber-border backdrop-blur-lg animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative group">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="mb-2 text-xs terminal-text">// project.view();</div>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-primary/50 px-4 py-2 rounded-md hover:bg-primary transition-colors duration-300"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center gap-2 mb-1">
                  <Terminal size={16} className="text-secondary" />
                  <div className="text-xs terminal-text">// project.name</div>
                </div>
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
                      className="px-3 py-1 text-sm rounded-full bg-white/10 border border-primary/30 text-primary"
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
        
        <div className="mt-16 text-center">
          <div className="inline-block relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
            <a 
              href="https://github.com/gmdeveloper" 
              target="_blank"
              rel="noopener noreferrer"
              className="relative glass cyber-border px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-white/10 transition-colors duration-300"
            >
              <Github className="w-5 h-5 text-white" />
              <span>View More Projects</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
