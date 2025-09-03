

import React from 'react'
import Button from '../Components/Button'
import { BsArrowUpRight } from "react-icons/bs"
import { useNavigate } from 'react-router-dom'

const Page3 = ({mode}) => {
    const navigate = useNavigate()
    return (
        <div className={`min-h-screen w-full flex items-center justify-center px-2 py-8 bg-[#EDEEE9]`}>
            <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
                {/* Hero Section */}
                <div className="w-full text-center mb-10">
                    <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#16A34A] via-[#AC9C8D] to-[#323E42] mb-4">Unique Collections</h1>
                    <p className="text-lg text-bla md:text-2xl mb-6">Step into style with our exclusive loungewear for men & women. Shop the trend, own the comfort.</p>
                    <Button word="Shop Now" onclick={() => navigate('/shop')} className="bg-gradient-to-r from-[#16A34A] to-[#AC9C8D] text-white font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition" />
                </div>
                {/* Cards Section */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                    {/* Women Card */}
                    <div className="relative group flex flex-col items-center justify-end bg-white dark:bg-[#AC9C8D] rounded-3xl shadow-xl overflow-hidden p-0 min-h-[400px]">
                        <img src="/pic8.jpg" alt="Women" className="w-full h-72 object-cover group-hover:scale-105 transition duration-500" />
                        <div className="absolute top-6 left-6 bg-gradient-to-r from-[#AC9C8D] to-[#16A34A] px-5 py-2 rounded-full text-white font-bold text-lg shadow-lg">WOMEN</div>
                        <div className="absolute bottom-6 right-6 flex items-center gap-2 cursor-pointer" onClick={() => navigate('/women')}>
                            <span className="text-xl font-semibold text-[#16A34A]">Explore</span>
                            <BsArrowUpRight className="text-2xl text-[#16A34A] group-hover:translate-x-2 transition duration-300" />
                        </div>
                    </div>
                    {/* Men Card */}
                    <div className="relative group flex flex-col items-center justify-end bg-white dark:bg-[#AC9C8D] rounded-3xl shadow-xl overflow-hidden p-0 min-h-[400px]">
                        <img src="/pic2.jpg" alt="Men" className="w-full h-72 object-cover group-hover:scale-105 transition duration-500" />
                        <div className="absolute top-6 left-6 bg-gradient-to-r from-[#16A34A] to-[#AC9C8D] px-5 py-2 rounded-full text-white font-bold text-lg shadow-lg">MEN</div>
                        <div className="absolute bottom-6 right-6 flex items-center gap-2 cursor-pointer" onClick={() => navigate('/men')}>
                            <span className="text-xl font-semibold text-[#16A34A]">Explore</span>
                            <BsArrowUpRight className="text-2xl text-[#16A34A] group-hover:translate-x-2 transition duration-300" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page3
