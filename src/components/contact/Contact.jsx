import React from 'react'
import { FaDiscord } from "react-icons/fa6";


const Contact = () => {
  return (
    <div className='flex flex-col justify-center items-center align-middle h-screen' id='contact'>
        <h1 className='text-4xl font-medium'>Contact Me</h1>
        <a href="https://discord.com/users/296700613264408578" className='text-7xl my-10 p-3 rounded-lg transition-all ease-in-out hover:bg-[#7289da]'><FaDiscord className=''/></a>
    </div>
  )
}

export default Contact