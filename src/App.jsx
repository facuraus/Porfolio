import React from 'react'
import './App.css'

import Navbar from './Components/Navbar/navbar'
import Hero from './Components/Hero/hero'
import About from './Components/Education/Education'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App