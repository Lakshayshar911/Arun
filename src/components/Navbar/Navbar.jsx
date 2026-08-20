import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              Arun Tour & Travel
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link to="/destination" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Destination</Link>
            <Link to="/car-hire" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Car Hire</Link>
            <Link to="/tempo-traveller" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Tempo Traveller</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About Us</Link>
            <Link to="/gallery" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Gallery</Link>
            <a 
              href="https://wa.me/918955554771" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link to="/destination" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Destination</Link>
          <Link to="/car-hire" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Car Hire</Link>
          <Link to="/tempo-traveller" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Tempo Traveller</Link>
          <Link to="/about" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">About Us</Link>
          <Link to="/gallery" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Gallery</Link>
          <a 
            href="https://wa.me/918955554771" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block bg-green-500 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-green-600"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;