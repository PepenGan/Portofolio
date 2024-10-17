import React from 'react';
import gambar1 from "../assets/gambar1.jpg";
import gambar2 from "../assets/gambar2.jpg";
import gambar3 from "../assets/gambar3.png";
import gambar4 from "../assets/gambar4.jpg";
import gambar5 from "../assets/gambar5.png";

const Projects = [
  {
    id: 1,
    name: "Web-Portofolio",
    technologies: "Vite + React + Tailwind",
    image: gambar1,
    github: "https://github.com/PepenGan/Portofolio/tree/main/porto",
  },
  {
    id: 2,
    name: "MediHelp",
    technologies: "Laravel + Filament",
    image: gambar2,
    github: "https://github.com/Wolfwhitex/MediHelp.git"
  },
  {
    id: 3,
    name: "Were-IoT",
    technologies: "React + Vite + Bootstrap + API + BE",
    image: gambar3,
    github: "https://github.com/Ware-IoT/FE-Page-WareIOTT"
  },
  {
    id: 4,
    name: "Si Hijau",
    technologies: "Arduino",
    image: gambar4,
    github: "https://github.com/PepenGan/IOT-se1",
    testingApp: "https://testingapp.com"
  },
  {
    id: 5,
    name: "Minesweeper",
    technologies: "Java",
    image: gambar5,
    github: "https://github.com/PepenGan/AOL-OOP/blob/main/App.java"
  },
];

const Project = () => {
  return (
    <div className='bg-black text-white py-20' id='Projects'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-12'>Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {Projects.map(project => (
            <div key={project.id} className='bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105'>
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-48 object-cover"
              />
              <div className='p-6'>
                <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                <p className='text-gray-400 mb-4'>{project.technologies}</p>
                {project.testingApp && (
                  <a 
                    href={project.testingApp}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-green-400 hover:underline block mb-2'>
                    Testing Product
                  </a>
                )}
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='text-blue-400 hover:underline'>
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
