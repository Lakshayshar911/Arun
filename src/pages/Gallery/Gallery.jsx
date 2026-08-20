import React from 'react';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: '/travel.jpg',
      category: 'Travel',
      description: 'Exploring beautiful destinations'
    },
    {
      id: 2,
      image: '/food.jpg',
      category: 'Food',
      description: 'Delicious local cuisines'
    },
    {
      id: 3,
      image: '/mountain.jpg',
      category: 'Nature',
      description: 'Scenic landscapes and wildlife'
    },
    {
      id : 4,
      image: '/aalwar.jpg',
      category: 'Adventure',
      description: 'Unforgettable experiences'
    },
    {
      id: 5,
      image: '/alwar.jpg',
      category: 'History',
      description: 'Immersing in historical sites'
    },
    {
      id: 6,
      image: '/pandupoal.jpg',
      category: 'Pandu-poal',
      description: 'Exploring vibrant cities'
    }
  ];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Gallery</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.category}
                  className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.category}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
// 