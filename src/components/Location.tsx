import React from 'react';
import { MapPin, Clock, Phone, Mail, Instagram } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-24 bg-leather-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <MapPin className="mx-auto text-gold-400 mb-4" size={48} />
          <h2 className="text-6xl font-display text-gold-400 mb-4">Visit Us</h2>
          <p className="text-xl font-serif text-leather-300">In the heart of downtown Denver</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="menu-card">
              <div className="flex items-center mb-6">
                <Clock className="text-gold-400 mr-3" size={24} />
                <h3 className="text-2xl font-display text-gold-400">Hours</h3>
              </div>
              <div className="space-y-3 text-lg">
                <p className="flex justify-between text-leather-300">
                  <span>Sunday – Wednesday</span>
                  <span>11:00am – 12:00pm</span>
                </p>
                <p className="flex justify-between text-leather-300">
                  <span>Thursday – Saturday</span>
                  <span>11:00am – 2:00am</span>
                </p>
                <div className="border-t border-leather-700/30 pt-3 mt-3">
                  <p className="text-leather-400 text-sm">Closed for Thanksgiving & Christmas</p>
                  <p className="text-gold-400 text-sm mt-2">Opening August 1st, 2025</p>
                </div>
              </div>
            </div>
            
            <div className="menu-card">
              <div className="flex items-center mb-6">
                <MapPin className="text-gold-400 mr-3" size={24} />
                <h3 className="text-2xl font-display text-gold-400">Contact</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center text-leather-300">
                  <Phone className="mr-2" size={18} />
                  <a href="tel:3038755672" className="hover:text-gold-400 transition-colors">(303) 875-5672</a>
                </div>
                <div className="flex items-center text-leather-300">
                  <Mail className="mr-2" size={18} />
                  <a href="mailto:twolazydogsllc@gmail.com" className="hover:text-gold-400 transition-colors">twolazydogsllc@gmail.com</a>
                </div>
                <div className="flex items-center text-leather-300">
                  <Instagram className="mr-2" size={18} />
                  <a href="https://instagram.com/twolazydogsdnvr" className="hover:text-gold-400 transition-colors">@twolazydogsdnvr</a>
                </div>
                <p className="text-leather-300">1531 Champa Street, Denver, CO</p>
              </div>
            </div>
          </div>
          
          <div className="h-[500px] rounded-lg overflow-hidden border border-leather-700/30">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.8270823041067!2d-104.99478492346847!3d39.74641639397343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78c4f43d6bad%3A0x7df7555da461eddb!2s1531%20Champa%20St%2C%20Denver%2C%20CO%2080202!5e0!3m2!1sen!2sus!4v1709913046065!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;