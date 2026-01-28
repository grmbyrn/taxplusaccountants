
'use client';
import React, { useState } from "react";


const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 lg:px-8 py-5">
        <nav className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-gray-900">Tax Plus Accountants</a>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/services" className="text-gray-700 hover:text-gray-900 font-medium">Services</a>
            <a href="/about" className="text-gray-700 hover:text-gray-900 font-medium">About</a>
            <a href="/contact" className="text-gray-700 hover:text-gray-900 font-medium">Contact</a>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-md font-medium hover:bg-blue-700 transition">
              Contact us
            </button>
          </div>
          {/* Hamburger for mobile */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg className="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-neutral-200 px-4 py-6 space-y-4">
          <a href="/services" className="block text-gray-900 font-medium py-2">Services</a>
          <a href="/about" className="block text-gray-900 font-medium py-2">About</a>
          <a href="/contact" className="block text-gray-900 font-medium py-2">Contact</a>
          <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition mt-2">
            Contact us
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
