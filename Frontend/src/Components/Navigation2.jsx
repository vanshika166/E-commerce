import  { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { productDataContext } from "../Context/ProductContext";
import { userDataContext } from "../Context/UserContext.jsx";
import { pageDataContext } from "../Context/pageContext";

const Navigation2 = ({ mode, handleMode }) => {
  const { userData } = useContext(userDataContext);
  const location = useLocation();
  const { getCartCount } = useContext(productDataContext);
  const [menu, setMenu] = useState(false);
  const { handleCart, handleSearchBar,handleDropMenu } = useContext(pageDataContext);

  useEffect(() => {
    setMenu(false);
  }, [location.pathname]);

  const handleMenu = () => {
    setMenu(!menu);
  };
  const navigate = useNavigate();

  const handleNav = (name) => {
    const nav = name.toLowerCase().replace(/\s/g, "");
    console.log(nav);
    navigate(`/${nav}`);
  };
  return (
    <div className="sm:h-[10%] h-[8%] w-full flex bg-[#EDEEE9] fixed z-[1000] inset-0 justify-between items-center p-4">
      {/* title */}
      <h1 className="titlename sm:text-3xl text-lg font-medium">HE & SHE</h1>

      {/* navigation links */}
      <div className="lg:flex hidden items-center justify-center lg:gap-x-9 md:gap-x-3">
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
      <div className="flex items-center justify-center gap-x-4 text-lg text-gray-700">

        {/* User */}
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

        {/* wishlist */}
        <button
            onClick={() => navigate("/wishlist")}
            className="w-10 h-10 flex items-center justify-center rounded-md relative hover:bg-gray-100 hover:text-black transition-colors duration-300"
          >
            <i className="fa-solid fa-heart text-gray-700 hover:text-red-500 transition-colors duration-300"></i>
          </button>
  
        {/* Cart */}
        <button
          onClick={() => handleCart()}
          className="w-10 h-10 flex items-center justify-center rounded-md relative hover:bg-gray-100 hover:text-black transition-colors duration-300"
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
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100 hover:text-black transition-colors duration-300"
        >
          {!menu ? (
            <i className="fa-solid fa-bars"></i>
          ) : (
            <i className="fa-solid fa-xmark"></i>
          )}
        </button>
      </div>

      {/* navigation for small devices... */}
      <div
        className={`lg:hidden  flex h-screen md:h-screen md:gap-y-10 gap-y-5 w-full bg-[#EDEEE9] flex-col items-center justify-center absolute inset-0  ${
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

export default Navigation2;
