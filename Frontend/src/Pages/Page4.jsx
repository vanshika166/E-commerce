import { useContext, useEffect, useState } from 'react'
import { productDataContext } from '../Context/ProductContext.jsx'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'

const Page4 = () => {
  const navigate = useNavigate()
  const { productList } = useContext(productDataContext)
  const [bestSeller, setBestSeller] = useState([])

  useEffect(() => {
    const bestProduct = productList.filter((elem) => elem.bestSeller === true)
    setBestSeller(bestProduct)
  }, [productList])


  return (
    <div className='min-h-[130%] w-full overflow-hidden relative bg-[#EDEEE9] flex flex-col justify-end p-6'>
      <h1 className='sm:text-[4rem] text-[3rem] absolute left-[2rem] top-[5rem]'>Our popular products</h1>
      <div className=' lg:flex grid grid-cols-1 md:grid-cols-2 place-items-center w-full relative sm:top-0 top-[15rem] sm:gap-y-0 gap-y-10 items-center justify-between'>
        {bestSeller.slice(0, 4).map((data, index) => {
          return <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.025 }}
            viewport={{ once: true }}
            onClick={() => navigate(`/buy-product/${data._id}`)} key={index} className='sm:h-[35rem] sm:rounded-none rounded-lg h-[36rem] sm:w-[18rem] w-full object-center flex flex-col items-start justify-center gap-y-3 overflow-hidden'>
            <img src={data.image1} alt="" className='h-[90%] sm:rounded-none rounded-2xl cursor-pointer w-full scale-105 transition-all duration-300 hover:scale-100 object-cover' />
            <h1 className='sm:text-2xl text-xl font-medium'>{data.name}</h1>
            <h2 className='sm:text-lg text-md sm:mb-0 mb-8 font-medium'>{data.subCategory} | <span>{data.price} ₹</span></h2>
          </motion.div>
        })}


      </div>
    </div>
  )
}

export default Page4