
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/home' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  // Add blur effect to main content when menu is open
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  return (
    <>
      <nav className="fixed w-full z-50 glass py-4 border-b border-white/10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold neon-text-primary gradient-border px-4 py-2 rounded-lg">
            Code AJ
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`hover:text-primary transition-colors duration-300 hover:neon-glow ${
                  location.pathname === item.href ? 'text-primary neon-text' : 'text-white'
                }`}
              >
                {item.name}
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
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsOpen(false)} />
          
          {/* Mobile Menu Content */}
          <div className="fixed top-[73px] left-0 right-0 glass md:hidden z-50 animate-slide-down border-b border-white/10">
            <div className="flex flex-col items-center py-6 space-y-6 bg-[#1A1F2C]/95 backdrop-blur-xl">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-lg font-medium hover:text-primary transition-colors duration-300 hover:neon-glow ${
                    location.pathname === item.href ? 'text-primary neon-text' : 'text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
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

