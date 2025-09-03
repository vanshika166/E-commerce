import React, { useState } from 'react'
import Home from './Pages/Home'
import Women from './Pages/Women'
import Men from './Pages/Men'
import Buy from './Pages/Buy'
import { Routes, Route, useLocation } from 'react-router-dom'
import Shop from './Pages/Shop'
import Authentication from './Pages/Authentication'
import NewArrival from './Pages/NewArrival'
import About from './Pages/About'
import CheckOrders from './Pages/CheckOrders'
import PlaceOrder from './Pages/PlaceOrder'
import Shipping from './Pages/Shipping'
import Confirmation from './Components/Confirmation'
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion'
import Wishlist from './Pages/Wishlist'

const App = () => {
  const [mode, setMode] = useState(false)
  const location = useLocation()
  const handleMode = () => {
    setMode(!mode)
  }
  return (
    <div className={`h-screen relative w-full  transition-colors duration-500 ${mode ? "bg-[#323E42] text-[#EDEEE9]" : "bg-[#EDEEE9] text-black "}`}>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='women' element={<Women />} />
        <Route path='/men' element={<Men />} />
        <Route path='/buy-product/:id' element={<Buy />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/newarrival' element={<NewArrival />} />
        <Route path='/about' element={<About />} />
        <Route path='/placeorder' element={<PlaceOrder />} />
        <Route path='/check' element={<CheckOrders />} />
        <Route path='/confirmation' element={<Confirmation />} />
        <Route path='/shipping' element={<Shipping />} />
        <Route path='/authentication' element={<Authentication />} />
        <Route path='/wishlist' element={<Wishlist />} />

      </Routes>
      </AnimatePresence>


      <Toaster position="top-right" reverseOrder={false} />
    </div>
  )
}

export default App