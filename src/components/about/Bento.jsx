import React, {useEffect} from 'react'
import {motion, useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const SkillsTag = ({text}) => {
    return (
        <li className='hover:scale-105 hover:cursor-default transition-all ease-in-out border  hover:border-[#00D9FF] rounded-sm inline-block text-center p-2 m-1'>{text}</li>
    )
}

const Bento = () => {

    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const variants = {
        hidden: {opacity: 0, y: 20},
        visible: {opacity: 1, y: 0}
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen my-40 lg:my-0">
            <h1 className='text-5xl hover:scale-105 hover:text-[#00D9FF] transition-all ease-in-out cursor-default'>About Me</h1>
            <div className='section flex w-full container px-10 md:mx-auto py-20'>
                <motion.div className="flex flex-col lg:flex-row justify-between w-full " ref={ref} variants={containerVariants} initial="hidden" animate={controls}>
                    <div className='flex flex-col lg:justify-between'>
                        <motion.div className="p-6 my-3 border rounded-lg flex flex-col items-start justify-center" variants={variants}>
                            <span className='text-3xl font-bold'>CUSTOM DESIGNS</span>
                            <p className='mt-2 text-sm tracking-tighter'>Creating unique designs fitting your needs</p>
                        </motion.div>
                        <motion.div className="p-6 my-3 border rounded-lg flex flex-col items-start justify-center" variants={variants}>
                            <span className='font-semibold tracking-tighter text-gray-400'>AFFORDABLE</span>
                            <span className='text-3xl font-bold tracking-tighter'>PRICING</span>
                            <p className='mt-2 text-sm tracking-tighter'>Offering competitive rates for high-quality services, ensuring value for every dollar spent.</p>
                        </motion.div>
                    </div>
                    <motion.div className="p-6 rounded-lg border flex flex-col items-start justify-center gap-1 w-full lg:w-3/6 " variants={variants}>
                        <span className='text-3xl font-bold my-2 tracking-tighter opacity-80'>SKILLS</span>
                        <ul>
                            <SkillsTag text={"UI Design"} />
                            <SkillsTag text={"Front End Development"} />
                            <SkillsTag text={"Back End Development"} />
                            <SkillsTag text={"Game Development"} />
                            <SkillsTag text={"HTML"} />
                            <SkillsTag text={"CSS"} />
                            <SkillsTag text={"JavaScript"} />
                            <SkillsTag text={"React"} />
                            <SkillsTag text={"Tailwind"} />
                            <SkillsTag text={"MongoDB"} />
                            <SkillsTag text={"FramerMotion"} />
                            <SkillsTag text={"Express"} />
                            <SkillsTag text={"Node"} />
                            <SkillsTag text={"C++"} />
                            <SkillsTag text={"C#"} />
                            <SkillsTag text={"DiscordJS"} />
                            <SkillsTag text={"Lua"} />
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
            <motion.div className="p-6 rounded-lg flex flex-col items-start justify-center md:col-span-2" variants={variants}>
                <span className='tracking-tighter text-gray-400 font-semibold'>MORE THAN</span>
                <span className='text-7xl hover:scale-105 cursor-default font-bold tracking-tighter hover:text-[#00D9FF] transition-all ease-in-out'>5+ <span className='roman'>Happy</span> Clients</span>
            </motion.div>
        </div>
    )
}

export default Bento