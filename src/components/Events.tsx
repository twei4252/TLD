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
    <section id="events" className="py-16 sm:py-24 bg-leather-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-20">
          <Calendar className="mx-auto text-gold-400 mb-4" size={48} />
          <h2 className="text-4xl sm:text-6xl font-display text-gold-400 mb-4">Specials & Activities</h2>
          <p className="text-xl font-serif text-leather-300">
            Unusual specials. Unexpected fun. Unapologetically Denver.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {regularEvents.map((event) => (
            <div key={event.name} className="menu-card hover:border-gold-400/30 transition-colors">
              <event.icon className="text-gold-400 mb-4" size={32} />
              <h3 className="text-xl font-display text-gold-400 mb-3">{event.name}</h3>
              <p className="text-leather-300">{event.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gold-950/30 border border-gold-900/20 p-8 rounded-lg text-center backdrop-blur-sm">
          <h3 className="text-2xl font-display text-gold-400 mb-4">Pre-Show & Post-Event Destination</h3>
          <p className="text-lg text-leather-200 font-serif">
            The perfect spot before or after your downtown Denver entertainment
          </p>
          <p className="text-leather-300 mt-2">
            Event-themed menu items and promotions available during major shows and conventions
          </p>
        </div>
      </div>
    </section>
  );
};

export default Events;