import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen px-6 py-20">
      <div className="text-center max-w-5xl mx-auto animate-fade-up">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-8">
          About HahuTech Solutions
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
          HahuTech Solutions is a technology consulting firm dedicated to helping organizations solve complex business challenges
          through innovative use of AI, data engineering, and cloud technologies. We blend deep industry expertise with forward-thinking strategies to create lasting digital impact.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
        {/* Vision */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 transition">
          <h2 className="text-xl font-semibold text-blue-400 mb-4">Our Vision</h2>
          <p className="text-gray-300">
            To be a catalyst for digital transformation, enabling clients to achieve agility, resilience, and excellence through next-gen technology.
          </p>
        </div>

        {/* Values */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 transition">
          <h2 className="text-xl font-semibold text-blue-400 mb-4">Our Core Values</h2>
          <ul className="text-gray-300 list-disc list-inside space-y-2">
            <li>Innovation with purpose</li>
            <li>Client-first mindset</li>
            <li>Integrity in every solution</li>
            <li>Collaborative excellence</li>
          </ul>
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 mt-16 uppercase tracking-wide animate-fade-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
        Your trusted partner in digital transformation.
      </p>
    </main>
  );
};

export default About;