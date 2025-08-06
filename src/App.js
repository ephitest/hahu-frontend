import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  useEffect(() => {
    // Track visit only once per day per browser
    const lastVisit = localStorage.getItem('lastVisitDate');
    const today = new Date().toDateString();

    if (lastVisit !== today) {
      fetch('https://hahutech-backend.onrender.com/api/track', {
        method: 'POST'
      }).catch(err => console.error('Tracking error:', err));

      localStorage.setItem('lastVisitDate', today);
    }
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        <Navbar />
        <main className="flex-grow px-6 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;