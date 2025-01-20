import React, {useState} from 'react'
import bgImage from '../../assets/PexelsPhotobyJakubNovacek.png'
import "../../index.css"

const Hero = () => {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='h-screen w-full flex flex-col justify-center items-center align-middle'>
            <h1 className='text-center text-5xl heroGradient opacity-75 py-3'><span className='roman text-6xl'>Modern Websites</span> For<br />A Digital World</h1>
            <p className='text-[#6D6D6D] text-base py-7'>Custom made websites suited for you</p>
            {/* hover:shadow-[0px_0px_5px_5px_rgba(0,217,255,1)]  */}
            <a onClick={() => scrollToSection('contact')} className="rounded-full bg-[#171717] opacity-65 hover:opacity-90 hover:bg-[#00D9FF] py-3 px-8 border border-transparent font-medium text-center text-sm hover:text-[#050505] transition-all ease-in-out">Contact</a>
            <img src={bgImage} alt='hero-background' className='absolute top-0 -z-50 left-0 bg-cover bg-bottom w-full h-screen opacity-50'/>
            {/* <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#050505] to-[rgba(0,0,0,0)] "></div> */}
        </div>
    )
}

export default Hero