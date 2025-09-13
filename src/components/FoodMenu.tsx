import React from 'react';
import { UtensilsCrossed, Download } from 'lucide-react';

const FoodMenu = () => {
  const menu = [
    {
      category: "Bites",
      description: "Perfect for sharing or starting your meal",
      items: [
        { name: "Chips & Salsa", description: "House-made tortilla chips served with salsa rojo & salsa verde", price: "$5" },
        { name: "Smoked Wings", description: "Wings smoked to delicious perfection, served with homemade ranch", price: "$10" },
        { name: "Soft Pretzel", description: "Served with cheese sauce", price: "$5" },
        { name: "Chicken Tenders", description: "Juicy fried chicken tenders served with ranch or BBQ sauce", price: "$8" },
        { name: "Fried Pickles", description: "Breaded and fried pickle chips, served with ranch", price: "$6" },
        { name: "Nachos", description: "Homemade tortilla chips, pico de gallo, jalapeños, queso, fresh cilantro", price: "$8" },
        { name: "Quesadilla", description: "Three-cheese blend, bell peppers, jalapeños, scallions", price: "$8" },
        { name: "Homemade Mac & Cheese", description: "Baked with a six-cheese blend", price: "$5" },
        { name: "Fries", description: "Hot and fresh seasoned fries", price: "$4" },
        { name: "Loaded Tots", description: "Crispy tots loaded with queso, sour cream, and scallions", price: "$7" }
      ]
    },
    {
      category: "Chow",
      description: "Hearty classics made with care",
      items: [
        { name: "TLD Burger", description: "Signature burger topped with cheddar cheese, lettuce, onion, pickle, and mayo, served with fries", price: "$9" },
        { name: "Veggie Burger", description: "Black bean burger topped with cheddar cheese, lettuce, onion, pickle, and mayo, served with fries", price: "$8" },
        { name: "Chicken Wrap", description: "Grilled or fried chicken, lettuce, tomatoes, shredded cheese, garlic ranch", price: "$9" },
        { name: "Chicken Sandwich", description: "Grilled or fried chicken, lettuce, tomatoes, pickles, garlic aioli", price: "$9" },
        { name: "Cali Burrito", description: "Grilled steak, fries, guacamole, pico de gallo, sour cream, shredded cheese, served with salsa rojo or verde", price: "$10" },
        { name: "TLD Burrito", description: "Rice, black beans, shredded cheese, bell pepper, onion", price: "$5" }
      ]
    },
    {
      category: "Soup & Salad",
      description: "Fresh and light options",
      items: [
        { name: "White Chicken Chili", description: "Shredded Chicken, cannellini beans, green chiles, corn, fresh cilantro", price: "$6" },
        { name: "Soup of the Month", description: "Ask about the soup of the month", price: "$6" },
        { name: "House Salad", description: "Spinach, arugula, carrots, tomatoes, croutons. Dressing options: Ranch, house vinaigrette, thousand island", price: "$6" },
        { name: "Caesar Salad", description: "Romaine lettuce, Caesar dressing, croutons, and Parmesan", price: "$7" }
      ]
    },
    {
      category: "Street Tacos",
      description: "All tacos served with pico de gallo & onions",
      items: [
        { name: "Steak Taco", description: "Premium grilled steak", price: "$3.50" },
        { name: "Chicken Taco", description: "Seasoned grilled chicken", price: "$2.50" },
        { name: "Carnitas Taco", description: "Slow-cooked pork", price: "$2.50" }
      ]
    }
  ];

  const addOns = [
    { name: "Side of guacamole", price: "$3" },
    { name: "Side of queso", price: "Market Price" },
    { name: "Add grilled chicken or carnitas", price: "$3" },
    { name: "Add steak or salmon", price: "$5" }
  ];

  return (
    <section id="food-menu" className="py-20 sm:py-28 bg-leather-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-title">
          <UtensilsCrossed className="section-title-icon" size={56} />
          <h2 className="section-heading">Food Menu</h2>
          <p className="section-subheading mb-8">Classic pub fare with a modern twist</p>
          <a href="#" className="btn-download">
            <Download size={18} className="mr-2" />
            Download Food Menu (PDF)
          </a>
        </div>
        
        <div className="grid gap-6 lg:gap-8">
          {/* First row: Bites */}
          <div className="menu-card">
            <h3 className="text-2xl sm:text-3xl font-display text-gold-400 mb-3">{menu[0].category}</h3>
            <p className="text-leather-300 mb-6 text-base font-serif">{menu[0].description}</p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {menu[0].items.map((item) => (
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

          {/* Second row: Chow and Soup & Salad */}
          <div className="grid lg:grid-cols-7 gap-6">
            {/* Chow - spans 4 columns */}
            <div className="lg:col-span-4 menu-card">
              <h3 className="text-2xl sm:text-3xl font-display text-gold-400 mb-3">{menu[1].category}</h3>
              <p className="text-leather-300 mb-6 text-base font-serif">{menu[1].description}</p>
              <div className="space-y-4">
                {menu[1].items.map((item) => (
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

            {/* Right column: Soup & Salad and Add-ons - spans 3 columns */}
            <div className="lg:col-span-3 space-y-6">
              {/* Soup & Salad */}
              <div className="menu-card">
                <h3 className="text-2xl sm:text-3xl font-display text-gold-400 mb-3">{menu[2].category}</h3>
                <p className="text-leather-300 mb-6 text-base font-serif">{menu[2].description}</p>
                <div className="space-y-4">
                  {menu[2].items.map((item) => (
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

              {/* Add-ons */}
              <div className="menu-card">
                <h3 className="text-2xl sm:text-3xl font-display text-gold-400 mb-4">Add-ons & Extras</h3>
                <div className="space-y-3">
                  {addOns.map((addon) => (
                    <div key={addon.name} className="flex justify-between items-center border-b border-leather-700/30 pb-3 last:border-0">
                      <span className="text-base text-leather-200 font-serif">{addon.name}</span>
                      <span className="text-gold-400 font-display font-bold ml-4">{addon.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Third row: Street Tacos */}
          <div className="menu-card">
            <h3 className="text-2xl sm:text-3xl font-display text-gold-400 mb-3">{menu[3].category}</h3>
            <p className="text-leather-300 mb-6 text-base font-serif">{menu[3].description}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
              {menu[3].items.map((item) => (
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
        </div>
      </div>
    </section>
  );
};

export default FoodMenu;