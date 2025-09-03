import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'
const About = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [])

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <motion.div
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, }}
      transition={{ duration: 0.5 }}
    className="bg-[#fffdfb] text-[#111]">
      
      {/* Full-Screen Hero */}
      <section className="h-screen relative bg-cover bg-center" style={{ backgroundImage: "url('/banner1.jpg')" }}>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-6 md:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              Not Just Clothing,<br />A Culture.
            </h1>
            <p className="text-gray-200 mt-4 text-lg max-w-2xl mx-auto font-Satoshi">
              We're redefining the relationship between people and the clothes they wear.
            </p>
          </motion.div>
        </div>
      </section>

      {/*  Story + Image Split */}
      <section className="grid md:grid-cols-2 items-center min-h-[70vh] px-6 md:px-20 py-20 gap-10">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className=" text-4xl md:text-5xl font-bold mb-6">Our Origin</h2>
          <p className="text-lg font-Satoshi text-gray-700 leading-relaxed">
            It began in a small studio with big dreams — to make fashion more human. With every stitch and silhouette, we craft confidence and individuality. StyleAura isn’t just a brand, it’s a lifestyle — minimal, elevated, essential.
          </p>
        </motion.div>
        <motion.img
          src="/banner2.png"
          alt="Studio"
          className="rounded-xl shadow-lg w-full h-[450px] object-center object-cover "
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
      </section>

      {/*  Artistic Philosophy Quote */}
      <section className="bg-[#f7f2ee] text-center py-32 px-6 md:px-32">
        <motion.blockquote
          className="text-3xl md:text-4xl italic font-Satoshi text-gray-800 leading-loose"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          “Fashion is not just fabric — it’s expression, rebellion, a quiet revolution stitched in cotton and confidence.”
        </motion.blockquote>
        <p className="mt-6 text-gray-500 text-sm">– HE&SHE Philosophy</p>
      </section>

      {/*  Visual Highlights Grid */}
      <section className="py-24 px-6 w-full  md:px-20 bg-white">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">What Defines Us</h2>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4  gap-8 max-w-6xl mx-auto">
          {[
            { img: '/banner3.jpg', label: 'Gender-Neutral Wear' },
            { img: '/banner4.jpg', label: 'Slow Fashion' },
            { img: '/banner5.jpg', label: 'Sustainable Fabrics' },
            { img: '/banner6.jpg', label: 'Timeless Classics' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-xl shadow hover:shadow-xl transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <img src={item.img} alt={item.label} className="w-[95%] md:w-full lg:w-full  h-[25rem] object-cover object-left-top" />
              <div className="bg-white text-center py-3 font-semibold text-lg text-gray-700">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-black text-white py-28 text-center px-6 md:px-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Dress for who you are becoming.</h2>
          <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
            Explore our latest collections and express your essence through curated pieces that matter.
          </p>
          <button onClick={()=>navigate("/shop")} className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition">
            Shop the Story
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer/>
    </motion.div>
  )
}

export default About
