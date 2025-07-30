import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <main
    className="relative bg-gray-900 text-white min-h-screen px-6 pt-12 pb-20 overflow-hidden bg-cover bg-center"
    style={{ backgroundImage: 'url("/images/tech-background.jpg")' }} // ← Change path as needed
  >
    {/* Overlay for better readability */}
    <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

    {/* Floating decorative blobs */}
    <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-blue-600 opacity-20 rounded-full blur-3xl animate-pulse z-10" />
    <div className="absolute bottom-[-50px] right-[-80px] w-96 h-96 bg-purple-500 opacity-10 rounded-full blur-2xl animate-ping z-10" />

    <div className="relative text-center max-w-5xl mx-auto px-4 sm:px-6 z-20">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-6 animate-fade-up">
        Empowering Innovation Through <br className="hidden md:inline" /> AI, Cloud, and Data Engineering
      </h1>

      <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
        At HahuTech Solutions, we partner with organizations to unlock business value through strategic AI integration,
        cloud modernization, and intelligent data solutions—driving resilience, agility, and digital excellence.
      </p>

      <div className="border-t border-gray-700 w-16 mx-auto my-8 opacity-40"></div>

      <div className="bg-gray-900 bg-opacity-90 p-8 rounded-xl shadow-2xl max-w-3xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
        <h2 className="text-2xl font-semibold text-blue-400 mb-4">What We Stand For</h2>
        <p className="text-gray-300">
          We design secure, scalable platforms that streamline operations, accelerate decision-making,
          and transform data into actionable insights—bridging today's needs with tomorrow’s growth.
        </p>
      </div>

      <Link to="/services">
        <button className="mt-2 px-10 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 shadow-lg animate-fade-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          Discover Our Solutions
        </button>
      </Link>

      <p className="text-sm text-gray-400 mt-8 uppercase tracking-wide animate-fade-up" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
        Trusted by businesses across energy, finance, and public sector
      </p>
    </div>
  </main>
);

export default Home;