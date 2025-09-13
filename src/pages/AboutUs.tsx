import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <NavBar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-leather-950">
          <div className="absolute inset-0 bg-black/50" 
               style={{
                 backgroundImage: 'url("https://images.pexels.com/photos/1267696/pexels-photo-1267696.jpeg?auto=compress&cs=tinysrgb&w=1920")',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 backgroundBlendMode: 'overlay'
               }} />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-6xl font-display text-gold-400 mb-6">Our Story</h1>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-leather-950">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="menu-card text-center mb-16">
              <p className="text-xl text-leather-200 font-serif mb-6">
                Founded in 2025, Two Lazy Dogs was born from a simple idea: create a welcoming space where great food, drinks, and community come together.
              </p>
              <p className="text-lg text-leather-300 font-serif">
                We're not your average dive bar—we're the kind of place where the beer is cold, the food is comforting, and the vibes are always just right. Our name pays homage to the two lazy pups who inspired the warm, laid-back atmosphere we're known for.
              </p>
            </div>

            <h2 className="text-4xl font-display text-gold-400 mb-8 text-center">Meet the Team</h2>
            
            {/* Team Member 1 - Left aligned */}
            <div className="menu-card mb-12 md:flex items-center gap-8">
              <img
                src="https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Chase Phillips"
                className="w-full md:w-1/3 h-64 object-cover rounded-lg mb-6 md:mb-0"
              />
              <div>
                <h3 className="text-2xl font-display text-gold-400 mb-3">Chase Phillips</h3>
                <p className="text-leather-300 font-serif">
                  Chase brings more than two decades of experience, from working festivals and weddings with his family's catering business to winter seasons at Steven's family restaurant and bartending all over Denver. When he's not behind the bar, in the kitchen, or perfecting century-old family BBQ recipes, Chase serves as a trusted advisor to the Mayor of Denver. His blend of passion, drive, and precision keeps the kitchen sizzling and the bar humming.
                </p>
              </div>
            </div>

            {/* Team Member 2 - Right aligned */}
            <div className="menu-card mb-12 md:flex flex-row-reverse items-center gap-8">
              <img
                src="https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Steven Sen"
                className="w-full md:w-1/3 h-64 object-cover rounded-lg mb-6 md:mb-0"
              />
              <div>
                <h3 className="text-2xl font-display text-gold-400 mb-3">Steven Sen</h3>
                <p className="text-leather-300 font-serif">
                  Steven grew up in his family's restaurant and was ready to start a venture of his own. With deep roots in hospitality and a finance degree to back it up, Steven is the steady hand guiding our back-end operations, keeping the bills paid and lights on. He still works full time in securities and insurance, but make sure to catch him when he pops in on weekends.
                </p>
              </div>
            </div>

            {/* Team Member 3 - Left aligned */}
            <div className="menu-card md:flex items-center gap-8">
              <img
                src="https://images.pexels.com/photos/4253300/pexels-photo-4253300.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Michael Alvarado"
                className="w-full md:w-1/3 h-64 object-cover rounded-lg mb-6 md:mb-0"
              />
              <div>
                <h3 className="text-2xl font-display text-gold-400 mb-3">Michael Alvarado</h3>
                <p className="text-leather-300 font-serif">
                  Michael, our Assistant GM and bar maestro, is a Denver food scene veteran. He's the kind of bartender who remembers your drink and your dog's name. Michael brings the laughs, energy, and serious cocktail chops that set the tone for the Two Lazy Dogs experience.
                </p>
              </div>
            </div>

            {/* Community Impact Section */}
            <div className="menu-card mt-12">
              <h3 className="text-2xl font-display text-gold-400 mb-4 text-center">Community Impact</h3>
              <div className="text-center mb-8">
                <p className="text-xl text-leather-200 font-serif mb-3">1% of net profits to non-profits</p>
                <p className="text-leather-300 font-serif italic">Etc. Let us know your favorite non-profit we should support!</p>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div className="text-leather-300">Foothills Animal Shelter</div>
                <div className="text-leather-300">Denver Dream Center</div>
                <div className="text-leather-300">Food Bank of the Rockies</div>
              </div>
            </div>

            <div className="menu-card mt-12 text-center">
              <p className="text-lg text-leather-200 font-serif">
                Together, this trio is redefining what it means to be a dive bar in the heart of downtown—keeping things unpretentious, high quality, and full of character. From our signature dog-themed cocktails and quirky specials to a dog-friendly patio and game nights that bring the neighborhood together, Two Lazy Dogs isn't just any dive bar—it's your dive bar.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;