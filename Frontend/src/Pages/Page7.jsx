import React from 'react'
import Button from '../Components/Button'
import { motion } from 'framer-motion'

const Page7 = () => {
  return (
    <div className="w-full bg-[#EDEEE9]">
      {/* Women's Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.025 }}
          viewport={{ once: true }}
          src="/pic1.png"
          alt=""
          className="w-full md:w-1/2 h-64 object-top-left md:h-[500px] object-cover"
        />
        <div className="w-full md:w-1/2 p-6 md:px-16 flex flex-col justify-center gap-y-5">
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.025 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl">
            In Collection with{" "}
            <span className="text-blue-600 font-semibold">HE & SHE</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.025 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-semibold">
            SPLASH INTO SUMMER
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.025 }}
            viewport={{ once: true }}
            className="font-medium text-sm md:text-base">
            Breathe easy this summer with our lightweight, flowy dresses
            designed to keep you cool while turning heads. From brunch dates to
            beach strolls, these vibrant pieces are made to move with you.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.025 }}
            viewport={{ once: true }}
            className="font-medium text-sm md:text-base">
            Elevate your summer style with dresses that capture the essence of
            the season. From cool cottons to sun-soaked colors, each piece is
            made to flatter, flow, and feel amazing.
          </motion.p>
          <Button word="Shop Women's" onclick="women" />
        </div>
      </div>

      {/* Men's Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <div className="w-full md:w-1/2 p-6 md:px-16  flex flex-col justify-center gap-y-5 order-2 md:order-1">
          <motion.h1
          initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.025 }}
            viewport={{ once: true }}
          className="text-lg md:text-xl">
            In Collection with{" "}
            <span className="text-blue-600 font-semibold">HE & SHE</span>
          </motion.h1>
          <motion.h2
          initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.025 }}
            viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold tracking-wider">
            EFFORTLESS STYLE
          </motion.h2>
          <motion.p
          initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.025 }}
            viewport={{ once: true }}
          className="font-medium text-sm md:text-base">
            Simple, structured, and built to last. Our men’s pieces focus on
            clean lines, breathable fabrics, and versatile fits that transition
            easily from laid-back to sharp.
          </motion.p>
          <motion.p
          initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.025 }}
            viewport={{ once: true }}
          className="font-medium text-sm md:text-base">
            Built for ease and confidence, our styles combine subtle design with
            quality craftsmanship. Whether you're going out or staying in,
            you'll look put together without trying too hard.
          </motion.p>
          <Button word="Shop Men's" onclick="men" />
        </div>
        <motion.img
        initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.025 }}
            viewport={{ once: true }}
          src="/pic3.png"
          alt=""
          className="w-full md:w-1/2 h-64 md:h-[500px] object-cover object-top-left order-1 md:order-2"
        />
      </div>
    </div>
  )
}

export default Page7
