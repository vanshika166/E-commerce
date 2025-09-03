import React, { useContext, useEffect, useState } from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import { authDataContext } from '../Context/AuthContext';
import ViewOrder from '../Components/ViewOrder';
import { toast } from 'react-toastify';

const Orders = () => {
  const { serverURL } = useContext(authDataContext);
  const [allOrders, setAllOrders] = useState([]);
  const [viewDetails, setViewDetails] = useState(false)
  const [orderDetails, setOrderDetails] = useState([])

  const notify = () => {
      toast.success("🎉 Data Saved Successfully!", {
        position: "top-right",
        autoClose: 3000, // milliseconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored", // "light", "dark", "colored"
      });
    };

  // function to handle status on change:

   // function to update the status of the orders:
  const handleOnChange = async(e,orderId) => {
    try {
      const result = await axios.post(serverURL + '/api/order/updatestatus',{orderId,status:e.target.value},{withCredentials:true})
      if(result.data){
      await  handleAllOrders()
      }
    } catch (error) {
      console.log(error)
    }
  }

  // useeffect to get all orders on initial render:

  useEffect(() => {
    handleAllOrders();
  }, []);

  // function to get all orders from database:

  const handleAllOrders = async () => {
    try {
      const result = await axios.post(serverURL + '/api/order/allorders', {}, { withCredentials: true });
      setAllOrders(result.data);
    } catch (error) {
      console.log(error);
    }
  };

console.log(allOrders)


  const handleOrderDetails = async(details) => {
    setViewDetails(!viewDetails)
    setOrderDetails(details)
  }

  // function to delete user order from database 

  const deleteOrder = async (orderId) => {
    try {
      await axios.post(serverURL + '/api/order/deleteorder', { orderId }, { withCredentials: true })
      notify()
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="bg-gray-00 min-h-screen p-8">
      {viewDetails ? <ViewOrder orderDetails={orderDetails} handleOrderDetails={handleOrderDetails} /> : null}
      <h2 className="text-4xl font-bold text-gray-800 mb-8">All Orders</h2>

      <div className="bg-white rounded-xl overflow-x-auto shadow-lg border border-gray-200">
        <table className="w-full table-auto text-sm text-gray-700 cursor-default">
          <thead className="bg-gray-100 text-gray-600 border-b">
            <tr>
              <th className="text-left px-6 py-4">Order ID</th>
              <th className="text-left px-6 py-4">Customer</th>
              <th className="text-left px-6 py-4">Order date</th>
              <th className="text-left px-6 py-4">Total price</th>
              <th className="text-left px-6 py-4">Payment</th>
              <th className="text-left px-6 py-4">Payment status</th>
              <th className="text-left px-6 py-4">Order status</th>
              <th className="text-left px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition-all"
              >
                <td className="px-6 py-4 font-medium text-gray-600">#{order._id}</td>
                <td className="px-6 py-4">{order.address?.fullName || 'N/A'}</td>
                <td className="px-6 py-4">
                  {new Date(order.date).toLocaleDateString('en-IN', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })}
                </td>
                <td className="px-6 py-4 text-green-600 font-semibold">₹ {order.amount}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-md font-semibold`}
                  >
                    {order.paymentMethod}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
                    ${order.payment ? 'bg-green-100 text-green-700' : "bg-red-100 text-red-600"}`}
                  >
                    {order.payment ? "Paid" : "un-Paid"}
                  </span>
                </td>

                <td className=" py-5">
                  <select onChange={(e)=>handleOnChange(e,order._id)}
                  defaultValue={order.status || "Order placed"} name="" id="" className='bg-gray-200 focus:outline-none p-2 rounded-md'>
                    <option value="Order placed">Order placed</option>
                    <option value="Packing">Packing</option>
                    <option value="Shipping">Shipped</option>
                    <option value="Out for delivery">Out for delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>

                <td className="px-6 py-4">
                  <div className="flex gap-5 items-center">
                    <button onClick={() => handleOrderDetails(order)} title="View" className="text-blue-600 hover:text-blue-800">
                      <FaEye size={16} />
                    </button>
                    <button onClick={() => deleteOrder(order._id)} title="Delete" className="text-red-500 hover:text-red-700">
                      <FaTrash size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {allOrders.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-8 text-gray-400">
                  No orders available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
