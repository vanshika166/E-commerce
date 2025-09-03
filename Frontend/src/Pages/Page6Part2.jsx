import React from 'react'
import Button from '../Components/Button'
import { motion } from 'framer-motion'

const Page6Part2 = () => {
    return (
        <div className='min-h-screen w-full bg-[#EDEEE9] p-2 cursor-default flex flex-col sm:gap-y-[3rem] gap-y-[2rem] items-center'>
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.025 }}
                viewport={{ once: true }}
                className='text-xl sm:w-[50%] w-full text-center'>Each design is a blend of modern elegance and artisanal quality, curated to embody the signature style of <span className='text-blue-400 font-semibold'>THREADS.</span></motion.h1>
            <Button word="Explore Collection" onclick="shop" />

            <div className='w-full items-center flex justify-evenly'>
                {["Premium Materials", "Expert Craftsmanship", "Sustainable Fashion"].map((elem, idx) => {
                    return <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.025 }}
                        viewport={{ once: true }}
                        key={idx} className='flex flex-col items-center justify-center bg-[#F9FAFB]/30 p-2 rounded-xl gap-y-3'>
                        <div className='sm:h-[3rem] h-[1.5rem] rounded-full sm:w-[3rem] w-[1.5rem] bg-blue-400'></div>
                        <h2 className='sm:text-xl text-sm text-center'>{elem}</h2>
                    </motion.div>
                })}

            </div>

            <div className='w-full sm:h-[30rem] min-h-[30rem] flex sm:flex-row flex-col-reverse mt-12 mb-8'>
                <div className='sm:w-[50%] w-full h-full  flex flex-col items-center justify-center'>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.025 }}
                        viewport={{ once: true }}
                        className='h-[80%] sm:w-[60%] w-full sm:p-0 p-2 sm:mt-0 mt-7 justify-center gap-y-5 flex flex-col'>
                        <h1 className='text-xl font-semibold'>The THREADS Philosophy</h1>
                        <p className='sm:text-lg text-sm'>We believe that fashion should be an extension of your personality, not a compromise. Every piece in our collection is designed with intention, crafted with care, and made to last.</p>

                        <Button word="Learn more" onclick="about" />
                    </motion.div>
                </div>
                <div className='sm:w-[50%]  w-full h-full flex items-center justify-center'>
                    <motion.img
                    initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.025 }}
            viewport={{ once: true }}
                    src="/banner7.jpg" alt="" className=' sm:h-[80%] h-[40rem] sm:w-[65%] w-full object-cover rounded-2xl' />
                </div>
            </div>
        </div>
    )
}

export default Page6Part2
