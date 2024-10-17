import React from 'react'
import HeroImage from '../assets/stephen.jpg'

const Hero = () => {
  return (
    <div className='bg-black text-white min-h-screen flex flex-col justify-center items-center text-center w-full'>
      <img 
        src={HeroImage} 
        alt="Stephen" 
        className='mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'
      />
      <h1 className='text-4xl font-bold'>
        I'm <span>Stephen Wijaya Utama</span>, Full-stack Developer
      </h1>
      <p className='mt-4 text-lg text-gray-300'>
        I specialize in building modern and responsive web applications
      </p>
      <div className='mt-8 space-x-4'>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          Contact with Me
        </button>
        <button className='bg-gradient-to-r from-green-400 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          Resume
        </button>
      </div>
    </div>
  )
}

export default Hero;
