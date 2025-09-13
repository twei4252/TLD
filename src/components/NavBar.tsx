import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-leather-950/95 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a 
            href="/"
            onClick={handleHomeClick}
            className="flex items-center space-x-4 group transition-transform active:scale-95"
            aria-label="Return to homepage"
          >
            <div className="transition-transform group-hover:scale-105 group-active:scale-95">
              <Logo size="small" className="sm:hidden" />
              <Logo size="medium" className="hidden sm:block" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl sm:text-2xl font-display tracking-widest text-gold-400 group-hover:text-gold-300 transition-colors">TWO LAZY DOGS</h1>
              <span className="text-xs sm:text-sm font-serif text-leather-300 group-hover:text-leather-200 transition-colors">Bar & Grill • EST. 2025</span>
            </div>
          </a>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`
                flex items-center px-4 py-2 rounded
                ${isOpen 
                  ? 'bg-gold-400 text-leather-950' 
                  : 'bg-leather-900 text-gold-400 border border-gold-400'
                }
                hover:bg-gold-400 hover:text-leather-950 
                transition-all duration-300 font-serif
              `}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <>
                  <X size={20} className="mr-2" />
                  Close
                </>
              ) : (
                <>
                  <Menu size={20} className="mr-2" />
                  Navigate
                </>
              )}
            </button>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="/" onClick={handleHomeClick} className="text-leather-300 hover:text-gold-400 transition-colors font-serif">Home</a>
            <a href="#food-menu" onClick={(e) => handleNavClick(e, 'food-menu')} className="text-leather-300 hover:text-gold-400 transition-colors font-serif">Food Menu</a>
            <a href="#drinks-menu" onClick={(e) => handleNavClick(e, 'drinks-menu')} className="text-leather-300 hover:text-gold-400 transition-colors font-serif">Drinks Menu</a>
            <a href="#events" onClick={(e) => handleNavClick(e, 'events')} className="text-leather-300 hover:text-gold-400 transition-colors font-serif">Specials & Activities</a>
            <Link to="/about" className="text-leather-300 hover:text-gold-400 transition-colors font-serif">About Us</Link>
            <a href="#location" onClick={(e) => handleNavClick(e, 'location')} className="text-leather-300 hover:text-gold-400 transition-colors font-serif">Hours & Location</a>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden absolute w-full bg-leather-950/95 backdrop-blur-sm border-t border-leather-800">
          <div className="px-4 py-3 space-y-3">
            <a 
              href="/"
              onClick={handleHomeClick}
              className="block px-4 py-3 text-leather-300 hover:text-gold-400 font-serif rounded-md hover:bg-leather-900/50 transition-all duration-300"
            >
              Home
            </a>
            <a 
              href="#food-menu" 
              onClick={(e) => handleNavClick(e, 'food-menu')}
              className="block px-4 py-3 text-leather-300 hover:text-gold-400 font-serif rounded-md hover:bg-leather-900/50 transition-all duration-300"
            >
              Food Menu
            </a>
            <a 
              href="#drinks-menu" 
              onClick={(e) => handleNavClick(e, 'drinks-menu')}
              className="block px-4 py-3 text-leather-300 hover:text-gold-400 font-serif rounded-md hover:bg-leather-900/50 transition-all duration-300"
            >
              Drinks Menu
            </a>
            <a 
              href="#events" 
              onClick={(e) => handleNavClick(e, 'events')}
              className="block px-4 py-3 text-leather-300 hover:text-gold-400 font-serif rounded-md hover:bg-leather-900/50 transition-all duration-300"
            >
              Specials & Activities
            </a>
            <Link 
              to="/about" 
              className="block px-4 py-3 text-leather-300 hover:text-gold-400 font-serif rounded-md hover:bg-leather-900/50 transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <a 
              href="#location" 
              onClick={(e) => handleNavClick(e, 'location')}
              className="block px-4 py-3 text-leather-300 hover:text-gold-400 font-serif rounded-md hover:bg-leather-900/50 transition-all duration-300"
            >
              Hours & Location
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;