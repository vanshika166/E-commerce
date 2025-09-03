import React, { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import { useNavigate, useParams } from "react-router-dom";
import { productDataContext } from "../Context/ProductContext";
import Bottom from "../Components/Bottom";
import { pageDataContext } from "../Context/pageContext.jsx";
import Cart from "../Components/Cart.jsx";
import { userDataContext } from "../Context/UserContext.jsx";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import DropDown from "../Components/DropDown.jsx";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { wishDataContext } from "../Context/WishlistContext.jsx";

const Buy = () => {
  const { productList, addToCart, getCartCount, updateUserCart, updateCart } =
    useContext(productDataContext);
  const { cart, handleCart, setCart, dropMenu, handleDropMenu } =
    useContext(pageDataContext);
  const { addToWishlist } = useContext(wishDataContext);
  const { userData } = useContext(userDataContext);
  const [selectedSize, setSelectedSize] = useState("S");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();

  const product = productList.find((pro) => pro._id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [id]);

  if (!product) return <div>Loading.....</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen flex flex-col justify-between gap-y-3"
    >
      {cart ? <Cart /> : null}
      {dropMenu ? <DropDown /> : null}

      {/* navigation bar.... */}
      <nav className="flex fixed w-full bg-[#EDEEE9] z-10 px-4 items-center justify-between py-2">
        <h1 className="text-2xl font-medium">HE & SHE</h1>

        <div className="h-[2.5rem] w-[30%] bg-white p-2 rounded-lg text-black font-medium flex items-center justify-center">
          <i class="fa-solid fa-magnifying-glass text-gray-500"></i>
          <input
            type="text"
            placeholder="Search"
            className="focus:outline-none h-full border-none w-full p-2 font-arial"
          />
        </div>

        {/* icons */}
        <div className="flex items-center justify-center gap-x-6 text-xl">
          {/* User Menu */}
          <button
            onClick={() =>
              !(userData && userData.name)
                ? navigate("/authentication")
                : handleDropMenu()
            }
            className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100 hover:text-black transition-colors text-md duration-300"
          >
            {userData && userData.name ? (
              <span className="text-base font-semibold text-gray-800">
                {userData.name.slice(0, 1).toUpperCase()}
              </span>
            ) : (
              <i className="fa-solid fa-user-plus"></i>
            )}
          </button>

          {/* Wishlist */}
          <button
            onClick={() => navigate("/wishlist")}
            className="relative p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
          >
            <i className="fa-solid fa-heart text-gray-700 hover:text-red-500 transition-colors duration-300"></i>
          </button>

           {/* Cart */}
          <button
            onClick={() => handleCart()}
            className="relative group p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
          >
            <h4 className="absolute -top-1 -right-1 bg-[#AC9C8D] text-white font-bold h-5 w-5 flex items-center justify-center text-xs rounded-full shadow-md">
              {getCartCount()}
            </h4>
            <i className="fa-solid fa-cart-shopping text-gray-700 group-hover:text-black transition-colors duration-300"></i>
          </button>

        </div>
      </nav>
      {/* product details starts here: */}
      <div className="w-full flex flex-col min-h-screen bg-[#EDEEE9] py-2 px-1 relative top-[4rem]">
        <div className="w-full min-h-[33.5rem] flex sm:flex-row flex-col ">
          <div className="h-full sm:w-[50%] w-full p-2 flex sm:flex-row  flex-col-reverse justify-center">
            <div className="flex sm:flex-col gap-x-2 flex-row items-center justify-between px-1 py-2 h-full sm:gap-y-5">
              <img
                onClick={() => setActiveImage(0)}
                src={product?.image1}
                alt=""
                className="h-[5rem] w-[5rem] sm:h-[7.5rem] object-cover sm:w-[7.5rem] rounded-lg"
              />
              <img
                onClick={() => setActiveImage(1)}
                src={product?.image2}
                alt=""
                className="h-[5rem] w-[5rem] sm:h-[7.5rem] object-cover sm:w-[7.5rem] rounded-lg"
              />
              <img
                onClick={() => setActiveImage(2)}
                src={product?.image3}
                alt=""
                className="h-[5rem] w-[5rem] sm:h-[7.5rem] object-cover sm:w-[7.5rem] rounded-lg"
              />
              <img
                onClick={() => setActiveImage(3)}
                src={product?.image4}
                alt=""
                className="h-[5rem] w-[5rem] sm:h-[7.5rem] object-cover sm:w-[7.5rem] rounded-lg"
              />
            </div>
            <img
              src={product?.[`image${activeImage + 1}`]}
              alt=""
              className="sm:h-full h-[80%] sm:w-[80%] w-full rounded-2xl object-cover object-left-top"
            />
          </div>

          <div className="min-h-full p-2 sm:w-[50%] w-full cursor-default flex flex-col px-5 gap-y-3">
            <h1 className="px-2 py-1 border-[1px] border-gray-400/10 rounded-full w-fit  text-sm">
              {product?.category} fashion
            </h1>
            <h1 className="text-2xl  font-semibold">{product?.name}</h1>
            {/* Price Section */}
            <div className="flex items-center gap-x-4">
              {product?.discount > 0 ? (
                <>
                  {/* Discounted Price */}
                  <h2 className="font-bold sm:text-2xl text-xl font-Satoshi text-black">
                    ₹{" "}
                    {product?.price -
                      (product?.price * product?.discount) / 100}
                  </h2>

                  {/* Original Price (cut) */}
                  <h2 className="font-semibold sm:text-xl text-lg line-through text-gray-500">
                    ₹ {product?.price}
                  </h2>

                  {/* Discount Percentage */}
                  <span className="text-green-600 font-medium sm:text-lg text-md">
                    {product?.discount}% OFF
                  </span>
                </>
              ) : (
                // Normal Price (no discount)
                <h2 className="font-semibold sm:text-xl text-2xl font-Satoshi">
                  ₹ {product?.price}
                </h2>
              )}
            </div>

            {/* sizes */}
            <div className="flex flex-col">
              <p className="font-medium text-gray-500 font-Satoshi">
                Select Size
              </p>
              <div className="w-full flex items-center sm:gap-x-5 gap-x-3">
                {product?.sizes.map((size, index) => {
                  return (
                    <button
                      value={size}
                      onClick={(e) => setSelectedSize(e.target.value)}
                      key={index}
                      className={`sm:h-[2.8rem] h-[3rem] flex items-center justify-center ${
                        selectedSize === size
                          ? "border-black"
                          : "border-gray-400/20"
                      } cursor-pointer sm:p-2 px-4 w-[4rem]  rounded-3xl border-[1px]`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* add to cart and wishlist */}
            <div className="w-full flex sm:flex-row flex-col items-center gap-y-4 sm:gap-x-8">
              {/* Buy Now */}
              <button
                onClick={() => {
                  if (product.inStock) {
                    addToCart(product?._id, selectedSize);
                    setCart(true);
                  }
                }}
                disabled={!product.inStock}
                className="p-3 border rounded-full sm:w-[20%] hover:bg-black hover:text-white transition-all duration-200 w-full cursor-pointer disabled:opacity-60"
              >
                Buy Now
              </button>

              {/* Add to Cart */}
              <button
                onClick={() =>
                  product.inStock && addToCart(product?._id, selectedSize)
                }
                disabled={!product.inStock}
                className={`p-3 w-full ${
                  product?.inStock
                    ? "bg-black hover:bg-gray-800 cursor-pointer"
                    : "bg-gray-400 cursor-not-allowed"
                } text-white rounded-full sm:w-[40%] transition-all duration-200`}
              >
                Add to Cart
              </button>

              {/* Wishlist */}
              <button
                onClick={() => addToWishlist(product._id)}
                className="p-3 rounded-full border hover:bg-red-100 hover:border-red-500 transition-all duration-300 flex items-center justify-center group"
              >
                <i className="fa-solid fa-heart text-2xl text-gray-600 group-hover:text-red-500 transition-colors duration-300"></i>
              </button>
            </div>

            {/* Quantity */}
            <div className="w-full mt-3 rounded-md text-2xl flex items-center px-2 justify-between">
              {/* <div className='w-[12rem] font-Satoshi rounded-md text-2xl flex items-center px-2 border-[0.05rem] border-gray-300/50 justify-around'>
                <button
                  disabled={quantity === 1}
                  onClick={() => {
                    setQuantity(prev => {
                      const newQty = prev + 1;
                      updateCart(product._id, selectedSize, newQty);
                      return newQty;
                    });
                  }}
                  className='text-3xl'>-</button>
                <h1>{quantity}</h1>
                <button
                  onClick={() => {
                    setQuantity(prev => {
                      const newQty = prev + 1;
                      updateCart(product._id, selectedSize, newQty);
                      return newQty;
                    });
                  }}
                  className='text-3xl'>+</button>
              </div> */}
              <h1
                className={`mr-12 text-xl font-semibold ${
                  product.inStock ? "text-[#16A34A]" : "text-[#FF0000]"
                }`}
              >
                {product.inStock === true ? "In Stock" : "Out of Stock"}
              </h1>
            </div>

            {/* description */}
            <div class="w-full  p-2 rounded-lg">
              <h1 className="text-xl font-semibold">Description & Fits</h1>
              <p className="font-medium w-[90%] text-gray-500 font-Satoshi">
                {product?.description}
              </p>
            </div>

            <div className="h-[0.025rem] w-full bg-gray-400/20"></div>

            {/* shipping details */}
            <div className="w-full flex flex-col gap-y-4  p-2 rounded-lg">
              <h1 className="text-xl font-semibold">Shipping</h1>
              <div className="w-full relative grid grid-cols-2  gap-8">
                <div className="flex items-center gap-x-2">
                  <div className="py-2 px-4 rounded-full bg-gray-500/10 ">
                    <i class="fa-solid fa-percent "></i>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-gray-600 font-Satoshi">
                      Delivery Charges
                    </p>
                    <p className="font-Satoshi">₹40</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-2">
                  <div className="py-2 px-3 rounded-full bg-gray-500/10 ">
                    <i class="fa-solid fa-cube"></i>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-gray-600 font-Satoshi">
                      Package
                    </p>
                    <p className="font-Satoshi">Regular package</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-2">
                  <div className="py-2 px-3 rounded-full bg-gray-500/10">
                    <i class="fa-solid fa-calendar-week"></i>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-gray-600 font-Satoshi">
                      Delivery time
                    </p>
                    <p className="font-Satoshi">3-4 working days</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-2">
                  <div className="py-2 px-3 rounded-full bg-gray-500/10">
                    <i class="fa-solid fa-truck-fast"></i>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-gray-600 font-Satoshi">
                      Cash on Delivery
                    </p>
                    <p className="font-Satoshi">Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        ?{/* suggestion div starts here */}
        <div className="min-h-screen w-full pt-8  flex flex-col items-center gap-y-4">
          <div className="w-full p-2 px-7 items-center justify-between flex mt-8">
            <h1 className="sm:text-3xl text-2xl relative sm:left-0 left-4 font-medium">
              You might also like
            </h1>
            <button
              onClick={() =>
                product?.category === "Women"
                  ? navigate("/women")
                  : navigate("/men")
              }
              className={`sm:text-lg text-md font-[500] hover:cursor-pointer relative before:absolute before:-right-12 before:top-6 before:h-[0.05rem] before:w-24 before:bg-black overflow-x-hidden hover:before:right-0 before:hover:ease-in-out t before:transition-all before:duration-500 before:rounded-2xl`}
            >
              All Product
            </button>
          </div>
          {/* suggestions */}
          <div className="w-full flex sm:flex-row  flex-col items-center  justify-evenly ">
            {productList
              .filter((e) => e.category === product?.category)
              .slice(0, 3)
              .map((data, index) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.025 }}
                    viewport={{ once: true }}
                    key={index}
                    className="h-[34rem] w-[26rem]  p-1 flex flex-col items-center gap-y-2 justify-between"
                  >
                    <div className="group h-[90%] w-full cursor-pointer relative overflow-hidden rounded-xl flex items-center justify-center">
                      <img
                        onClick={() => navigate(`/buy-product/${data._id}`)}
                        src={data.image1}
                        alt=""
                        className="h-full sm:w-full w-[80%] object-top object-cover rounded-t-2xl group-hover:scale-105 transition-all duration-300"
                      />
                      <div
                        onClick={() => navigate(`/buy-product/${data._id}`)}
                        className="h-[3rem] w-[98%] absolute flex items-center justify-center bg-[#AC9C8D] bottom-[-3rem] group-hover:bottom-[1rem] transition-all duration-300 rounded-lg"
                      >
                        <h1 className="text-2xl font-medium text-white">
                          Buy Now
                        </h1>
                      </div>
                    </div>
                    <div className="h-[10%] w-full p-2 flex sm:gap-x-0 gap-x-2 sm:flex-col sm:items-start items-center justify-center">
                      <h1 className="text-xl font-semibold">{data.name}</h1>
                      <h2 className="text-lg font-medium">{data.price}</h2>
                    </div>
                  </motion.div>
                );
              })}
          </div>

          {/* bottom div */}
          <Bottom />
        </div>
        <Footer />
      </div>
    </motion.div>
  );
};

export default Buy;
