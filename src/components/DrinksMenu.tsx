import React from 'react';
import { Beer, Download } from 'lucide-react';

const DrinksMenu = () => {
  const menu = [
    {
      category: "Craft Cocktails",
      description: "Expertly crafted with premium spirits",
      items: [
        { name: "Smoky Old Fashioned", description: "Bourbon, maple, bitters, applewood smoke", price: "$12" },
        { name: "Denver Mule", description: "Local vodka, ginger beer, lime, mint", price: "$10" },
        { name: "Spiced Paloma", description: "Mezcal, grapefruit, jalapeño, salt rim", price: "$11" }
      ]
    },
    {
      category: "Local Draft Beers",
      description: "Rotating selection of Colorado's finest brews",
      items: [
        { name: "IPA Selection", description: "Ask about our current hoppy offerings", price: "$7" },
        { name: "Seasonal Lager", description: "Clean, crisp, and refreshing", price: "$6" },
        { name: "Craft Stout", description: "Rich and full-bodied", price: "$7" }
      ]
    },
    {
      category: "Wine List",
      description: "Curated selection of wines by the glass",
      items: [
        { name: "Red Blend", description: "Full-bodied, notes of dark fruit and spice", price: "$9" },
        { name: "Chardonnay", description: "Buttery, oaked with vanilla finish", price: "$8" },
        { name: "Rosé", description: "Dry, crisp with subtle berry notes", price: "$8" }
      ]
    }
  ];

  return (
    <section id="drinks-menu" className="py-20 sm:py-28 bg-leather-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-title">
          <Beer className="section-title-icon" size={56} />
          <h2 className="section-heading">Drinks Menu</h2>
          <p className="section-subheading mb-8">Craft cocktails & local brews</p>
          <a href="#" className="btn-download">
            <Download size={18} className="mr-2" />
            Download Drinks Menu (PDF)
          </a>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {menu.map((section) => (
            <div key={section.category} className="menu-card">
              <h3 className="text-2xl sm:text-3xl font-display text-gold-400 mb-3">{section.category}</h3>
              <p className="text-leather-300 mb-6 text-base font-serif">{section.description}</p>
              <div className="space-y-4">
                {section.items.map((item) => (
                  <div key={item.name} className="menu-item">
                    <div className="menu-item-header">
                      <h4 className="menu-item-title">{item.name}</h4>
                      <span className="menu-item-price">{item.price}</span>
                    </div>
                    <p className="menu-item-description">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Full Spirits List Section */}
        <div id="spirits-list" className="mt-12 lg:mt-16">
          <div className="menu-card text-center">
            <h3 className="text-3xl sm:text-4xl font-display text-gold-400 mb-4">Full Spirits List</h3>
            <p className="text-lg text-leather-300 font-serif mb-6">Premium spirits, whiskeys, and specialty liquors</p>
            <a href="#" className="btn-download">
              <Download size={18} className="mr-2" />
              Download Full Spirits Menu (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrinksMenu;