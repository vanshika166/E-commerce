import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { authDatacontext } from "./AuthContext";
import toast from "react-hot-toast";
import { userDataContext } from "../Context/UserContext.jsx";

export const wishDataContext = createContext();
const WishlistContext = ({ children }) => {
  const { serverURL } = useContext(authDatacontext);
  const { userData } = useContext(userDataContext);
  const [wishList, setWishList] = useState(null);

  useEffect(() => {
    getUserWishlist();
  }, []);

  const addToWishlist = async (id) => {
    try {
      if (!userData || !userData.name) {
        toast("⚠️ Please Sign in First to Purchase!");
        return;
      }
      const result = await axios.post(
        serverURL + "/api/wish/addtoWish",
        { id },
        { withCredentials: true }
      );
      toast.success("Item added to your wishlist successfully!");
      setWishList((prev) => [...(prev || []), result.data.newItem]);
      getUserWishlist();
    } catch (error) {
      console.log("add to wishlist error:", error);
    }
  };

  const removeWishList = async (id) => {
    try {
      const result = await axios.post(
        serverURL + "/api/wish/remonewish",
        { id },
        { withCredentials: true }
      );
      toast.success("Item removed Successfully!");
      setWishList((prev) => prev.filter((item) => item._id !== id));
      getUserWishlist();
    } catch (error) {
      console.log("remove item error:", error);
    }
  };

  const getUserWishlist = async () => {
    try {
      const result = await axios.post(
        serverURL + "/api/wish/getwishlist",
        {},
        { withCredentials: true }
      );
      setWishList(result.data);
    } catch (error) {
      console.log("get user wishlist error:", error);
    }
  };

  const value = {
    addToWishlist,
    removeWishList,
    getUserWishlist,
    wishList,
  };

  return (
    <wishDataContext.Provider value={value}>
      {children}
    </wishDataContext.Provider>
  );
};

export default WishlistContext;
