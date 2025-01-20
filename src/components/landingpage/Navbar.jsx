import React, { useState } from 'react'
import logo from '../../assets/octurnalLogo.png'
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`absolute flex flex-row justify-between items-center py-5 w-full ${isMenuOpen ? 'bg-[#070707] md:bg-transparent' : 'bg-transparent'}`}>
        <div className="w-8 ml-10 md:ml-40"><img src={logo} alt="logo" /></div>
        <div className='mr-40 hidden md:flex'>
            <a className='mx-2 hover:underline transition-all' onClick={() => scrollToSection('about')}>About</a>
            <a className='mx-2 hover:underline transition-all' onClick={() => scrollToSection('contact')}>Contact</a>
        </div>
        <div style={{transition: "transform 0.3s ease, opacity 0.3 ease"}} className={`absolute md:hidden top-12 text-center left-0 w-full bg-[#070707] flex flex-col items-center gap-6 text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}>
          <a className='w-full p-4 hover:underline transition-all' onClick={() => scrollToSection('about')}>About</a>
          <a className='w-full p-4 hover:underline transition-all' onClick={() => scrollToSection('contact')}>Contact</a>
        </div>
        <GiHamburgerMenu className='mr-10 md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}/>
    </div>
  )
}

export default Navbar