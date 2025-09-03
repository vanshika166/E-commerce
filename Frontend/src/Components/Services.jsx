import React from 'react'

const Services = ({mode}) => {
  return (
    <div className={`h-[45%] sm:flex hidden w-full relative p-2 items-center justify-between ${mode?"bg-[#C5C5C5] text-black":"bg-[#AC9C8D] text-white"}`}>
        <div className='h-[90%] w-[23%] border-r-[0.05px] border-[#EFEEE1]/50 flex flex-col items-center justify-center gap-y-4 '>
        <i className="fa-solid fa-truck bg-[#EFEEE1] text-black px-3 py-4 rounded-full text-3xl"></i>
        <h1 className='text-2xl font-medium'>Free Shipping</h1>
        <h1>Enjoy free shipping on everything.</h1>
        </div>
        <div className='h-[90%] w-[23%] border-r-[0.05px] border-[#EFEEE1]/50 flex flex-col items-center justify-center gap-y-4'>
        <i className="fa-solid fa-credit-card bg-[#EFEEE1] text-black p-4 rounded-full text-3xl"></i>
<h1 className='text-2xl font-medium'>Secure Payment</h1>
        <h1>Fast, safe, and secure payments.</h1>

        </div>
        <div className='h-[90%] w-[23%] border-r-[0.05px] border-[#EFEEE1]/50 flex flex-col items-center justify-center gap-y-4'>
        <i className="fa-solid fa-circle-info bg-[#EFEEE1] text-black p-4 rounded-full text-3xl"></i>
<h1 className='text-2xl font-medium'>Customer Support</h1>
        <h1>Always here to assist you.</h1>

        </div>
        <div className='h-[90%] w-[23%] flex flex-col items-center justify-center gap-y-4'>
        <i className="fa-solid fa-cart-flatbed-suitcase bg-[#EFEEE1] text-black px-3 py-4 rounded-full text-3xl"></i>
<h1 className='text-2xl font-medium'>Seamless Shopping</h1>
        <h1>Smooth, easy, and convenient.</h1>

        </div>
    </div>
  )
}

export default Services