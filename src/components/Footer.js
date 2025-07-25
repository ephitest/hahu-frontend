import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 text-sm py-6 text-center border-t border-gray-800">
      <p>
        &copy; {year} HahuTech Solutions. All rights reserved. |{' '}
        <span className="text-blue-400">hello@hahutech.com</span>
      </p>
    </footer>
  );
};

export default Footer;