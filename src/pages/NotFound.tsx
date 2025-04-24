
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Code, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center animated-bg cyber-grid">
      <div className="text-center glass cyber-border p-8 rounded-2xl max-w-lg">
        <div className="text-6xl font-bold mb-4 neon-text">
          <span className="text-primary">4</span>
          <span className="text-secondary">0</span>
          <span className="text-accent">4</span>
        </div>
        
        <div className="flex items-center justify-center gap-2 mb-6">
          <Code className="text-primary" />
          <p className="text-xl terminal-text">// page.not_found</p>
        </div>
        
        <p className="text-lg text-gray-300 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        
        <Link to="/" className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-md overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent animate-data-flow"></div>
          <div className="relative bg-[#0A0F1A]/80 flex items-center justify-center gap-2 px-6 py-3 rounded-md group-hover:bg-transparent transition-colors duration-300">
            <Home size={18} />
            <span>Return to Home</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
