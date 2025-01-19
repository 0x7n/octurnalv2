import React, {useState, useEffect} from 'react'
import logo from '../../assets/octurnalLogo.png'

import { FaBehanceSquare, FaGithub, FaDiscord  } from "react-icons/fa";


const Footer = () => {

    const [visitCount, setVisitCount] = useState(null);

    useEffect(() => {
        const namespace = 'octurnal.dev';
        const key = 'bajs';

        fetch(`https://api.countapi.xyz/hit/${namespace}/visits`)
            .then(response => response.json())
            .then(data => {
                setVisitCount(data.value);
            })
            .catch(err => {
                console.error(err);
                setVisitCount('Error, read console for more information');
            })
    }, []);

    return (
        <footer className='flex flex-col items-center text-left bg-[#080808] py-12 px-4 md:px-16 lg:px-28'>
            <img src={logo} className='w-16' alt="logo" />
            <div className="flex flex-row justify-center">
                {/* <div>
                    <h2 className='text-lg font-bold mb-4'>
                        Thanks to
                    </h2>
                    <ul>
                        <li>Kapitche</li>
                        <li>Bigboy124</li>
                        <li>Blaxe</li>
                        <li>Enit</li>
                    </ul>
                </div> */}
                <div className='text-center my-10'>
                    <h2 className='text-lg font-bold mb-4'>
                        Socials
                    </h2>
                    <ul className='flex space-x-4'>
                        <li><a href="https://www.github.com/0x7n"><FaGithub /> Github</a></li>
                        <li><a href="https://discord.com/users/296700613264408578"><FaDiscord />Discord</a></li>
                        <li><a href="https://www.behance.net/sevendev"><FaBehanceSquare />Behance</a></li>
                    </ul>
                </div>
            </div>
            <div className="text-center">
                <p>	&copy; 2025 Octurnal. All Rights Reserved.</p>
            </div>
            <div className='flex flex-row'>
                <h2 className='mx-2'>{visitCount !== null ? visitCount : 'Loading...'}</h2>
                <p className='mx-2 roman'>visits</p>
            </div>
        </footer>
    )
}

export default Footer