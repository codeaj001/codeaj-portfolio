
import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/home' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add blur effect to main content when menu is open
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  return (
    <>
      <nav className={`fixed w-full z-50 py-4 border-b transition-all duration-300 ${
        isScrolled ? 'glass border-primary/20 backdrop-blur-xl' : 'bg-transparent border-transparent'
      }`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2">
            <Terminal className="text-primary" />
            <span className="terminal-text">GM_Dev</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`hover:text-primary transition-colors duration-300 relative group ${
                  location.pathname === item.href ? 'text-primary' : 'text-white'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ${
                  location.pathname === item.href ? 'w-full' : 'group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-white hover:text-primary transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu with Backdrop */}
      {isOpen && (
        <>
          {/* Backdrop blur */}
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden" onClick={() => setIsOpen(false)} />
          
          {/* Mobile Menu Content */}
          <div className="fixed top-[73px] left-0 right-0 glass md:hidden z-50 animate-slide-down border-b border-primary/20">
            <div className="flex flex-col items-center py-6 space-y-6 bg-[#0A0F1A]/95 backdrop-blur-xl">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-lg font-medium relative group ${
                    location.pathname === item.href ? 'text-primary' : 'text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ${
                    location.pathname === item.href ? 'w-full' : 'group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
