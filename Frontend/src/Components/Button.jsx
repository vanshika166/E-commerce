
import { motion } from 'framer-motion'
import {useNavigate } from 'react-router-dom'

const Button = ({ word,onclick, to = "#" }) => {
const navigate = useNavigate()


  return (
    <motion.div
    onClick={()=>navigate(`/${onclick}`)}
      to={to}
      className='relative inline-block px-6 cursor-pointer py-3 text-2xl font-medium group overflow-hidden rounded-md'
      whileHover="hover"
      initial="initial"
    >
      {/* Glowing border trail */}
      <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm scale-125 z-0"></span>

      {/* Slide-in background */}
      <motion.span
        className='absolute inset-0 bg-[#AC9C8D] z-0 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-in-out'
      />

      {/* Animated Text */}
      <motion.span
        className='relative z-10 text-black group-hover:text-white transition-all duration-200'
        whileHover={{ scale: 1.05 }}
      >
        {word}
      </motion.span>
    </motion.div>
  )
}

export default Button
