import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Aboutme from './Component/Aboutme'
import Service from './Component/Service'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Aboutme />
      <Service />
    </>
  )
}

export default App
