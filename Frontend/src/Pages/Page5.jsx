import React from 'react'
import Button from '../Components/Button'
import { motion } from 'framer-motion'
const Page5 = () => {
  return (
    <div className='sm:h-[130%] h-[90%] relative w-full bg-[#EDEEE9] flex sm:flex-row flex-col sm:items-center items-start sm:p-0 py-20 justify-center'>
      <motion.img
      initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.025 }}
            viewport={{ once: true }}
      src="/pic22.png" alt="" className='sm:h-[70%] h-[40%] sm:w-[90%] w-full object-cover sm:rounded-4xl' />
      <div className='sm:absolute p-2 flex items-center flex-col justify-center gap-y-3'>
        <h1 className='sm:text-[4rem] text-[3rem] font-semibold lg:text-start text-center'>The Meadow Bloom Drop</h1>
        <h2 className='sm:text-2xl text-xl font-medium font-Satoshi sm:text-start text-center md:bg-[#EDEEE9] rounded-md md:p-1'>Inspired by wild florals and soft days. Checkout Now</h2>
        <Button word="Latest Drops" onclick="newarrival"/>
      </div>

    </div>
  )
}

export default Page5