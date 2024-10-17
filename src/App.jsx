import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Aboutme from './Component/Aboutme'
import Service from './Component/Service'
import Project from './Component/Project'
import ContactMe from './Component/ContactMe'
import Footer from './Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Aboutme />
      <Service />
      <Project />
      <ContactMe/>
      <Footer/>
    </>
  )
}

export default App
