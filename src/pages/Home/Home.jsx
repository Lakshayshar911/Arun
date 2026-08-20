import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/w.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Arun Tour & Travels</h1>
          <p className="text-xl md:text-2xl mb-8">Your Journey, Our Responsibility</p>
          <button 
            onClick={() => navigate('/destination')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
          >
            Explore Now
          </button>
        </div>
      </div>
      {/* Popular Destinations */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations in Alwar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="/bala.jpg" alt="Bala Quila" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Bala Quila</h3>
                <p className="text-gray-600 mb-4">Historic fort with panoramic views</p>
                <button onClick={() => navigate('/destination')} className="text-blue-600 hover:text-blue-800">Learn More →</button>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="/sariska.jpg" alt="Sariska" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sariska Tiger Reserve</h3>
                <p className="text-gray-600 mb-4">Wildlife sanctuary and tiger reserve</p>
                <button onClick={() => navigate('/destination')} className="text-blue-600 hover:text-blue-800">Learn More →</button>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src="/ajab.jpg" alt="City Palace" className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Ajabgarh, Bhangarh</h3>
                <p className="text-gray-600 mb-4">Royal heritage and architecture</p>
                <button onClick={() => navigate('/destination')} className="text-blue-600 hover:text-blue-800">Learn More →</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vehicle Fleet */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Fleet</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Car Hire</h3>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• Luxury Sedans</li>
                <li>• SUVs</li>
                <li>• Economy Cars</li>
                <li>• Professional Drivers</li>
              </ul>
              <button onClick={() => navigate('/car-hire')} className="text-blue-600 hover:text-blue-800">View Cars →</button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Tempo Traveller</h3>
              <ul className="space-y-2 text-gray-600 mb-4">
                <li>• 20-Seater</li>
                <li>• AC & Non-AC Options</li>
              </ul>
              <button onClick={() => navigate('/tempo-traveller')} className="text-blue-600 hover:text-blue-800">View Tempo →</button>
            </div>
          </div>
        </div>
      </div>

      {/* About Preview */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">With over a decade of experience, we provide the best travel services in Alwar</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe Travel</h3>
              <p className="text-gray-600">Your safety is our priority</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
              <p className="text-gray-600">Professional service since 2011</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600">Competitive rates guaranteed</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <button onClick={() => navigate('/about')} className="text-blue-600 hover:text-blue-800 font-semibold">
              Learn More About Us →
            </button>
          </div>
        </div>
      </div>

 {/* Features Section */}
 <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              onClick={() => navigate('/car-hire')}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-4">Car Rental</h3>
              <p className="text-gray-600">Wide range of vehicles for your comfort</p>
            </div>
            <div 
              onClick={() => navigate('/destination')}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-4">Tour Packages</h3>
              <p className="text-gray-600">Customized tours for memorable experiences</p>
            </div>
            <div 
              onClick={() => navigate('/tempo-traveller')}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-4">Tempo Traveller</h3>
              <p className="text-gray-600">Perfect for group travels</p>
            </div>
            <div 
              onClick={() => navigate('/gallery')}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-4">Gallery</h3>
              <p className="text-gray-600">View our travel memories</p>
            </div>
            <div 
              onClick={() => navigate('/about')}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-gray-600">Learn more about our services</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-600 mb-4">Always here to help you</p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-900">Arun Sharma</p>
                    <a href="tel:+918955554771" className="text-blue-600 hover:text-blue-800">+91 8955554771</a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div className="flex items-center space-x-3 mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <div>
                    <p className="font-medium text-gray-900">Email Us</p>
                    <a href="mailto:aruntravelscompany@gmail.com" className="text-blue-600 hover:text-blue-800">aruntravelscompany@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Gallery Preview */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Travel Memories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="/travel.jpg" alt="Travel" className="w-full h-48 object-cover rounded-lg"/>
            <img src="/alwar.jpg" alt="Alwar" className="w-full h-48 object-cover rounded-lg"/>
            <img src="/pandupoal.jpg" alt="Pandu Pol" className="w-full h-48 object-cover rounded-lg"/>
            <img src="/mountain.jpg" alt="Mountain" className="w-full h-48 object-cover rounded-lg"/>
          </div>
          <div className="text-center mt-8">
            <button 
              onClick={() => navigate('/gallery')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              View Full Gallery
            </button>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-white mb-8">Book your next adventure with us today!</p>
          <button 
            onClick={() => navigate('/booking')}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Footer Contact Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div>
                    <p className="font-medium">Arun Sharma</p>
                    <a href="tel:+918955554771" className="text-blue-400 hover:text-blue-300">+91 8955554771</a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div className="flex items-center space-x-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <div>
                    <p className="font-medium">Email Us</p>
                    <a href="mailto:aruntravelscompany@gmail.com" className="text-blue-400 hover:text-blue-300">aruntravelscompany@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => navigate('/destination')} className="text-gray-300 hover:text-white">Destinations</button></li>
                <li><button onClick={() => navigate('/car-hire')} className="text-gray-300 hover:text-white">Car Hire</button></li>
                <li><button onClick={() => navigate('/tempo-traveller')} className="text-gray-300 hover:text-white">Tempo Traveller</button></li>
                <li><button onClick={() => navigate('/gallery')} className="text-gray-300 hover:text-white">Gallery</button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Address</h3>
              <p className="text-gray-300">
                Arun Tour & Travels Alwar<br />
                Alwar, Rajasthan<br />
                India
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <p className="text-gray-300">
                Monday - Sunday<br />
                24/7 Available
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Arun Tour & Travels . All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

