import React, { useState } from 'react';
import { MapPin, UtensilsCrossed, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuOptions = [
    { name: 'Food', href: '#food-menu' },
    { name: 'Drinks', href: '#drinks-menu' },
    { name: 'Full Spirits List', href: '#spirits-list' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-black"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.25)'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-leather-950/60 via-leather-950/40 to-leather-950/80" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-12 animate-fade-in">
          <Logo size="xlarge" className="mx-auto w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 drop-shadow-2xl" />
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 text-gold-400 font-display drop-shadow-lg">
          TWO LAZY DOGS
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl mb-3 sm:mb-4 text-leather-200 font-serif font-medium">
          EST. 2025
        </p>
        <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 text-leather-300 max-w-3xl mx-auto font-serif leading-relaxed">
          A modern take on the comfortable neighborhood dive bar
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <div className="relative">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="btn-primary w-full sm:w-auto justify-center min-w-[200px]"
            >
              <UtensilsCrossed className="mr-3" size={20} />
              View Menu
              <ChevronDown className={`ml-3 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} size={20} />
            </button>
            
            {isMenuOpen && (
              <div className="absolute mt-3 w-full sm:w-56 bg-leather-950/95 backdrop-blur-sm border border-leather-800 rounded-xl shadow-2xl z-50">
                <div className="py-2">
                  {menuOptions.map((option) => (
                    <a
                      key={option.name}
                      href={option.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-3 text-leather-300 hover:text-gold-400 hover:bg-leather-900/50 transition-all duration-300 font-serif text-left border-l-4 border-transparent hover:border-gold-400"
                    >
                      {option.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <a 
            href="#location" 
            className="btn-secondary w-full sm:w-auto justify-center min-w-[200px]"
          >
            <MapPin className="mr-3" size={20} />
            Find Us
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 text-center px-4">
        <div className="text-leather-400 text-xs sm:text-sm font-serif bg-leather-950/50 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
          <p>Opening August 1st, 2025</p>
          <p>1531 Champa, Denver, CO</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;