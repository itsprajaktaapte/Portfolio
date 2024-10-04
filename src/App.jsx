import React from 'react'
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { Toaster } from 'react-hot-toast'
import Work from './Components/Work'
import Skills from './Components/Skills'
import About from './Components/About'




function App() {
  return (
    <>
    <div>
    <Navbar/>
    <About/>
    <Skills/>
    <Work/>
    <Contact/>
    <Footer/>
    </div>
    <Toaster/>
  </>
  )
}

export default App