import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import FoodMenu from './components/FoodMenu';
import DrinksMenu from './components/DrinksMenu';
import Events from './components/Events';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <NavBar />
      <main className="space-y-0">
        <Hero />
        <FoodMenu />
        <DrinksMenu />
        <Events />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App