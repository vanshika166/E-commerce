import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation2 from '../Components/Navigation2.jsx';
import { authDatacontext } from '../Context/AuthContext.jsx';
import { pageDataContext } from '../Context/pageContext.jsx'
import Cart from '../Components/Cart.jsx'
import axios from 'axios';
import { motion } from 'framer-motion';
import DropDown from '../Components/dropDown.jsx';


const CheckOrders = () => {
  const { serverURL } = useContext(authDatacontext);
  const {cart,dropMenu} = useContext(pageDataContext)
  const [orderData, setOrderData] = useState([]);
  const navigate = useNavigate();

  console.log(orderData)
  useEffect(() => {
    getUserOrderData();
  }, []);

  const getUserOrderData = async () => {
    try {
      const result = await axios.post(`${serverURL}/api/order/userorder`, {}, { withCredentials: true });
      if (result.data) {
        let allOrderData = [];
        result.data.forEach((order) => {
          order.items.forEach((item) => {
            item['status'] = order.status;
            item['payment'] = order.payment;
            item['paymentMethod'] = order.paymentMethod;
            item['date'] = order.date;
            item['orderId'] = order._id;
            allOrderData.push(item);
          });
        });
        setOrderData(allOrderData.reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, }}
      transition={{ duration: 0.5 }}
    className="min-h-screen w-full bg-[#EDEEE9] p-2 relative">
      {/* navigation2 */}
      <Navigation2 />
      {/* cart */}
      {cart ? <Cart /> : null}
      {/* dropDown */}
      {dropMenu?<DropDown/>:null}
      <div className="w-full min-h-full pt-[5rem] px-2 md:px-6 flex flex-col gap-y-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">My Orders</h1>

        {orderData.length === 0 ? (
          <div className="text-center text-lg md:text-xl font-medium text-gray-500">
            You have not placed any orders yet.
            <button
              onClick={() => navigate('/shop')}
              className="ml-2 md:ml-4 underline text-teal-600 hover:text-teal-800"
            >
              Shop Now
            </button>
          </div>
        ) : (
          orderData.map((item, index) => (
            <div
              key={index}
              className="bg-white/30 font-Satoshi rounded-2xl border border-[#AC9C8D]/50 shadow-sm p-2 md:p-5 flex flex-row items-center gap-3 md:gap-4 min-h-[5.5rem] md:min-h-[7rem]"
            >
              {/* Image */}
              <img
                src={item.image1}
                alt={item.name}
                className="h-[10rem] w-20 md:h-[7rem] md:w-[7rem] rounded-md object-cover flex-shrink-0"
              />

              {/* Info */}
              <div className="flex-1 flex flex-col justify-between h-full">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                  <h1 className="text-base md:text-xl font-semibold text-gray-800">{item.name}</h1>
                  <div className="flex flex-wrap items-center gap-1 md:gap-4 text-xs md:text-sm mt-1 text-gray-600">
                    <span className="bg-gray-100 px-2 md:px-3 py-1 rounded-full">₹ {item.price}</span>
                    <span className="bg-gray-100 px-2 md:px-3 py-1 rounded-full">Qty: {item.quantity}</span>
                    <span className="bg-gray-100 px-2 md:px-3 py-1 rounded-full">
                      Size: {Array.isArray(item.sizes) ? item.sizes.join(', ') : item.sizes}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-1">
                  <p className="text-xs md:text-sm text-gray-500">
                    Date: <span className="text-gray-700">{new Date(item.date).toLocaleDateString()}</span>
                  </p>
                  <p className="text-xs md:text-sm text-gray-500">
                    Payment: <span className="text-gray-800">{item.paymentMethod}</span>
                  </p>
                </div>
              </div>

              {/* Order ID & Status */}
              <div className="flex flex-col items-end justify-between h-full ml-2 min-w-[80px]">
                <div className="text-right text-[10px] md:text-xs text-gray-600">
                  <p>Order ID:</p>
                  <p className="font-mono text-[10px] md:text-xs text-gray-700 break-all">{item.orderId}</p>
                </div>
                {/* Tracking Status */}
                <div className="mt-2 md:mt-4 w-full">
                  <div className="flex items-center justify-end gap-1">
                    {["Shipped", "Out for Delivery", "Delivered"].map((step, i) => {
                      const isActive =
                        step === item.status ||
                        (item.status === "Out for Delivery" && step !== "Shipped") ||
                        (item.status === "Delivered");
                      return (
                        <React.Fragment key={i}>
                          <div
                            className={`w-3 h-3 md:w-5 md:h-5 rounded-full ${isActive ? 'bg-green-500' : 'bg-gray-300'}`}
                          ></div>
                          {i !== 2 && (
                            <div
                              className={`h-1 w-3 md:w-5 ${isActive ? 'bg-green-400' : 'bg-gray-300'}`}
                            ></div>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                  <span className="block text-[9px] md:text-xs mt-1 text-gray-500 text-right">
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}

        {/* Payment Summary Placeholder (optional) */}
        <div className="mt-6 mb-10 w-full p-3 md:p-4 rounded-2xl bg-[#AC9C8D]/70 text-gray-700 shadow-sm">
          <h2 className="text-base md:text-lg font-semibold">Payment Summary</h2>
          <p className="text-xs md:text-sm mt-1">
            * Payment information is attached per item based on your order history.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default CheckOrders;
