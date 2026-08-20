import React from 'react';

const TempoTraveller = () => {
  const tempos = [
    { id: 1, image: '/w4.jpg', name: '20 Seater Tempo', price: '₹24/km', features: 'AC, Premium Seats, LED TV' },
  ];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Tempo Traveller Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tempos.map((tempo) => (
            <div key={tempo.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src={tempo.image} 
                  alt={tempo.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{tempo.name}</h3>
                <p className="text-gray-600 mb-2">Starting from {tempo.price}</p>
                <p className="text-sm text-gray-500 mb-4">{tempo.features}</p>
                <div className="space-y-2">
                  <button 
                    onClick={() => {
                      const message = `Hi, I'm interested in booking ${tempo.name}\nPrice: ${tempo.price}\nFeatures: ${tempo.features}`;
                      window.open(`https://wa.me/918955554771?text=${encodeURIComponent(message)}`, '_blank');
                    }}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TempoTraveller;
