import React, { useContext } from 'react'
import { FaBoxOpen, FaUsers, FaShoppingCart, } from 'react-icons/fa'
import { adminDataContext } from '../Context/AdminContext'
const Dashboard = () => {
const {productList,allOrders,allUsers}  =useContext(adminDataContext)

  return (
     <div className="p-8 flex-1 overflow-y-auto">
          <h2 className="text-2xl font-bold mb-8 text-blue-800">Dashboard Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card */}
            <div className="bg-gradient-to-tr from-blue-500 to-blue-300 p-7 rounded-2xl shadow-lg flex flex-col items-center hover:scale-105 transition">
              <FaBoxOpen className="text-4xl text-white mb-3" />
              <h3 className="text-lg font-semibold text-white mb-1">Total Products</h3>
              <p className="text-4xl font-bold text-white">{productList.length}</p>
            </div>
            <div className="bg-gradient-to-tr from-green-500 to-green-300 p-7 rounded-2xl shadow-lg flex flex-col items-center hover:scale-105 transition">
              <FaShoppingCart className="text-4xl text-white mb-3" />
              <h3 className="text-lg font-semibold text-white mb-1">Orders Today</h3>
              <p className="text-4xl font-bold text-white">{allOrders.length}</p>
            </div>
            <div className="bg-gradient-to-tr from-purple-500 to-purple-300 p-7 rounded-2xl shadow-lg flex flex-col items-center hover:scale-105 transition">
              <FaUsers className="text-4xl text-white mb-3" />
              <h3 className="text-lg font-semibold text-white mb-1">Active Users</h3>
              <p className="text-4xl font-bold text-white">{allUsers.length}</p>
            </div>
          </div>
          {/* Add a unique section for recent activity */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4 text-blue-700">Recent Activity</h3>
            <ul className="bg-white rounded-xl shadow divide-y">
              <li className="p-4 flex justify-between items-center">
                <span className="text-gray-700">
                  New product <b>Wireless Headphones</b> added
                </span>
                <span className="text-xs text-gray-400">2 min ago</span>
              </li>
              <li className="p-4 flex justify-between items-center">
                <span className="text-gray-700">
                  Order <b>#12345</b> placed
                </span>
                <span className="text-xs text-gray-400">10 min ago</span>
              </li>
              <li className="p-4 flex justify-between items-center">
                <span className="text-gray-700">
                  User <b>Jane Doe</b> signed up
                </span>
                <span className="text-xs text-gray-400">30 min ago</span>
              </li>
            </ul>
          </div>
        </div>
  )
}

export default Dashboard
