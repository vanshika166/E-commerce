import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"

const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
}

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15
        }
    }
}

const Footer = () => {
    const navigate = useNavigate()
    return (
        <motion.footer
            className="bg-black cursor-default text-white px-10 py-12 flex flex-col justify-between gap-10 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
        >
            <motion.div className='flex sm:flex-row flex-col w-full justify-between' variants={fadeIn}>
                {/* Left Section */}
                <motion.div className="flex flex-col gap-5 max-w-md" variants={fadeIn}>
                    {/* Logo & Tagline */}
                    <motion.div className="flex flex-col sm:items-start items-center" variants={fadeIn}>
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <span className="relative threads text-[1.5rem] font-light border-[2px] p-2 rounded-full">HS</span> HE & SHE
                        </h2>
                        <p className="text-sm text-gray-400 mt-1">Elevate your style with trendsetting fashion</p>
                    </motion.div>

                    {/* Social Icons */}
                    <motion.div className="flex gap-8 mt-2 sm:justify-start justify-center sm:mb-0 mb-8 bg-gray-800/50 sm:bg-transparent w-full" variants={fadeIn}>
                    <a href="https://www.facebook.com/" target="black">  <i className="fab fa-facebook-f hover:text-blue-400 hover:bg-white/20 p-2 px-3 rounded-sm transition-all duration-150 text-xl cursor-pointer"></i></a>
                       <a href="https://www.instagram.com/" target="blank"><i className="fab fa-instagram hover:text-blue-400 hover:bg-white/20 p-2 rounded-sm transition-all duration-150 text-xl cursor-pointer"></i></a>
                        <a href="https://www.twitter.com/" target="blank"><i className="fab fa-twitter hover:text-blue-400 hover:bg-white/20 p-2 rounded-sm transition-all duration-150 text-xl cursor-pointer"></i></a>
                        
                    </motion.div>
                </motion.div>

                {/* Navigation Links */}
                <motion.div className="flex gap-12" variants={fadeIn}>
                    <div>
                        <h4 className="font-semibold mb-2">Shop</h4>
                        <ul className="text-sm text-gray-400 space-y-1">
                            <li onClick={() => navigate("/men")} className="hover:text-white cursor-pointer">Men</li>
                            <li onClick={() => navigate("/women")} className="hover:text-white cursor-pointer">Women</li>
                            <li onClick={() => navigate("/newarrival")} className="hover:text-white cursor-pointer">New Arrivals</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Support</h4>
                        <ul className="text-sm text-gray-400 space-y-1">
                            <li className="hover:text-blue-300 cursor-pointer">Contact Us</li>
                            <li className="hover:text-blue-300 cursor-pointer">FAQs</li>
                            <li onClick={() => navigate("/check")} className="hover:text-blue-300 cursor-pointer">Track Order</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Account</h4>
                        <ul className="text-sm text-gray-400 space-y-1">
                            <li onClick={() => navigate("/authentication")} className="hover:text-white cursor-pointer">Sign In</li>
                            <li onClick={() => navigate("/authentication")} className="hover:text-white cursor-pointer">Create Account</li>
                            <li onClick={() => navigate("/wishlist")} className="hover:text-white cursor-pointer">My Wishlist</li>
                        </ul>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div className='relative w-full flex items-center justify-center gap-x-3' variants={fadeIn}>
                <h1 className='threads lg:text-[11rem] md:text-[7rem] text-[3rem] text-gray-400/10 tracking-widest font-bold scale-y-125'>THREADS</h1>
                <h2 className="relative threads sm:text-[3.5rem] text-[2rem] font-light text-gray-400/20 sm:bottom-[4rem] bottom-2 border-[2px] sm:py-4 py-3 sm:px-6 px-4 rounded-full">HS</h2>
            </motion.div>

            {/* Creator or Company */}
            <motion.p className="text-md w-full flex items-center justify-center text-gray-500 mt-4" variants={fadeIn}>
                © 2023 <span className="text-blue-400">HE & SHE</span>. All rights reserved.
            </motion.p>
        </motion.footer>
    )
}

export default Footer
