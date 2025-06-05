import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Indent as Trident, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-4 glass shadow-lg' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="TrishulTechs Logo" className="w-8 h-8" />
          <span className="text-xl font-bold text-primary">TrishulTechs</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-medium transition-colors duration-300 hover:text-primary ${
                location.pathname === item.path 
                  ? 'text-primary' 
                  : 'text-black'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="primary-button"
          >
            Get in Touch
          </Link>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="glass md:hidden absolute top-full left-0 right-0 p-4">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium p-2 rounded transition-colors duration-300 ${
                  location.pathname === item.path 
                    ? 'bg-primary bg-opacity-20 text-primary' 
                    : 'text-black hover:bg-primary hover:bg-opacity-10'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="primary-button text-center"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;