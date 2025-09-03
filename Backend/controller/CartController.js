import User from '../model/UserModel.js'

// function to add to cart for user:
export const addToCart = async (req, res) => {
    const { itemId, size } = req.body;
    try {
        const userData = await User.findById(req.userId)
        if (!userData) {
            res.status(400).json({ message: "User not found." })
        }
        let cartData = await userData.cart || {}
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1
            } else {
                cartData[itemId][size] = 1
            }
        } else {
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }
        await User.findByIdAndUpdate(req.userId, { cart: cartData })
        return res.status(200).json(cartData)
    } catch (error) {
        console.log("add to cart:", error)
        return res.status(500).json({ message: error.message })
    }
}

// function to update user cart:
export const updateCart = async (req, res) => {
    const { itemId, size, quantity } = req.body;
    try {
        const userData = await User.findById(req.userId)
        if (!userData) {
            return res.status(400).json({ message: "user not found" })
        }
        let cartData = await userData.cart
        cartData[itemId][size] = quantity;

        await User.findByIdAndUpdate(req.userId, { cart: cartData });
    } catch (error) {
        console.log("update cart:", error)
        return res.status(500).json({ message: error.message })
    }
}

// function to get the user cart data:
export const getUserCart = async (req, res) => {
    try {
        const userData = await User.findById(req.userId)
        const cartData = await userData.cart

        return res.status(200).json(cartData)
    } catch (error) {
        console.log("get usercart:", error)
        return res.status(500).json({ message: error.message })
    }
}


// function to delete items from users cart:
export const deleteItems = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ error: "Item ID is required" });
    }

    const userData = await User.findById(req.userId);
    if (!userData) {
      return res.status(404).json({ error: "User not found" });
    }

    console.log("Cart before deletion:", userData.cart);

    if (userData.cart && typeof userData.cart === 'object' && id in userData.cart) {
      delete userData.cart[id];
      userData.markModified("cart");
    } else {
      return res.status(404).json({ error: "Item not found in cart" });
    }

    const savedUser = await userData.save();
    console.log("Saved cart:", savedUser.cart); 

    return res.status(200).json({ message: "Item removed", cart: userData.cart });
  } catch (error) {
    console.log("Delete error:", error);
    return res.status(500).json({ error: "Server error" });
  }
};
