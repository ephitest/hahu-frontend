import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Why Modernizing Your IT Infrastructure Is Critical in 2025',
      date: 'July 30, 2025',
      summary:
        'Legacy systems are holding back innovation. Discover how migrating to cloud-native platforms can reduce costs, increase agility, and future-proof your business.',
    },
    {
      id: 2,
      title: 'Best Practices for Implementing Secure Cloud Architecture',
      date: 'July 22, 2025',
      summary:
        'Learn the foundational principles of building secure, scalable cloud environments—from identity access management to encryption and zero-trust frameworks.',
    },
    {
      id: 3,
      title: 'AI-Driven Decision-Making: Turning Data into Action',
      date: 'July 14, 2025',
      summary:
        'Explore how organizations are leveraging AI and machine learning models to transform raw data into predictive insights, driving faster and smarter decisions.',
    },
    {
      id: 4,
      title: 'Data Engineering Trends That Will Shape the Next Decade',
      date: 'July 5, 2025',
      summary:
        'From real-time pipelines to data mesh architectures, stay ahead of the curve by understanding the latest technologies reshaping the data engineering landscape.',
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
          More articles coming soon. Stay connected with HahuTech Solutions for insights on AI, Cloud, and Data Engineering.
        </p>
      </div>
    </motion.main>
  );
};

export default Blog;