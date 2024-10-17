import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const ContactMe = () => {
    // State for form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Update form data on change
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Message sent successfully!');
    };

    return (
        <div className="bg-black text-white py-20" id="about">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold mb-12">Contact Me</h2>

                {/* Contact Information */}
                <div className="flex flex-col lg:flex-row gap-12 text-left">
                    <div className="lg:w-1/2 mt-16"> {/* Changed mt-12 to mt-16 */}
                        <h3 className="text-2xl font-semibold mb-4">Let's Talk</h3>
                        <p className="text-gray-400 mb-8">I'm open to discussing web development projects or partnership opportunities.</p>
                        <div className="mb-4">
                            <FaEnvelope className="inline-block text-green-400 mr-2" />
                            <a href="mailto:stephen.utama001@binus.ac.id" className="hover:underline">stephen.utama001@binus.ac.id</a>
                        </div>
                        <div className="mb-4">
                            <FaPhone className="inline-block text-green-400 mr-2" />
                            <span>+09237348223</span>
                        </div>
                        <div className="mb-4">
                            <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
                            <span>Laksana Adi Sucipto, Malang, East Java, Indonesia</span>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:w-1/2">
                        <form className='space-y-4' onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className='block mb-2'>Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                                    placeholder="Enter Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className='block mb-2'>Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                                    placeholder="Enter Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className='block mb-2'>Your Message</label>
                                <textarea
                                    id="message"
                                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                                    placeholder="Enter Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="6" // Increased rows for more visible height
                                />
                            </div>
                            <button
                                type="submit"
                                className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full hover:from-blue-500 hover:to-green-400 transform hover:scale-105 transition duration-300 ease-in-out'>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
