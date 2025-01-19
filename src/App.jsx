import { useState } from 'react'
import Hero from './components/landingpage/hero'
import Navbar from './components/landingpage/Navbar'
import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
