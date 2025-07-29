import React, { useState, useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }

try {
  const res = await fetch('https://hahutech-backend.onrender.com/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (res.ok) {
    setStatus('✅ Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  } else {
    const errorText = await res.text(); // Get error message from backend
    console.error('❌ Server responded with error:', errorText);
    setStatus(`❌ Server error: ${errorText}`);
  }
} catch (err) {
  console.error('❌ Network or other error:', err);
  setStatus(`❌ Error sending message: ${err.message}`);
}
  };

  return (
    <main className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen px-6 py-20">
      <div className="text-center max-w-5xl mx-auto animate-fade-up">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          Let’s work together. Fill out the form and we’ll respond within 1–2 business days.
        </p>
        <p className="text-sm text-gray-500 uppercase tracking-wider">
          Email: <a href="mailto:info@hahutechsolutions.com" className="text-blue-400 hover:underline">info@hahutechsolutions.com</a> |
          Phone: <a href="tel:+13015038627" className="text-blue-400 hover:underline ml-1">(301) 503-8627</a>
        </p>
      </div>

      <div className="flex justify-center mt-12 animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl bg-gray-900 p-8 rounded-xl shadow-xl border border-gray-800"
        >
          <div className="mb-6">
            <label className="block text-gray-300 mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 mb-2" htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-300"
          >
            Send Message
          </button>

          {status && (
            <p className="mt-4 text-center text-sm text-gray-400">
              {status}
            </p>
          )}
        </form>
      </div>
    </main>
  );
};

export default Contact;