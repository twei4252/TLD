import React from 'react';
import { Calendar, Heart, Users } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about-us" className="py-16 sm:py-24 bg-leather-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-20">
          <Users className="mx-auto text-gold-400 mb-4" size={48} />
          <h2 className="text-4xl sm:text-6xl font-display text-gold-400 mb-4">About Us</h2>
          <p className="text-lg sm:text-xl font-serif text-leather-300">More than just a bar - we're part of the community</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="menu-card">
            <Calendar className="text-gold-400 mb-4" size={32} />
            <h3 className="text-2xl font-display text-gold-400 mb-4">Holiday Pop-Ups</h3>
            <p className="text-leather-300 mb-6">
              Throughout the year, we transform our space to celebrate Denver's vibrant culture and holidays. Our themed events bring the community together for unforgettable experiences.
            </p>
            <p className="text-leather-300 mb-4">
              We partner with local firms to create unique celebrations for:
            </p>
            <ul className="space-y-2 text-leather-300">
              <li>• Parade of Lights</li>
              <li>• Christmas Celebrations</li>
              <li>• Fourth of July</li>
              <li>• Halloween</li>
            </ul>
          </div>

          <div className="menu-card">
            <Heart className="text-gold-400 mb-4" size={32} />
            <h3 className="text-2xl font-display text-gold-400 mb-4">Giving Back</h3>
            <p className="text-leather-300 mb-6">
              Two Lazy Dogs is committed to making a positive impact in the Denver community. We believe in supporting local causes and creating meaningful change.
            </p>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-serif text-gold-400 mb-2">Community Events</h4>
                <p className="text-leather-300">Regular Dog Adoption Days connecting furry friends with forever homes</p>
              </div>
              <div>
                <h4 className="text-xl font-serif text-gold-400 mb-2">Local Impact</h4>
                <p className="text-leather-300 mb-2">1% of net profits donated to local charities:</p>
                <ul className="space-y-2 text-leather-300">
                  <li className="pl-4">- Foothills Animal Shelter</li>
                  <li className="pl-4">- Denver Dream Center</li>
                  <li className="pl-4">- Food Bank of the Rockies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gold-950/30 border border-gold-900/20 p-8 rounded-lg text-center backdrop-blur-sm">
          <h3 className="text-2xl font-display text-gold-400 mb-4">Our Story</h3>
          <p className="text-lg text-leather-200 font-serif max-w-3xl mx-auto">
            Founded in 2025, Two Lazy Dogs was born from a simple idea: create a welcoming space where great food, drinks, and community come together. Our name pays homage to our founders' beloved lazy pups who inspired the warm, laid-back atmosphere we're known for.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;