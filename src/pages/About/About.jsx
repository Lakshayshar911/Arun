import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                Arun Tours & Travels was founded in 2010, establishing itself as the Best Tour and Travel Agency in Alwar. 
                Under the visionary leadership of our CEO, Mr. Arun Sharma, our company has achieved 
                new heights in the field of Tour and Travel.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Services</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Airline Ticketing</li>
                <li>Railway Ticketing</li>
                <li>Hotel Booking</li>
                <li>Car and Coach Booking</li>
                <li>Event Organization</li>
                <li>Holiday Packages</li>
                <li>Alwar Sightseeing</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment</h2>
              <p className="text-gray-600 leading-relaxed">
                As a premier tour and travel service provider in Alwar, Rajasthan, we prioritize our clients' needs 
                and safety. Our experienced drivers ensure your journey is secure and comfortable. We specialize in 
                creating unique travel plans tailored to your budget, making your trips meaningful and interesting.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Expertise</h2>
              <p className="text-gray-600 leading-relaxed">
                Best Tour and Travel Agency in Alwar offers a wide range of Holiday tours and packages. Our vacation 
                packages are highly regarded by tourists, and we take pride in catering to diverse interests in our 
                planning. We ensure you have the best travel experience while exploring India with us.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                <div className="flex flex-col space-y-4">
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
                  <div className="flex items-center space-x-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Email Us</p>
                      <a href="mailto:aruntravelscompany@gmail.com" className="text-blue-600 hover:text-blue-800">aruntravelscompany@gmail.com</a>
                    </div>
                  </div>
                  <button 
                    onClick={() => navigate('/booking')}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 mt-4 flex items-center justify-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                    <span>Plan Your Trip</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;



// 