import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Forex Blog */}
        <div>
          <h2 className="text-lg font-semibold mb-4">About Forex Blog</h2>
          <p className="text-gray-400">
            Stay updated with the latest changes in gold prices, currency exchange rates, 
            and McDonald's price trends worldwide. We provide timely and accurate insights 
            to help you make informed decisions.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/gold-prices" className="text-gray-400 hover:text-white">
                Gold Prices
              </a>
            </li>
            <li>
              <a href="/currency-updates" className="text-gray-400 hover:text-white">
                Currency Updates
              </a>
            </li>
            <li>
              <a href="/mcdonald-prices" className="text-gray-400 hover:text-white">
                McDonald's Prices
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Latest Updates */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Latest Updates</h2>
          <ul className="space-y-2">
            <li className="text-gray-400">
              🟢 Gold: $1950/oz <span className="text-green-400">(↑ 0.5%)</span>
            </li>
            <li className="text-gray-400">
              🔵 USD/EUR: 1.10 <span className="text-red-400">(↓ 0.2%)</span>
            </li>
            <li className="text-gray-400">
              🍔 McDonald's: Big Mac $5.50 <span className="text-green-400">(↑ $0.10)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-800 text-gray-400 py-4">
        <div className="container mx-auto text-center">
            <h1>Create By Sadia Imran</h1>
          <p>© 2025 Forex Blog. Keeping you informed, always.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
