import React, { useContext, useEffect, useState } from 'react'
import Footer from './Footer'
import Navigation2 from '../Components/Navigation2'
import { productDataContext } from '../Context/ProductContext'
import { useNavigate } from 'react-router-dom'
import { pageDataContext } from '../Context/PageContext.jsx'
import Cart from '../Components/Cart.jsx'
import DropDown from '../Components/DropDown.jsx'
import { motion } from 'framer-motion'

const Shop = () => {
    const [selectedCategory, setSelectedCategory] = useState('All products')
    const navigate = useNavigate();
    const { productList } = useContext(productDataContext)
    const { cart, dropMenu } = useContext(pageDataContext)

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, }}
            transition={{ duration: 0.5 }}
            className='h-screen w-full overflow-x-hidden bg-[#EDEEE9]'>
                 <Navigation2 />
                {cart ? <Cart /> : null}
                {dropMenu ? <DropDown /> : null}
            {/* first */}
            <div className='h-screen lg:flex hidden relative w-full overflow-hidden  flex-col items-center justify-end'>
                <div className='h-[25rem] w-[95%] bg-[#F7F5EF] shadow-2xl rounded-t-md flex flex-col justify-center px-16 leading-[5rem] '>
                    <h1 className='text-[4rem] w-[50%] font-semibold'>Exclusive offer: 20% Off + free gift!</h1>
                    <h2 className='text-lg w-[50%] font-Satoshi font-light'>It’s our way of saying thank you for choosing us as your go-to destination for quality fashion.</h2>
                </div>
                <img src="/pic30.png" alt="" className='h-[42.5rem] drop-shadow-lg w-[30rem] object-cover absolute right-[8rem] bottom-[-9rem]' />
            </div>

            {/* second */}
            <div className='min-h-screen sm:pt-16 pt-8 bg-[#EDEEE9] relative w-full flex sm:flex-row flex-col justify-end'>
                {/* filter */}
                {/* filter */}
                <div className='w-[25%] sm:block sticky px-8 py-10 hidden top-0 h-[calc(100vh-4rem)]'>
                    {/* Title */}
                    <h2 className='text-2xl font-semibold mb-6'>Filter:</h2>

                    {/* Availability */}
                    <div className='mb-8'>
                        <h3 className='text-lg font-medium mb-2'>Availability</h3>
                        <div className='space-y-2'>
                            <label className='flex items-center space-x-2'>
                                <input onChange={(e) => setSelectedCategory(e.target.value)} type='radio' value="inStock" name='availability' defaultChecked className='accent-black' />
                                <span>In stock</span>
                            </label>
                            <label className='flex items-center space-x-2'>
                                <input onChange={(e) => setSelectedCategory(e.target.value)} type='radio' value="outOfStock" name='availability' className='accent-black' />
                                <span>Out of stock</span>
                            </label>
                        </div>
                    </div>

                    {/* Category */}
                    <div className='mb-8'>
                        <h3 className='text-lg font-medium mb-2'>Category</h3>
                        <div className='space-y-2'>
                            {[
                                'All products',
                                'Men',
                                'Women',
                                'Winter wear',
                                'Summer wear',
                                'Top wear',
                                'Bottom wear'
                            ].map((item, idx) => (
                                <label key={idx} className='flex items-center space-x-2'>
                                    <input onChange={(e) => setSelectedCategory(e.target.value)} type='radio' value={item} name='category' className='accent-black' />
                                    <span>{item}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                {/* filter for small screens: */}
                <div className='sm:hidden w-full mb-5 overflow-x-scroll mt-[5rem] fixed text-sm items-center justify-between gap-x-5 p-2 bg-[#AC9C8D]/50 flex flex-nowrap'>
                    {[
                        'All products',
                        'Men',
                        'Women',
                        'Winter wear',
                        'Summer wear',
                        'Top wear',
                        'Bottom wear'
                    ].map((item, idx) => (
                        <label key={idx} className='flex items-center space-x-2 whitespace-nowrap'>
                            <input onChange={(e) => setSelectedCategory(e.target.value)} type='radio' value={item} name='category' className='accent-black' />
                            <span className='whitespace-nowrap'>{item}</span>
                        </label>
                    ))}
                </div>

                {/* shop */}
                <div className='min-h-screen mt-12 lg:w-[75%] w-full gap-y-6 pb-9 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 p-2 place-items-center bg-[#EDEEE9]'>

                    {/* filteration  */}
                    {productList.length > 0 && productList.filter(product => {
                        if (selectedCategory === "All products") return true;
                        if (selectedCategory === "Men" || selectedCategory === "Women") return product.category === selectedCategory
                        if (selectedCategory === "Winter wear") return product.subCategory === "winterwear"
                        if (selectedCategory === "Summer wear") return product.subCategory === "summerwear"
                        if (selectedCategory === "Top wear") return product.subCategory === "Topwear"
                        if (selectedCategory === "Bottom wear") return product.subCategory === "bottomwear"
                        if(selectedCategory === "inStock") return product.inStock === true;
                        if(selectedCategory === "outOfStock") return product.inStock === false;
                    }).map((elem, index) => {
                        return <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.025}}
                            viewport={{ once: true }}
                            key={index} className='h-[37.5rem] w-[20rem] flex flex-col gap-y-4'>
                            <div onClick={() => navigate(`/buy-product/${elem._id}`)} className='h-[80%] w-full overflow-hidden'><img src={elem.image1} alt="" className='h-full lg:w-full w-full md:w-[90%] transition-all duration-300 object-cover hover:scale-105' /></div>

                            <div className='flex flex-col justify-center p-2 gap-y-3'>
                                <h1 className='text-2xl font-semibold'>{elem.name}</h1>
                                <h2 className='font-medium font-Satoshi'>{elem.category} {elem.subCategory} | {elem.discount>0?(elem?.price - (elem?.price * elem?.discount) / 100):elem.price}</h2>
                            </div>
                        </motion.div>
                    })}



                </div>


            </div>
            <Footer />
        </motion.div>
    )
}

export default Shop
