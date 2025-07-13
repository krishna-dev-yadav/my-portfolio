import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Navbar from './components/navbar'
import Home from './components/Home'
import Skils from './components/skills'
import About from './components/about'
import Projects from './components/projects'
import Contect from './components/contect'
import { HashRouter, Router, Routes, Route } from 'react-router-dom'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  const mainref = useRef(null)


  useEffect(() => {
    gsap.fromTo(mainref.current,
      {
        x: -97,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: "power3.Out",
        duration: 2,

      }
    )
  })
  return (
    <HashRouter>
      <div ref={mainref} className='bg-white' >
        <Navbar />
        <Routes>
          < Route path='/' element={<>
            <Home />
            <Projects />
            <Skils />
            <About />
            <Contect />
          </>} />
          < Route path='/Main' element={<Skils />} />
          < Route path='/about' element={<About />} />
          < Route path='/project' element={<Projects />} />
          < Route path='/contect' element={<Contect />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App