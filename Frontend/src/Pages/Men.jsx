import { useContext, useEffect, useState } from 'react'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import Navigation2 from '../Components/Navigation2'
import { productDataContext } from '../Context/ProductContext'
import Bottom from '../Components/Bottom'
import Cart from '../Components/Cart.jsx'
import { pageDataContext } from '../Context/pageContext.jsx'
import DropDown from '../Components/dropDown.jsx'
import { motion } from 'framer-motion'

const Men = () => {
  const { productList } = useContext(productDataContext)
  const { cart, dropMenu } = useContext(pageDataContext)
  const navigate = useNavigate()
  const [activeState, setActiveState] = useState("all")

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, }}
      transition={{ duration: 0.5 }}
      className='h-screen w-full overflow-x-hidden bg-[radial-gradient(circle,_rgba(237,238,233,1)_0%,_rgba(225,225,225,1)_50%)] flex relative flex-col'>
      <Navigation2 />
      {cart ? <Cart /> : null}
      {dropMenu ? <DropDown /> : null}
      {/* page 1 */}
      <div className='h-screen w-full absolute flex items-center justify-center'>
        <h2 className='threads lg:text-[15rem] md:text-[10rem] text-[5rem] text-[#AC9C8D]/20'>THREADS</h2>
      </div>
      <div className='h-screen flex  items-center overflow-hidden justify-center inset-0 w-full absolute'>
        <img src="pic25.png" alt="" className='h-[40rem] w-[23rem] object-cover relative top-[4rem]' />
      </div>

      {/* page2 */}
      <div className='min-h-screen bg-[#EDEEE9] w-full absolute flex flex-col pt-8 gap-y-5 top-[100%]'>
        <h1 className='text-4xl font-medium sm:text-start text-center px-8'>Men Collection:</h1>
        {/* filters */}
        <div className='sm:flex grid grid-cols-2 w-full p-1 px-8 items-center sm:gap-x-8 gap-y-5'>
          <button onClick={() => setActiveState("best")} className={` ${activeState === "best" ? "bg-[#Ac9C8D] text-white" : "bg-transparent"} p-2 border-[1px] border-gray-300 text-md font-medium rounded-3xl px-5 hover:bg-[#AC9C8D] hover:text-white hover:border-none transition-colors duration-200 cursor-pointer`}>BEST SELLER</button>
          <button onClick={() => setActiveState("new")} className={` ${activeState === "new" ? "bg-[#Ac9C8D] text-white" : "bg-transparent"} p-2 border-[1px] border-gray-300 text-md font-medium rounded-3xl px-5 hover:bg-[#AC9C8D] hover:text-white hover:border-none transition-colors duration-200 cursor-pointer`}>NEW ARRIVAL</button>
          <button onClick={() => setActiveState("summer")} className={` ${activeState === "summer" ? "bg-[#Ac9C8D] text-white" : "bg-transparent"} p-2 border-[1px] border-gray-300 text-md font-medium rounded-3xl px-5 hover:bg-[#AC9C8D] hover:text-white hover:border-none transition-colors duration-200 cursor-pointer`}>SUMMER COLLECTION</button>
          <button onClick={() => setActiveState("bottom")} className={` ${activeState === "bottom" ? "bg-[#Ac9C8D] text-white" : "bg-transparent"} p-2 border-[1px] border-gray-300 text-md font-medium rounded-3xl px-5 hover:bg-[#AC9C8D] hover:text-white hover:border-none transition-colors duration-200 cursor-pointer`}>BOTTOM WEAR</button>

        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  px-4  place-items-center gap-2'>

          {productList.filter(product => {
            if (activeState === "all") return product.category === 'Men';
            if (activeState === "best" && product.category === "Men") return product.bestSeller === true;
            if (activeState === "new") {
              const newArrival = productList.filter(product => product.category === "Men").slice(-6)
              return newArrival.includes(product)
            }
            if (activeState === "summer" && product.category === "Men") return product.subCategory === "summerwear";
            if (activeState === "bottom" && product.category === "Men") return product.subCategory === "bottomwear";
          }).map((data, index) => {
            return <motion.div
              initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.025 }}
            viewport={{ once: true }}
              key={index} className='h-[34rem]  md:w-[20rem] w-[26rem]  p-1 flex flex-col items-center gap-y-2 justify-between'>
              <div className='group h-[90%] w-full cursor-pointer relative overflow-hidden rounded-xl flex items-center justify-center'>
                <img onClick={() => navigate(`/buy-product/${data._id}`)} src={data.image1} alt="" className='h-full sm:w-full w-[85%] object-top object-cover rounded-t-2xl group-hover:scale-105 transition-all duration-300' />
                <div onClick={() => navigate(`/buy-product/${data._id}`)} className='h-[3rem] w-[98%] absolute items-center justify-center bg-[#AC9C8D] bottom-[-3rem] group-hover:bottom-[1rem] transition-all duration-300 sm:flex hidden rounded-lg'>
                  <h1 className='text-2xl font-medium text-white'>Buy Now</h1>
                </div>
              </div>
              <div className='h-[10%] w-full sm:p-2 flex sm:flex-col flex-row sm:justify-center justify-between px-10'>
                <h1 className='text-xl font-medium font-Satoshi'>{data.name}</h1>
                  {data?.discount > 0 ? (
    <>
      {/* Discounted Price */}
      <h2 className='font-bold sm:text-2xl text-xl font-Satoshi text-black'>
        ₹ {data?.price - (data?.price * data?.discount) / 100}
      </h2>

      {/* Original Price (cut) */}
      <h2 className='font-semibold sm:text-xl text-lg line-through text-gray-500'>
        ₹ {data?.price}
      </h2>

      {/* Discount Percentage */}
      <span className='text-green-600 font-medium sm:text-lg text-md'>
        {data?.discount}% OFF
      </span>
    </>
  ) : (
    // Normal Price (no discount)
    <h2 className='font-semibold sm:text-xl text-2xl font-Satoshi'>
      ₹ {data?.price}
    </h2>
  )}
              </div>
            </motion.div>
          })}

        </div>
        {/* bottom div */}
        <Bottom />
        {/* footer */}
        <Footer />
      </div>


    </motion.div>
  )
}

export default Men;