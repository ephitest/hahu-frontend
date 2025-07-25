import React, { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen px-6 py-20">
      <div className="text-center max-w-5xl mx-auto animate-fade-up">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-8">
          Our Services
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
          At HahuTech Solutions, we deliver cutting-edge technology services tailored to help organizations
          innovate, scale, and lead in a digital-first world. Explore our core service areas below.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
        {/* AI Solutions */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 transition">
          <h2 className="text-xl font-semibold text-blue-400 mb-4">AI & Machine Learning</h2>
          <p className="text-gray-300">
            Leverage AI to automate processes, gain intelligent insights, and power smart decision-making. We specialize in NLP, predictive modeling, and intelligent automation.
          </p>
        </div>

        {/* Data Engineering */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 transition">
          <h2 className="text-xl font-semibold text-blue-400 mb-4">Data Engineering</h2>
          <p className="text-gray-300">
            Build robust, scalable data pipelines and architectures. From ETL/ELT to data warehousing, we ensure your data is secure, structured, and analytics-ready.
          </p>
        </div>

        {/* Cloud Transformation */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500 transition">
          <h2 className="text-xl font-semibold text-blue-400 mb-4">Cloud Transformation</h2>
          <p className="text-gray-300">
            Accelerate your digital journey with cloud-native solutions. We help modernize legacy systems, migrate workloads, and optimize for Azure, AWS, and GCP.
          </p>
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 mt-16 uppercase tracking-wide animate-fade-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
        Delivering real results with modern technology.
      </p>
    </main>
  );
};

export default Services;