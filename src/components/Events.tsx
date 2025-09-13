import React from 'react';
import { Music, Calendar, Users, Beer, GamepadIcon } from 'lucide-react';

const Events = () => {
  const regularEvents = [
    {
      name: "Wing Wednesday",
      description: "Coming soon!",
      icon: Calendar
    },
    {
      name: "Buy Your Friend a Beer",
      description: "Because nothing says 'I miss you' like a cold one waiting for you at the bar",
      icon: Beer
    },
    {
      name: "Gaming & Entertainment",
      description: "Darts tournaments, free billiards, Time Crisis 4 arcade, and monthly Mario Kart & Smash Bros tournaments",
      icon: GamepadIcon
    },
    {
      name: "TouchTunes Jukebox",
      description: "Set the vibe with your favorite tunes",
      icon: Music
    }
  ];

  return (
    <section id="events" className="py-20 sm:py-28 bg-leather-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-title">
          <Calendar className="section-title-icon" size={56} />
          <h2 className="section-heading">Specials & Activities</h2>
          <p className="section-subheading">
            Unusual specials. Unexpected fun. Unapologetically Denver.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {regularEvents.map((event) => (
            <div key={event.name} className="menu-card text-center">
              <event.icon className="text-gold-400 mb-4 mx-auto" size={40} />
              <h3 className="text-xl sm:text-2xl font-display text-gold-400 mb-4">{event.name}</h3>
              <p className="text-leather-300 font-serif leading-relaxed">{event.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 lg:mt-16 bg-gradient-to-r from-gold-950/40 to-gold-900/30 border border-gold-900/30 p-8 lg:p-12 rounded-xl text-center backdrop-blur-sm">
          <h3 className="text-3xl sm:text-4xl font-display text-gold-400 mb-6">Pre-Show & Post-Event Destination</h3>
          <p className="text-xl text-leather-200 font-serif mb-4">
            The perfect spot before or after your downtown Denver entertainment
          </p>
          <p className="text-leather-300 font-serif">
            Event-themed menu items and promotions available during major shows and conventions
          </p>
        </div>
      </div>
    </section>
  );
};

export default Events;