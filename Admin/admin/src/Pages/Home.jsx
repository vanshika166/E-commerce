// AdminPanel.jsx
import React, { useState } from 'react'
import { FaBoxOpen, FaChartLine, FaShoppingCart, FaBars  } from 'react-icons/fa'
import { IoAdd, IoLogOutOutline } from 'react-icons/io5';
import Navbar from '../Components/Navbar.jsx'
import Dashboard from '../Pages/Dashboard.jsx'
import Products from '../Pages/Products.jsx'
import { useNavigate } from 'react-router-dom'
import Orders from './Orders.jsx'
import AddProducts from './AddProducts.jsx'

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [dashboard, setDashboard] = useState(true)
  const [products, setProducts] = useState(false)
  const [orders, setOrders] = useState(false)
  const [addProducts, setAddProducts] = useState(false)

  const handleDashBoard = ()=>{
    setDashboard(true)
    setProducts(false)
    setOrders(false)
    setAddProducts(false)
  }
  const handleProducts = ()=>{
    setProducts(true)
    setDashboard(false)
    setOrders(false)
    setAddProducts(false)
  }
  const handleOrders = ()=>{
    setProducts(false)
    setDashboard(false)
    setOrders(true)
    setAddProducts(false)
  }
  const handleAddProducts = ()=>{
    setProducts(false)
    setDashboard(false)
    setOrders(false)
    setAddProducts(true)
  }
  
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 relative">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full z-20 transition-all duration-500 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } w-72 bg-[#AC9C8D] text-white shadow-xl p-6 flex flex-col justify-between rounded-tr-3xl rounded-br-3xl`}
        style={{ minHeight: '100vh' }}
      >
        <div>
          <h1 className="text-2xl font-extrabold tracking-wide mb-10 text-center">HE&SHE Admin</h1>
          <nav>
            <ul className="space-y-6">
              <li onClick={()=>handleDashBoard()} className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white hover:text-[#AC9C8D] transition cursor-pointer">
                <FaChartLine className="text-xl" />
                <span className="font-medium">Dashboard</span>
              </li>
              <li onClick={()=>handleProducts()} className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white hover:text-[#AC9C8D] transition cursor-pointer">
                <FaBoxOpen className="text-xl" />
                <span className="font-medium">Products</span>
              </li>
              <li onClick={()=>handleOrders()} className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white hover:text-[#AC9C8D] transition cursor-pointer">
                <FaShoppingCart className="text-xl" />
                <span className="font-medium">Orders</span>
              </li>
              <li onClick={()=>handleAddProducts()} className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white hover:text-[#AC9C8D] transition cursor-pointer">
                 <IoAdd className="text-xl"/>
                <span className="font-medium">Add Items</span>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-10">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-blue-600 hover:bg-blue-600 hover:text-white transition w-full justify-center font-semibold shadow">
            <IoLogOutOutline className="text-xl" />
            <span>Logout</span>
          </button>
        </div>
        {/* Sidebar Toggle Button (inside sidebar, top right) */}
        <button
          className="absolute -right-5 top-6 bg-[#AC9C8D] text-white p-2 rounded-full shadow-lg z-30 border-4 border-white transition-all duration-500"
          onClick={() => setSidebarOpen((prev) => !prev)}
          aria-label="Toggle Sidebar"
          style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
        >
          <FaBars className="text-2xl" />
        </button>
      </aside>

      {/* Sidebar Toggle Button (when sidebar is closed, show at left edge) */}
      {!sidebarOpen && (
        <button
          className="fixed top-6 left-2 z-30 bg-[#AC9C8D] text-white p-2 rounded-full shadow-lg border-4 border-white transition-all duration-500"
          onClick={() => setSidebarOpen(true)}
          aria-label="Open Sidebar"
        >
          <FaBars className="text-2xl" />
        </button>
      )}

      {/* Main Content */}
      <main className={`flex-1 flex flex-col transition-all duration-500 ${sidebarOpen ? 'ml-72' : 'ml-0'}`}>
        {/* Navbar */}
        <Navbar/>

        {/* Main Dashboard Area */}
     {dashboard && (<Dashboard/>)}
     {products && (<Products/>)}
     {orders && (<Orders/>)}
     {addProducts && (<AddProducts/>)}
      </main>
    </div>
  )
}

export default Home

