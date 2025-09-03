import React, { useContext, useEffect, useState } from "react";
import { AiFillHeart, AiOutlineShoppingCart, AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { productDataContext } from "../Context/ProductContext.jsx";
import Footer from '../Pages/Footer.jsx'
import Navigation2 from '../Components/Navigation2.jsx'
import { wishDataContext } from "../Context/WishlistContext.jsx";
import { pageDataContext } from "../Context/pageContext.jsx";
import Cart from "../Components/Cart.jsx";
import DropDown  from '../Components/DropDown.jsx';
const Wishlist = () => {
  const {wishList,removeWishList} = useContext(wishDataContext)
  const {productList} = useContext(productDataContext);
  const {cart,dropMenu} = useContext(pageDataContext)
  const [wishListData, setWishListData] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({top:0,left:0,behavior:'smooth'})
    userWishlist()
  }, [wishList, productList])

 const userWishlist = () => {
  if (!wishList || !productList) return;

  const data = wishList
    .filter((id) => id !== null) // null values hatao
    .map((elem) => productList.find((item) => item._id === elem))
    .filter((item) => item !== undefined); // agar koi id match na kare

  setWishListData(data);
};

  return (
    <>
      <div className="min-h-screen  bg-[#F9F8F4] py-10 px-6 sm:px-12 flex flex-col">
        {/* navigation */}
        <Navigation2 />
        {/* cart */}
        {cart ? <Cart /> : null}
        {/* dropDown */}
        {dropMenu? <DropDown/>:null}
        {/* Header */}
        <h1 className="text-3xl mt-12 font-bold text-gray-800 mb-8 flex items-center gap-3">
          <AiFillHeart className="text-red-500 text-3xl " /> My Wishlist
        </h1>

        {wishListData.length > 0 ? (
          <>
            {/* Wishlist Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 flex-1">
              {wishListData.map((item) => {
                const discountedPrice =
                  item.discount > 0
                    ? item.price - (item.price * item.discount) / 100
                    : item.price;

                return (
                  <div
                    key={item._id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                  >
                    {/* Image */}
                    <div className="relative group">
                      <img
                        src={item.image1}
                        alt={item.name}
                        className="h-64 w-full object-cover object-top"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col justify-between flex-1">
                      <div>
                        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
                          {item.name}
                        </h2>
                        <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                          {item.description}
                        </p>
                      </div>

                      {/* Price Section */}
                      {item.discount > 0 ? (
                        <div className="flex items-center gap-2 mt-3">
                          <span className="text-xl font-bold text-green-700">
                            ₹{discountedPrice}
                          </span>
                          <span className="text-gray-500 line-through">
                            ₹{item.price}
                          </span>
                          <span className="bg-green-100 text-green-700 text-sm font-semibold px-2 py-1 rounded">
                            {item.discount}% OFF
                          </span>
                        </div>
                      ) : (
                        <p className="text-xl font-bold text-gray-800 mt-3">
                          ₹{item.price}
                        </p>
                      )}

                      {/* View Details */}
                      <div className="w-full flex items-center justify-between">
                        <button
                          onClick={() => navigate(`/buy-product/${item._id}`)}
                          className="mt-4 w-[48%] bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition"
                        >
                          View Details
                        </button>
                        <button
                          onClick={()=>removeWishList(item._id)}
                          className="mt-4 w-[48%] bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition"
                        >
                          Delete
                        </button>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer CTA */}
            <div className="mt-10 flex justify-center gap-6">
              <button
                onClick={() => navigate("/shop")}
                className="bg-[#AC9C8D]/90 hover:bg-[#AC9C8D] text-white px-6 py-3 rounded-full font-medium transition"
              >
                Continue Shopping
              </button>

            </div>
          </>
        ) : (
          <div className="h-[70vh] flex flex-col items-center justify-center">
            <AiFillHeart className="text-gray-400 w-16 h-16 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-600">
              Your Wishlist is Empty
            </h2>
            <p className="text-gray-500 mt-2">
              Browse products and add them to your wishlist!
            </p>
            <button
              onClick={() => navigate("/shop")}
              className="mt-6 bg-[#AC9C8D]/80 hover:bg-[#AC9C8D] text-white px-6 py-3 rounded-full font-medium transition"
            >
              Start Shopping
            </button>
          </div>
        )}
      </div>

      <Footer />
    </>

  );
};

export default Wishlist;
