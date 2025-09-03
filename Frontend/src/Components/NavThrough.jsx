import { useEffect } from "react"
import { useLocation } from "react-router-dom"


const NavThrough = () => {
  const location  =  useLocation()
  
  return (
    <div className='h-[5rem] z-10 w-full px-6 flex items-center justify-between fixed top-0 bg-white shadow-md'>
      {/* Logo */}
      <h1 className='text-3xl font-bold tracking-wide'>HE&SHE</h1>

      {/* Steps */}
      <div className='flex items-center gap-x-10'>
        {/* Step 1: Shipping */}
        <div className='flex items-center gap-x-3'>
          <div className='h-10 w-10 bg-[#AC9C8D]/20 text-[#AC9C8D] rounded-full flex items-center justify-center text-lg'>
            <i className="fa-solid fa-truck-fast"></i>
          </div>
          <h1 className='text-lg font-medium text-gray-700'>Shipping</h1>
        </div>

        {/* Step 2: Confirmation */}
        <div className='flex items-center gap-x-3'>
          <div className={`h-10 w-10  rounded-full flex items-center justify-center text-lg ${location.pathname === '/confirmation'? 'bg-[#AC9C8D]/20 text-[#AC9C8D]':'bg-gray-200 text-gray-600'} `}>
            <i className="fa-solid fa-check-double"></i>
          </div>
          <h1 className='text-lg font-medium text-gray-700'>Confirmation</h1>
        </div>
      </div>

      {/* Back Button */}
      <button className='bg-[#AC9C8D]/70 hover:bg-[#AC9C8D] text-white px-4 py-2 rounded-md shadow-md transition duration-200'>
        Back to Home
      </button>
    </div>
  )
}

export default NavThrough
