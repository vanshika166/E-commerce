import  { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { productDataContext } from "../Context/ProductContext";
import { pageDataContext } from "../Context/pageContext";
import { userDataContext } from "../Context/UserContext";
import toast from "react-hot-toast";

const Cart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userCartList, getCartCount,getUsercart,totalAmount, deleteItem,getAmount } =
    useContext(productDataContext);
  const { cart, handleCart,setCart } = useContext(pageDataContext);
  const { userData } = useContext(userDataContext);


  
  useEffect(() => {
   getAmount()
  }, [])

  useEffect(() => {
    getUsercart()
  }, [userCartList])
  
  
  const formattedAmount = totalAmount.toLocaleString("en-IN",{style:"currency",currency:"INR"})

  return (
    cart && (
      <div className="lg:h-full cursor-default h-screen lg:w-[40%] w-full fixed right-0 top-0 bg-[#EFEEE1] shadow-2xl p-4 z-[4000] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-300 pb-4">
          <h1 className="text-2xl font-semibold text-gray-800">
            Your Cart
            <span className="ml-2 bg-blue-300/50 text-sm px-3 py-1 rounded-full">
              {getCartCount()}
            </span>
          </h1>
          <button
            onClick={handleCart}
            className="text-gray-600 hover:text-white hover:bg-gray-800 transition duration-200 p-2 rounded-full"
          >
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-auto mt-4 pr-2 custom-scrollbar">
          {userCartList && userCartList.length > 0 ? (
            userCartList.map((item, index) => (
              <div key={index} className="mb-6">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image1}
                    alt={item.name}
                    className="h-[10rem] w-[9rem] rounded-lg object-cover object-top shadow-md"
                  />
                  <div className="flex-1 font-Satoshi">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {item.name}
                    </h2>
                    <p className="text-gray-600 font-Satoshi">
                      Size:{" "}
                      <span className="ml-2">
                        {Object.keys(item.sizes).join(", ")}
                      </span>
                    </p>
                    <p className="text-gray-600 font-Satoshi">
                      Qty: <span className="ml-2">{item.quantity}</span>
                    </p>

                    {/* Price Section */}
                    {item?.discount > 0 ? (
                      <div className="mt-2 flex items-center gap-2">
                        {/* Discounted Price */}
                        <span className="text-md font-bold text-green-700">
                          {(
                            (item.price - (item.price * item.discount) / 100) *
                            item.quantity
                          ).toLocaleString("en-IN",{style:"currency",currency:"INR"})}
                        </span>

                        {/* Original Price */}
                        <span className="text-gray-500 line-through text-lg">
                          {(item.price * item.quantity).toLocaleString("en-IN",{style:"currency",currency:"INR"})}
                        </span>

                        {/* Discount Badge */}
                        <span className="bg-green-100 text-green-700 text-sm font-semibold px-2 py-1 rounded">
                          {item.discount}% OFF
                        </span>
                      </div>
                    ) : (
                      <p className="text-xl font-semibold text-green-700 mt-2">
                        {(item.price * item.quantity).toLocaleString("en-IN",{style:"currency",currency:"INR"})}
                      </p>
                    )}

                    <button
                      onClick={() => deleteItem(item.id)}
                      className="text-sm mt-3 text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="text-xl font-semibold text-gray-700">
                    ₹
                    {item?.discount > 0
                      ? (item?.price - (item?.price * item?.discount) / 100) *
                        item.quantity
                      : item.price * item.quantity}
                  </div>
                </div>
                <hr className="mt-4 border-gray-300" />
              </div>
            ))
          ) : (
            <div className="h-full flex flex-col items-center justify-center">
              <h1 className="text-2xl font-semibold text-gray-600">
                Your Cart is Empty
              </h1>
              <button
                onClick={() => navigate("/shop")}
                className="mt-4 bg-[#AC9C8D]/70 hover:bg-[#AC9C8D] text-white px-6 py-2 rounded-full font-medium transition duration-200"
              >
                Explore Collection
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-gray-300">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Subtotal</h2>
            <span className="text-xl font-medium text-gray-900 font-Satoshi">{formattedAmount}</span>
          </div>
          <button
            onClick={() => {
              if (userCartList.length === 0) {
                toast.error(
                  "Oops! Looks like your cart is empty. Start shopping to add your favorite items!"
                );
              } else {
                if (userData && userData._id) {
                  navigate("/shipping");
                } else {
                  toast.error("Sign in or Log in to continue Shopping.");
                }
              }
            }}
            className="w-full bg-[#AC9C8D]/80 hover:bg-[#AC9C8D] text-white text-lg font-semibold py-3 rounded-md transition duration-200 shadow-md"
          >
            Checkout
          </button>
        </div>
      </div>
    )
  );
};

export default Cart;
