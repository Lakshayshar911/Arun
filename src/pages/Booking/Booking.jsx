import React from 'react';
import { useLocation } from 'react-router-dom';

const Booking = () => {
  const location = useLocation();
  const packageDetails = location.state?.package;

  const handleBookNow = () => {
    const message = packageDetails 
      ? `Hi, I'm interested in booking: ${packageDetails.name}\nDuration: ${packageDetails.duration}\nPrice: ${packageDetails.price}`
      : "Hi, I'm interested in booking a tour";
    
    const whatsappUrl = `https://wa.me/918955554771?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Book Your Tour</h1>
        
        {/* {packageDetails && (
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-2">{packageDetails.name}</h2>
            <p className="text-gray-600">{packageDetails.duration}</p>
            <p className="text-blue-600 font-bold">{packageDetails.price}</p>
          </div>
        )} */}

        <button
          onClick={handleBookNow}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Book Now on WhatsApp
        </button>
      </div>
    </div>
  );
};

export default Booking;