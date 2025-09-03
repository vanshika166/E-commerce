import Order from "../model/orderModal.js";
import User from "../model/UserModel.js";



export const placeOrder = async (req, res) => {
    try {
        const { items, amount, address } = req.body;
        const userId = req.userId
        const orderData = {
            items,
            amount,
            address,
            userId,
            date: Date.now(),
            payment: false,
            paymentMethod: 'COD'
        }

        const newOrder = new Order(orderData)
        await newOrder.save()

        await User.findByIdAndUpdate(userId, { cart: {} })
        return res.status(200).json({ message: "order placed" })
    } catch (error) {
        console.log("place order error:", error)
        res.status(500).json({ message: error.message })
    }
}

export const userOrder = async (req, res) => {
    try {
        const userId = req.userId;
        const orders = await Order.find({ userId })
        return res.status(200).json(orders)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}

// Function for admin 

export const AllOrders = async(req,res)=>{
    try {
        const orders = await Order.find({});
        return res.status(200).json(orders)
    } catch (error) {
        console.log("All orders error:",error)
        return res.status(500).json({error:error.message})
    }
}

export const updateStatus = async(req,res)=>{
    try {
        const {orderId,status} = req.body;
         await Order.findByIdAndUpdate(orderId,{status});
         return res.status(200).json({message:"status updated."})
    } catch (error) {
        console.log("update status error:",error)
        return res.status(500).json({error:error.message})
    } 
}

export const deleteUserOrder = async(req,res)=>{
    try {
        const {orderId} = req.body;
        await Order.findByIdAndDelete(orderId)
        return res.status(200).json("user order deleted.")
    } catch (error) {
        console.log("delete user order error:",error)
        return res.status(500).json({error:error.message})
    }
}