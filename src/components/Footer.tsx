import React from 'react';
import { Instagram, Mail, Phone, Globe } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-leather-950 border-t border-leather-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <Logo size="medium" className="mx-auto rounded-full mb-4" />
          <h2 className="text-3xl font-display text-gold-400">TWO LAZY DOGS</h2>
          <p className="text-leather-300 mt-2 font-serif">Bar & Grill • EST. 2025</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-display text-gold-400 mb-6">Newsletter</h3>
            <p className="text-leather-300 mb-6 font-serif">Subscribe for special events, seasonal menus, and exclusive offers</p>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-leather-900 rounded-md text-leather-100 placeholder-leather-500 focus:outline-none focus:ring-2 focus:ring-gold-400 border border-leather-700"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gold-400 text-leather-950 rounded-md hover:bg-gold-500 transition-colors font-serif font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>
          
          <div className="md:text-right">
            <h3 className="text-2xl font-display text-gold-400 mb-6">Connect With Us</h3>
            <div className="flex md:justify-end gap-6 mb-4">
              <a href="https://instagram.com/twolazydogsdnvr" className="text-leather-300 hover:text-gold-400 transition-colors">
                <Instagram size={28} />
              </a>
              <a href="mailto:twolazydogsllc@gmail.com" className="text-leather-300 hover:text-gold-400 transition-colors">
                <Mail size={28} />
              </a>
              <a href="tel:3038755672" className="text-leather-300 hover:text-gold-400 transition-colors">
                <Phone size={28} />
              </a>
              <a href="https://twolazydogs.com" className="text-leather-300 hover:text-gold-400 transition-colors">
                <Globe size={28} />
              </a>
            </div>
            <div className="text-leather-300 md:text-right space-y-1 text-sm">
              <p>Opening August 1st, 2025</p>
              <p>Sunday – Wednesday: 11:00am – 12:00pm</p>
              <p>Thursday – Saturday: 11:00am – 2:00am</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-leather-800 text-center">
          <p className="text-leather-500 font-serif">© 2025 Two Lazy Dogs. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;