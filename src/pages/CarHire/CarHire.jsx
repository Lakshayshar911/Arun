import React from 'react';

const CarHire = () => {
  const cars = [
    { id: 1, image: '/w.jpg', name: 'Innova,Crysta 8 seater', price: '₹16/km' },
    { id: 2, image: '/w1.jpg', name: 'Swift Dzire', price: '₹10/km' },
    { id: 3, image: '/w3.jpg', name: 'Ciaz', price: '₹12/day' },
    { id: 4, image: '/w5.jpg', name: 'Baleno', price: '₹10/km' },
    { id: 5, image: '/w6.jpg', name: 'Ertiga', price: '₹12/km' },
    { id: 6, image: '/w8.jpg', name: 'Fronx', price: '₹10/km' },
    { id: 7, image: '/w9.jpg', name: 'Marrazo', price: '₹15/km' }
  ];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Car Hire Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div key={car.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{car.name}</h3>
                <p className="text-gray-600 mb-4">Starting from {car.price}</p>
                <button 
                  onClick={() => {
                    const message = `Hi, I'm interested in hiring ${car.name} (${car.price})`;
                    window.open(`https://wa.me/918955554771?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarHire;









//                                                                                                                                         