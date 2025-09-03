import React from 'react'
import {motion} from "framer-motion"

const Page6 = () => {
  return (
    <div className='sm:min-h-[130%] h-screen w-full bg-[#EDEEE9] p-2 relative'>
        <motion.img
        initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.025 }}
            viewport={{ once: true }}
        src="/pic19.jpg" alt="" className='sm:block hidden h-[18rem] absolute top-[5rem] left-[4rem] w-[13rem] object-cover rounded-xl'/>
        <motion.img
        initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.025 }}
            viewport={{ once: true }}
        src="/pic20.jpg" alt="" className='sm:h-[18rem] h-[13rem] absolute sm:bottom-[12rem] bottom-[3rem] sm:right-[6rem] right-3 sm:w-[13rem] w-[8rem] object-cover sm:rounded-xl rounded-sm' />
        <div className='absolute h-full w-full inset-0 flex items-center justify-center'>
        <motion.h1
        initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.025 }}
            viewport={{ once: true }}
        className='sm:block hidden threads lg:text-[12rem] md:text-[9rem] relative bottom-[4rem] text-[#D6D8DA] tracking-widest'>THREADS</motion.h1></div>
        <div className='h-full w-full absolute inset-0 flex items-center justify-center'>
        <motion.img
        initial={{ opacity: 0, scale:0}}
            whileInView={{ opacity: 1, scale:1 }}
            transition={{ duration: 0.5, delay: 0.025 }}
            viewport={{ once: true }}
        src="/pic18.jpg" alt="" className=' sm:h-[28rem] relative sm:right-0 right-[4rem] lg:bottom-0 md:bottom-[3.5rem] bottom-[5rem] h-[25rem] sm:w-[20rem] w-[15rem] object-cover sm:rounded-2xl rounded-md' />
        <p className='absolute sm:block hidden right-[4rem] top-[5rem] w-[22rem]'>Discover clothing that doesn’t just follow trends — it defines them. Tailored to elevate your everyday wardrobe.</p>
        <p className='absolute sm:left-[4rem] left-[2rem] sm:bottom-[10rem] bottom-[5rem] sm:w-[22rem] w-[12rem]'>Each design is a blend of modern elegance and artisanal quality, curated to embody the signature style of THREADS .</p>
        </div>
    </div>
  )
}

export default Page6