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
    <nav className={`navbar fixed w-full transition-all duration-300 ${isScrolled ? 'bg-leather-950/95 backdrop-blur-sm border-b border-leather-800/50' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          <a 
            href="/"
            onClick={handleHomeClick}
            className="flex items-center space-x-3 sm:space-x-4 group transition-all duration-300 hover:scale-105 active:scale-95"
            aria-label="Return to homepage"
          >
            <div className="transition-all duration-300 group-hover:rotate-12">
              <Logo size="small" className="sm:hidden" />
              <Logo size="medium" className="hidden sm:block" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg sm:text-2xl font-display tracking-widest text-gold-400 group-hover:text-gold-300 transition-colors leading-tight">TWO LAZY DOGS</h1>
              <span className="text-xs sm:text-sm font-serif text-leather-300 group-hover:text-leather-200 transition-colors">Bar & Grill • EST. 2025</span>
            </div>
          </a>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`
                flex items-center px-4 py-2 rounded-lg font-semibold
                ${isOpen 
                  ? 'bg-gold-400 text-leather-950 shadow-lg' 
                  : 'bg-leather-900/80 text-gold-400 border-2 border-gold-400'
                }
                hover:bg-gold-400 hover:text-leather-950 hover:border-gold-400
                transition-all duration-300 font-serif transform hover:scale-105 active:scale-95
              `}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <>
                  <X size={18} className="mr-2" />
                  Close
                </>
              ) : (
                <>
                  <Menu size={18} className="mr-2" />
                  Navigate
                </>
              )}
            </button>
          </div>
          
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <a href="/" onClick={handleHomeClick} className="text-leather-300 hover:text-gold-400 transition-all duration-300 font-serif font-medium py-2 border-b-2 border-transparent hover:border-gold-400">Home</a>
            <a href="#food-menu" onClick={(e) => handleNavClick(e, 'food-menu')} className="text-leather-300 hover:text-gold-400 transition-all duration-300 font-serif font-medium py-2 border-b-2 border-transparent hover:border-gold-400">Food</a>
            <a href="#drinks-menu" onClick={(e) => handleNavClick(e, 'drinks-menu')} className="text-leather-300 hover:text-gold-400 transition-all duration-300 font-serif font-medium py-2 border-b-2 border-transparent hover:border-gold-400">Drinks</a>
            <a href="#events" onClick={(e) => handleNavClick(e, 'events')} className="text-leather-300 hover:text-gold-400 transition-all duration-300 font-serif font-medium py-2 border-b-2 border-transparent hover:border-gold-400">Events</a>
            <Link to="/about" className="text-leather-300 hover:text-gold-400 transition-all duration-300 font-serif font-medium py-2 border-b-2 border-transparent hover:border-gold-400">About</Link>
            <a href="#location" onClick={(e) => handleNavClick(e, 'location')} className="text-leather-300 hover:text-gold-400 transition-all duration-300 font-serif font-medium py-2 border-b-2 border-transparent hover:border-gold-400">Location</a>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="mobile-menu md:hidden absolute w-full bg-leather-950/98 backdrop-blur-md border-t border-leather-800/50 shadow-2xl">
          <div className="px-4 py-4 space-y-2">
            <a 
              href="/"
              onClick={handleHomeClick}
              className="block px-4 py-4 text-leather-300 hover:text-gold-400 font-serif font-medium rounded-lg hover:bg-leather-900/50 transition-all duration-300 border-l-4 border-transparent hover:border-gold-400"
            >
              Home
            </a>
            <a 
              href="#food-menu" 
              onClick={(e) => handleNavClick(e, 'food-menu')}
              className="block px-4 py-4 text-leather-300 hover:text-gold-400 font-serif font-medium rounded-lg hover:bg-leather-900/50 transition-all duration-300 border-l-4 border-transparent hover:border-gold-400"
            >
              Food Menu
            </a>
            <a 
              href="#drinks-menu" 
              onClick={(e) => handleNavClick(e, 'drinks-menu')}
              className="block px-4 py-4 text-leather-300 hover:text-gold-400 font-serif font-medium rounded-lg hover:bg-leather-900/50 transition-all duration-300 border-l-4 border-transparent hover:border-gold-400"
            >
              Drinks Menu
            </a>
            <a 
              href="#events" 
              onClick={(e) => handleNavClick(e, 'events')}
              className="block px-4 py-4 text-leather-300 hover:text-gold-400 font-serif font-medium rounded-lg hover:bg-leather-900/50 transition-all duration-300 border-l-4 border-transparent hover:border-gold-400"
            >
              Specials & Activities
            </a>
            <Link 
              to="/about" 
              className="block px-4 py-4 text-leather-300 hover:text-gold-400 font-serif font-medium rounded-lg hover:bg-leather-900/50 transition-all duration-300 border-l-4 border-transparent hover:border-gold-400"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <a 
              href="#location" 
              onClick={(e) => handleNavClick(e, 'location')}
              className="block px-4 py-4 text-leather-300 hover:text-gold-400 font-serif font-medium rounded-lg hover:bg-leather-900/50 transition-all duration-300 border-l-4 border-transparent hover:border-gold-400"
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