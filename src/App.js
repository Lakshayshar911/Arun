import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Destination from './pages/Destination/Destination';
import CarHire from './pages/CarHire/CarHire';
import TempoTraveller from './pages/TempoTraveller/TempoTraveller';
import About from './pages/About/About';
import Gallery from './pages/Gallery/Gallery';
import Booking from './pages/Booking/Booking';  // Add this line
// 
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/car-hire" element={<CarHire />} />
          <Route path="/tempo-traveller" element={<TempoTraveller />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/booking" element={<Booking />} />  {/* Add this line */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
// 








