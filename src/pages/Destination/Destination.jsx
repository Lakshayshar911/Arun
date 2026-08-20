import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';

const Destination = () => {
  const navigate = useNavigate();
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const packages = [
    {
      id: 1,
      name: "Alwar Sightseeing",
      price: "₹5,000",
      images: ['/bala.jpg', '/moosi.jpg', '/siliserh.jpg'],
      description: "Explore the rich heritage of Alwar"
    },
    {
      id: 2,
      name: "Ajabgarh, Bhangarh visit",
      price: "₹7,000",
      images: ['/ajab.jpg', '/bhan.jpg'],
      description: "A haunted Fort in Alwar to Visit"
    },
    {
      id: 3,
      name: "Sariska Tiger Reserve ",
      price: "₹5,000", 
      images: ['/sariska.jpg','/str.jpg'],
      description: "Explore the beauty of Nature in Alwar Forest"
    },
    {
      id: 4,
      name: "Tijara Jain Temple  ",
      price: "₹6,000",
      images: ['Tijara.jpg'],
      description: "Historical place to Visit near Alwar City"
    },
    {
      id: 5,
      name: "Pandupol ",
      price: "₹6,000",
      images: ['/pandupoal.jpg','/Pandupolmandir.png'],
      description: "A Hanuman temple located within Sariska National Park"
    },
    {
      id: 6,
      name: "Khatu Shyam ji",
      price: "₹9,500",
      images: ['/shyamji.jpg'],
      description:"A Travel Package for 20 peoples to travel comfortably"
    },
    {
      id: 7,
      name: "Khatu Shyam ji & Salasar Balaji " ,
      price: "15,500",
      images: ['/shyamji.jpg','/balaji.jpg.webp'],
      description:"A Travel Package for 20 peoples to travel comfortably"
    }
  ];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Destinations</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                {pkg.images.length > 1 ? (
                  <Slider {...sliderSettings}>
                    {pkg.images.map((image, index) => (
                      <div key={index} className="h-64">
                        <img
                          src={image}
                          alt={`${pkg.name} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <img
                    src={pkg.images[0]}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-2">{pkg.duration}</p>
                <p className="text-gray-500 mb-4 text-sm">{pkg.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-blue-600">{pkg.price}</span>
                  <button 
                    onClick={() => navigate('/booking', { state: { package: pkg } })}
                    className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
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

export default Destination;

  
  
  
  
  
  
  
  
  // 