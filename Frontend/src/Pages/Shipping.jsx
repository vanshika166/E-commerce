import React, { useState } from 'react'
import NavThrough from '../Components/navThrough'
import ShipCard from '../Components/ShipCard'
import OrderSummary from '../Components/OrderSummary'
import { motion } from 'framer-motion'

const Shipping = () => {
  
  return (
    <motion.div
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, }}
      transition={{ duration: 0.5 }}
    className='relative bg-[#EDEEE9]'>
      <NavThrough />
      <div className='min-h-screen w-full bg-[#EDEEE9] flex sm:flex-row flex-col p-2 absolute top-[5rem]'>
        <ShipCard/>
        <OrderSummary />
      </div>


    </motion.div>
  )
}

export default Shipping;
