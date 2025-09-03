import React, { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "../Components/Navigation";
import Cart from "../Components/Cart.jsx";
import DropDown from "../Components/DropDown.jsx";
import Page2 from "./Page2.jsx";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { pageDataContext } from "../Context/PageContext.jsx";

const Home = () => {
  const { cart, dropMenu, handleCart, handleDropMenu, setDropMenu } =
    useContext(pageDataContext);
  const navigate = useNavigate();

  return (
    <>
      <DropDown dropMenu={dropMenu} setDropMenu={setDropMenu} />
      <Cart cart={cart} handleCart={handleCart} />
      <Navigation
        cart={cart}
        handleCart={handleCart}
        dropMenu={dropMenu}
        handleDropMenu={handleDropMenu}
      />
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className={`h-screen fixed  inset-0 w-full`}
      >
        <img
          src="/pic14.jpg"
          alt=""
          className="lg:block hidden contrast-125 object-cover  transition-all duration-500"
        />
        <img
          src="/pic15.png"
          alt=""
          className="lg:hidden h-full w-full block contrast-125 object-cover  transition-all duration-500"
        />

        <div className="h-screen w-full  bg-black/20 flex  flex-col items-start justify-center p-3 absolute inset-0">
          <h1 className="lg:text-[15rem] md:text-[8rem] text-[4rem] lg:text-black text-white">
            THREADS
          </h1>
          <h2
            className={`absolute lg:block  hidden text-[3.5rem] right-[5rem] top-[8rem] border-[2px]  py-4 px-6 rounded-full`}
          >
            HS
          </h2>
          <h2 className="text-3xl lg:text-black text-white relative lg:left-[3.5rem] left-[1rem] lg:bottom-[4.5rem] md:bottom-[3rem] tracking-wider">
            Style for both worlds.”
          </h2>

          <button
            onClick={() => navigate("/shop")}
            className={`absolute bottom-0 font-medium right-0 text-2xl bg-black text-white px-12 rounded-tl-2xl hover:cursor-pointer hover:animate-pulse tracking-wide py-5`}
          >
            SHOP NOW
          </button>
        </div>
      </motion.div>
      <Page2 />
    </>
  );
};

export default Home;
