import React from "react";

const Header = () => (
  <header className="bg-white">
    <div className="container mx-auto px-4 lg:px-8 py-5">
      <nav className="flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-gray-900">Tax Plus Accountants</a>
        <div className="flex items-center gap-8">
          <a href="/services" className="text-gray-700 hover:text-gray-900 font-medium">Services</a>
          <a href="/about" className="text-gray-700 hover:text-gray-900 font-medium">About</a>
          <a href="/contact" className="text-gray-700 hover:text-gray-900 font-medium">Contact</a>
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-md font-medium hover:bg-blue-700 transition">
            Contact us
          </button>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
