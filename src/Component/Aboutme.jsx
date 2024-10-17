import React from 'react';
import HeroImage from '../assets/profile.jpg';

const Aboutme = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={HeroImage}
            alt="Profile"
            className='w-72 h-80 rounded object-cover mb-8 md:mb-0'
          />

          <div className='flex-1'>
            <p className='text-lg mb-8'>
              I am a passionate full-stack developer with a focus on building modern and responsive web applications.
              With a strong foundation in both frontend and backend technologies, I strive to create seamless and efficient
              user experiences.
            </p>

            {/* Skill Progress Bars */}
            <div className='space-y-6'>
              <div className='flex items-center'>
                <label htmlFor="htmlandcss" className='w-3/12'>HTML & CSS</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                  <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-8/12 transform transition-transform duration-300 hover:scale-105'></div>
                </div>
              </div>

              <div className='flex items-center'>
                <label htmlFor="reactjs" className='w-3/12'>React JS</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                  <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-9/12 transform transition-transform duration-300 hover:scale-105' />
                </div>
              </div>

              <div className='flex items-center'>
                <label htmlFor="laravel" className='w-3/12'>Laravel</label>
                <div className='grow bg-gray-800 rounded-full h-2.5'>
                  <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-9/12 transform transition-transform duration-300 hover:scale-105' />
                </div>
              </div>

              {/* Stats Section */}
              <div className='mt-12 flex justify-around text-center'>
                <div className='transform transition-transform duration-300 hover:scale-105'>
                  <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                  2+
                  </h3>
                  <p>Years Experience</p>
                </div>
                <div className='transform transition-transform duration-300 hover:scale-105'>
                  <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                    10+
                  </h3>
                  <p>Projects Completed</p>
                </div>
                <div className='transform transition-transform duration-300 hover:scale-105'>
                  <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                    5+
                  </h3>
                  <p>Good Reviews</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
