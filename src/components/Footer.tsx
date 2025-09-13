import React from 'react';
import { Instagram, Mail, Phone, Globe } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-leather-950 border-t-2 border-leather-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-16">
          <Logo size="medium" className="mx-auto mb-6 drop-shadow-lg" />
          <h2 className="text-3xl sm:text-4xl font-display text-gold-400 mb-2">TWO LAZY DOGS</h2>
          <p className="text-leather-300 font-serif text-lg">Bar & Grill • EST. 2025</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h3 className="text-2xl sm:text-3xl font-display text-gold-400 mb-6">Newsletter</h3>
            <p className="text-leather-300 mb-8 font-serif text-lg leading-relaxed">Subscribe for special events, seasonal menus, and exclusive offers</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-4 bg-leather-900/80 rounded-lg text-leather-100 placeholder-leather-500 focus:outline-none focus:ring-2 focus:ring-gold-400 border border-leather-700 font-serif text-base"
              />
              <button
                type="submit"
                className="px-6 py-4 bg-gold-400 text-leather-950 rounded-lg hover:bg-gold-500 transition-all duration-300 font-serif font-semibold text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Subscribe
              </button>
            </form>
          </div>
          
          <div className="lg:text-right">
            <h3 className="text-2xl sm:text-3xl font-display text-gold-400 mb-6">Connect With Us</h3>
            <div className="flex lg:justify-end gap-6 mb-8">
              <a href="https://instagram.com/twolazydogsdnvr" className="text-leather-300 hover:text-gold-400 transition-all duration-300 transform hover:scale-110 p-2">
                <Instagram size={32} />
              </a>
              <a href="mailto:twolazydogsllc@gmail.com" className="text-leather-300 hover:text-gold-400 transition-all duration-300 transform hover:scale-110 p-2">
                <Mail size={32} />
              </a>
              <a href="tel:3038755672" className="text-leather-300 hover:text-gold-400 transition-all duration-300 transform hover:scale-110 p-2">
                <Phone size={32} />
              </a>
              <a href="https://twolazydogs.com" className="text-leather-300 hover:text-gold-400 transition-all duration-300 transform hover:scale-110 p-2">
                <Globe size={32} />
              </a>
            </div>
            <div className="text-leather-300 lg:text-right space-y-2 font-serif">
              <p className="text-gold-400 font-display font-bold text-lg">Opening August 1st, 2025</p>
              <p className="text-base">Sunday – Wednesday: 11:00am – 12:00pm</p>
              <p className="text-base">Thursday – Saturday: 11:00am – 2:00am</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-leather-800/50 text-center">
          <p className="text-leather-500 font-serif text-base">© 2025 Two Lazy Dogs. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;