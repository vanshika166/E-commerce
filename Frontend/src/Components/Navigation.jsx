import  { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "../Context/UserContext.jsx";
import { productDataContext } from "../Context/ProductContext.jsx";

const Navigation = ({
  mode,
  handleMode,
  handleCart,
  handleSearchBar,
  handleDropMenu,
}) => {
  const { userData } = useContext(userDataContext);
  const { getCartCount } = useContext(productDataContext);
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);

  const handleNav = (name) => {
    const nav = name.toLowerCase().replace(/\s/g, "");
    console.log(nav);
    navigate(`/${nav}`);
  };

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="lg:h-[10%] h-[8%] lg:bg-[#C3C3C2] bg-black  w-full flex fixed z-[1000] inset-0 justify-between items-center p-4">
      {/* title */}
      <h1 className="titlename lg:text-black text-white lg:text-3xl text-[25px] font-medium">HE & SHE</h1>

      {/* navigation links */}
      <div className="lg:flex hidden items-center justify-center gap-x-9">
        {["Home", "New arrival", "Men", "Women", "Shop", "About"].map(
          (item, index) => {
            return (
              <h3
                onClick={() => {
                  if (item === "Home") {
                    navigate("/");
                  } else {
                    handleNav(item);
                  }
                }}
                key={index}
                className={`text-lg font-[500] hover:cursor-pointer relative before:absolute before:-left-24 before:top-6 before:h-[0.025rem] before:w-24 ${
                  mode ? "before:bg-[#EDEEE9]" : "before:bg-black"
                } overflow-x-hidden hover:before:left-0 before:hover:ease-in-out t before:transition-all before:duration-500 before:rounded-2xl`}
              >
                {item}
              </h3>
            );
          }
        )}
      </div>

      {/* search and cart buttons */}
      <div className="flex items-center justify-center lg:gap-x-4 gap-x-2 text-lg text-black">

        {/* User */}
        <button
          onClick={() =>
            !(userData && userData.name)
              ? navigate("/authentication")
              : handleDropMenu()
          }
          className="w-10 h-10 flex items-center lg:text-black text-white justify-center rounded-md hover:bg-gray-100 hover:text-black transition-colors duration-300"
        >
          {userData && userData.name ? (
            <span className="text-base font-semibold lg:text-black text-white">
              {userData.name.slice(0, 1).toUpperCase()}
            </span>
          ) : (
            <i className="fa-solid fa-user-plus"></i>
          )}
        </button>

        {/* wishlist */}
        <button
            onClick={() => navigate("/wishlist")}
            className="w-10 lg:block hidden h-10 flex items-center justify-center rounded-md relative hover:bg-gray-100 hover:text-black transition-colors duration-300"
          >
            <i className="fa-solid fa-heart text-black hover:text-red-500 transition-colors duration-300"></i>
          </button>

        

        {/* Cart */}
        <button
          onClick={() => handleCart()}
          className="w-10 h-10 flex lg:text-black text-white items-center justify-center rounded-md relative hover:bg-gray-100 hover:text-black transition-colors duration-300"
        >
          {/* Cart count badge */}
          <span className="absolute -top-1 -right-1 bg-[#AC9C8D] text-white font-bold h-5 w-5 flex items-center justify-center text-xs rounded-full shadow-md">
            {getCartCount()}
          </span>
          <i className="fa-solid fa-cart-shopping"></i>
        </button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => handleMenu()}
          className="lg:hidden block w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100 hover:text-black transition-colors duration-300"
        >
          {!menu ? (
            <i className="fa-solid fa-bars lg_text-black lg:text-black text-white"></i>
          ) : (
            <i className="fa-solid fa-xmark lg:text-black text-white"></i>
          )}
        </button>
      </div>

      {/* menubar for small screens */}
      <div
        className={`lg:hidden  flex h-screen w-full z-[1000] text-black md:h-screen md:gap-y-10 gap-y-5 bg-[#EDEEE9] flex-col items-center justify-center absolute inset-0  ${
          !menu ? "top-[-1500%]  opacity-0" : "top-[3.3rem]  opacity-100"
        } transition-all duration-500 z-[-10] gap-y-2 font-bold`}
      >
        {["Home", "New arrival", "Men", "Women", "Shop", "About"].map(
          (item, index) => {
            return (
              <h3
                onClick={() => {
                  if (item === "Home") {
                    navigate("/");
                  } else {
                    handleNav(item);
                  }
                }}
                key={index}
                className={`text-lg md:text-4xl font-[500] hover:cursor-pointer relative before:absolute before:-left-24 before:top-6 before:h-[0.025rem] before:w-24 ${
                  mode ? "before:bg-[#EDEEE9]" : "before:bg-black"
                } overflow-x-hidden hover:before:left-0 before:hover:ease-in-out t before:transition-all before:duration-500 before:rounded-2xl`}
              >
                {item}
              </h3>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Navigation;
