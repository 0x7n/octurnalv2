import React from 'react'
import logo from '../../assets/octurnalLogo.png'

const Navbar = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='absolute flex flex-row justify-between items-center my-5 w-full'>
        <div className="w-8 ml-40"><img src={logo} alt="logo" /></div>
        <div className='flex mr-40'>
            <a href="#" className='mx-2 hover:underline transition-all' onClick={() => scrollToSection('about')}>About</a>
            <a href="#" className='mx-2 hover:underline transition-all' onClick={() => scrollToSection('contact')}>Contact</a>
        </div>
    </div>
  )
}

export default Navbar