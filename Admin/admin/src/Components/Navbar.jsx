import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-white/80 backdrop-blur shadow-md p-5  flex justify-between items-center sticky top-0 z-10">
          <input
            type="text"
            placeholder="Search products, orders, users..."
            className="border border-[#AC9C8D] px-4 ml-10 py-2 rounded-lg w-1/3 focus:outline-none focus:ring-2 focus:ring-[#AC9C8D] transition"
          />
          <div className="flex items-center gap-4">
            <span className="text-gray-700 font-semibold text-lg">
              Welcome, <span className="text-blue-700">Admin</span> 👋
            </span>
            <img
              src="https://ui-avatars.com/api/?name=Admin&background=4f46e5&color=fff"
              alt="Admin Avatar"
              className="w-10 h-10 rounded-full border-2 border-blue-500"
            />
          </div>
        </div>
  )
}

export default Navbar
