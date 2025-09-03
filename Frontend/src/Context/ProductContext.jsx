import React, { createContext, useContext, useEffect, useState } from 'react'
import { authDatacontext } from '../Context/AuthContext.jsx'
import { userDataContext } from '../Context/UserContext.jsx'
import axios from 'axios';
import toast from 'react-hot-toast';


export const productDataContext = createContext();

const ProductContext = ({ children }) => {
    const [productList, setproductList] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)
    const [taxTotalAmount, setTaxTotalAmount] = useState(0)
    const { serverURL } = useContext(authDatacontext)
    const { userData } = useContext(userDataContext)
    const [cartItems, setCartItems] = useState({}) 
    const [userCartList, setUserCartList] = useState([]) 
    const [wishlistItems, setWishlistItems] = useState([]) 
    const deliveryFee = 40

    // useEffects:

    useEffect(() => {
        getProductList()
    }, [])




    const notify = (message) => {
        toast.success(message, {
            position: "top-right",
            autoClose: 3000, // milliseconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored", // "light", "dark", "colored"
        });
    };


    useEffect(() => {
        if (userData && userData._id) {
            getUsercart();
        }
    }, [userData]);


    useEffect(() => {
        handleCartItem()
    }, [cartItems, productList])


    useEffect(() => {
        getAmount()
    }, [userCartList])


    // function to add cart item details into the main cart:
    const handleCartItem = () => {
        let tempData = []
        if (cartItems) {
            for (const items in cartItems) {
                const productItem = productList.find(product => product._id === items)
                if (productItem) {
                    const sizeData = cartItems[items]
                    const totalQuantity = Object.values(sizeData).reduce((sum, qty) => sum + qty, 0);

                    tempData.push({
                        id:productItem._id,
                        name: productItem.name,
                        price: productItem.price,
                        sizes: cartItems[items],
                        image1: productItem.image1,
                        quantity: totalQuantity,
                        discount:productItem.discount
                    })
                }

            }
        }
        setUserCartList(tempData)
    }

    // function to update the cart:
    const updateCart = async (itemId, size, quantity) => {
        const cartData = structuredClone(cartItems)
        cartData[itemId][size] = quantity
        setCartItems(cartData)
        try {
            await axios.post(serverURL + '/api/cart/updatecart', { itemId, size, quantity }, { withCredentials: true })
        } catch (error) {
            console.log(error)
        }
    }

    // function to getTotal amout:
    const getAmount = () => {
        let total = 0;
        let tax = 0.12;
        try {
            if (userCartList && userCartList.length > 0) {
                userCartList.forEach((elem) => {
                    let value = elem.discount > 0 ? (elem.price -(elem.discount * elem.price)/100)*elem.quantity : elem.price*elem.quantity
                    total +=value
                })
            }
            const taxAmount = total * tax
            setTaxTotalAmount(taxAmount + total)
            setTotalAmount(total) 
        } catch (error) {
            console.log(error)
        }
    }


    // add to cart function:
    const addToCart = async (id, size) => {
        if (!id, !size) {
            return alert("product id or size is missing!")
        }

        let CartData = structuredClone(cartItems)
        if (CartData[id]) {
            if (CartData[id][size]) {
                CartData[id][size] += 1
            } else {
                CartData[id][size] = 1
            }
        } else {
            CartData[id] = {}
            CartData[id][size] = 1
        }
        setCartItems(CartData)
        if (userData) {
            try {
                console.log("Sending to cart:", id, size)
                await axios.post(serverURL + '/api/cart/addtocart', { itemId: id, size }, { withCredentials: true })
            } catch (error) {
                console.log(error)
            }
        }
        notify("🎉 Added to Cart Successfully!")

    }

    // function to get usercart from server database:
    const getUsercart = async () => {
        try {
            const result = await axios.post(serverURL + '/api/cart/getcart', {}, { withCredentials: true })
            setCartItems(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    //function Get the count on cart:
    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item]
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        }
        return totalCount
    }

    // get all products from server database:
    const getProductList = async () => {
        try {
            const result = await axios.get(serverURL + '/api/product/allproducts', {}, { withCredentials: true })
            setproductList(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    // function to remove the item from use's cart
    const deleteItem = async(id)=>{
        try {
            const result = await axios.post(serverURL + '/api/cart/deleteitem',{id},{withCredentials:true})
            toast.success("Item deleted successfully!")
        } catch (error) {
                console.log("delete error:",error)
        }
    }

    const value = {
        getProductList,
        productList,
        addToCart,
        getCartCount,
        updateCart,
        userCartList,
        getAmount,
        totalAmount,
        cartItems,
        setCartItems,
        deliveryFee,
        deleteItem,
        wishlistItems,
        taxTotalAmount,
        getUsercart
    }

    // console.log("cart items:", cartItems)
    // console.log("wishlist items:", wishlistItems)


    return (
        <productDataContext.Provider value={value}>
            {children}
        </productDataContext.Provider>

    )
}

export default ProductContext
