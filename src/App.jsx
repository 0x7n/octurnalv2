import { useState } from 'react'
import Hero from './components/landingpage/Hero'
import Navbar from './components/landingpage/Navbar'
import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
