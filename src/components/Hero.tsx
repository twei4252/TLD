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
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-zinc-900/90" />
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <Logo size="xlarge" className="mx-auto w-32 h-32 sm:w-48 sm:h-48" />
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 text-gold-400 font-display">
          TWO LAZY DOGS
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 text-zinc-300 font-serif">
          EST. 2025
        </p>
        <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-zinc-400 max-w-2xl mx-auto font-serif">
          A modern take on the comfortable neighborhood dive bar
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <div className="relative">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gold-400 text-leather-950 rounded-md hover:bg-gold-500 transition-colors text-base sm:text-lg font-serif w-full sm:w-auto justify-center"
            >
              <UtensilsCrossed className="mr-2" size={20} />
              View Menu
              <ChevronDown className={`ml-2 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} size={20} />
            </button>
            
            {isMenuOpen && (
              <div className="absolute mt-2 w-full sm:w-48 bg-leather-950 border border-leather-800 rounded-md shadow-xl z-50">
                <div className="py-1">
                  {menuOptions.map((option) => (
                    <a
                      key={option.name}
                      href={option.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-2 text-leather-300 hover:text-gold-400 hover:bg-leather-900/50 transition-colors font-serif text-left"
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
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-gold-400 text-gold-400 rounded-md hover:bg-gold-400 hover:text-leather-950 transition-colors text-base sm:text-lg font-serif justify-center"
          >
            <MapPin className="mr-2" size={20} />
            Find Us
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 text-center">
        <div className="text-zinc-400 text-xs sm:text-sm font-serif">
          <p>Opening August 1st, 2025</p>
          <p>1531 Champa, Denver, CO</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;