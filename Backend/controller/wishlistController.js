import User from "../model/UserModel.js";

// ✅ Add to Wishlist
export const addToWishList = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    const userData = await User.findById(req.userId);
    if (!userData) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const userWishlist = userData.wishList || [];
    const isItem = userWishlist.includes(id);

    if (isItem) {
      return res.status(400).json({ message: "Item already exists!" });
    }

    userWishlist.push(id);
    userData.wishList = userWishlist; // ensure correct field
    await userData.save();

    return res
      .status(200)
      .json({ message: "Item added!", wishList: userData.wishList });
  } catch (error) {
    console.log("add to wishlist:", error);
    return res.status(500).json({ error: error.message });
  }
};

// ✅ Remove from Wishlist
export const removeWish = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    const userData = await User.findByIdAndUpdate(
      req.userId,
      { $pull: { wishList: id } }, // ✅ FIX: use correct field name
      { new: true }
    );

    if (!userData) {
      return res.status(400).json({ message: "User does not exist" });
    }

    return res
      .status(200)
      .json({ message: "Item removed successfully!", wishList: userData.wishList });
  } catch (error) {
    console.log("remove from wishlist:", error);
    return res.status(500).json({ error: error.message });
  }
};

// ✅ Get Wishlist
export const getUserWishlist = async (req, res) => {
  try {
    const userData = await User.findById(req.userId);
    if (!userData) {
      return res.status(400).json({ message: "User not found" });
    }

    // filter out null values if already in DB
    const cleanWishlist = (userData.wishList || []).filter((id) => id !== null);

    return res.status(200).json(cleanWishlist);
  } catch (error) {
    console.log("get user wish list:", error);
    return res.status(500).json({ error: error.message });
  }
};
