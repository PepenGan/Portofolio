import React, { useState } from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  // State for email input
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle message input change
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    console.log('Message:', message);
    alert('Message sent successfully!'); // Replace this with actual submission logic
    setEmail(''); // Clear the input after submission
    setMessage(''); // Clear message input
  };

  return (
    <footer className="bg-black text-white py-20">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center">
        <h2 className="text-4xl font-bold mb-12">Let's Talk</h2>
        <p className="mb-4">I'm open to discussing web development projects or partnership opportunities.</p>
        
        {/* Contact Information */}
        <div className="mb-8">
          <p className="flex justify-center mb-2">
            <span className="mr-2">📧</span>
            <a href="mailto:youremail@example.com" className="hover:text-green-400">youremail@example.com</a>
          </p>
          <p className="flex justify-center mb-2">
            <span className="mr-2">📞</span>
            <span>+9828839922</span>
          </p>
          <p className="flex justify-center mb-2">
            <span className="mr-2">📍</span>
            <span>Street, City, Province, Country</span>
          </p>
        </div>

        {/* Message Form */}
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center">
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={handleEmailChange}
            className="p-2 mb-2 md:mb-0 md:mr-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
            required
          />
          <textarea
            placeholder="Enter Your Message"
            value={message}
            onChange={handleMessageChange}
            className="p-2 mb-2 md:mb-0 md:mr-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
            required
          />
          <button
            type="submit"
            className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-500 transition duration-300"
          >
            Send
          </button>
        </form>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-8">
          <a href="" className="hover:text-green-400 transition duration-200">
            <FaFacebook size={24} />
          </a>
          <a href="" className="hover:text-green-400 transition duration-200">
            <FaInstagram size={24} />
          </a>
          <a href="" className="hover:text-green-400 transition duration-200">
            <FaLinkedinIn size={24} />
          </a>
          <a href="" className="hover:text-green-400 transition duration-200">
            <FaGithub size={24} />
          </a>
        </div>

        {/* Footer Text */}
        <div className="mt-8 text-gray-400">
          <p>&copy; {new Date().getFullYear()} Stephen Wijaya Utama</p>
          <p className="text-gray-400">Full-Stack Developer based in Indonesia, specializing in web and software development.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
