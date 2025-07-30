import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: '5 Reasons to Modernize Your IT Infrastructure in 2025',
      date: 'July 30, 2025',
      summary:
        'Discover why upgrading your legacy systems can boost performance, reduce costs, and enhance scalability for your business.',
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for Small Businesses',
      date: 'July 15, 2025',
      summary:
        'Learn how to secure your digital assets with practical and affordable cybersecurity strategies tailored for growing companies.',
    },
  ];

  return (
    <motion.main
      className="bg-gray-900 text-white min-h-screen py-12 px-4 sm:px-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-blue-400 border-b border-blue-400 pb-2">
          HahuTech Blog
        </h1>

        {posts.map((post) => (
          <article
            key={post.id}
            className="mb-10 border-b border-gray-700 pb-6 hover:bg-gray-800 transition-all duration-300 p-4 rounded"
          >
            <h2 className="text-2xl font-semibold mb-2 text-white">{post.title}</h2>
            <p className="text-sm text-gray-400 mb-2">{post.date}</p>
            <p className="text-gray-300">{post.summary}</p>
          </article>
        ))}

        <p className="text-sm text-gray-500 mt-8">
          More posts coming soon. Stay connected with HahuTech Solutions.
        </p>
      </div>
    </motion.main>
  );
};

export default Blog;