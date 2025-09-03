import React, { useContext, useEffect } from 'react'
import { productDataContext } from '../Context/ProductContext'
import { useNavigate } from 'react-router-dom'
import Navigation2 from '../Components/Navigation2'
import Cart from '../Components/Cart.jsx'
import Footer from './Footer'
import Bottom from '../Components/Bottom'
import { pageDataContext } from '../Context/PageContext.jsx'
import DropDown from '../Components/dropDown.jsx'
import { motion } from 'framer-motion'

const NewArrival = () => {
  const { productList } = useContext(productDataContext)
  const { cart, dropMenu } = useContext(pageDataContext)

  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [])


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, }}
      transition={{ duration: 0.5 }}
      className='h-screen overflow-x-hidden w-full bg-[#EDEEE9]'>
      <Navigation2 />
      {cart ? <Cart /> : null}
      {dropMenu ? <DropDown /> : null}
      <div className='min-h-screen w-full relative p-2 bg-[#EDEEE9] place-items-center gap-4 top-[4rem] md:top-[8rem] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
        {productList.slice(-9).map((item, index) => {
          return <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.025 }}
            viewport={{ once: true }}
            key={index} className='h-[34rem] w-[26rem]  md:w-[22rem]  p-1 flex flex-col items-center gap-y-2 justify-between'>
            <div className='group h-[90%] shadow-lg w-full cursor-pointer relative overflow-hidden rounded-xl flex items-center justify-center'>
              <img onClick={() => navigate(`/buy-product/${item._id}`, { state: item })} src={item.image1} alt="" className='h-full sm:w-full w-[80%] object-top object-cover rounded-t-2xl group-hover:scale-105 transition-all duration-300' />
              <div onClick={() => navigate(`/buy-product/${item._id}`, { state: item })} className='h-[3rem] w-[98%] absolute items-center justify-center bg-[#AC9C8D] bottom-[-3rem] group-hover:bottom-[1rem] transition-all duration-300 rounded-lg sm:flex hidden'>
                <h1 className='text-2xl font-medium text-white'>Buy Now</h1>
              </div>
            </div>
            <div className='h-[10%] w-full sm:p-2 px-10 flex sm:flex-col flex-row sm:justify-center justify-between'>
              <h1 className='text-xl font-medium font-Satoshi'>{item.name}</h1>
              <h2 className='text-lg font-medium font-Satoshi'>{item.discount>0?(item?.price - (item?.price * item?.discount) / 100):item.price}</h2>
            </div>
          </motion.div>
        })}
      </div>
      <div className='relative top-[2rem]'>
        <Bottom />
        <Footer />
      </div>
    </motion.div>
  )
}

export default NewArrival
