import express from 'express'
import { AllOrders, deleteUserOrder, placeOrder, updateStatus, userOrder } from '../controller/orderController.js'
import isAuth from '../middleware/isAuth.js'
import isAdmin from '../middleware/adminAuth.js'


const orderRoute = express.Router()
// user route
orderRoute.post("/placeorder",isAuth,placeOrder)
orderRoute.post("/userorder",isAuth,userOrder)
// admin route
orderRoute.post("/allorders",isAdmin,AllOrders)
orderRoute.post("/updatestatus",isAdmin,updateStatus)
orderRoute.post("/deleteorder",isAdmin,deleteUserOrder)

export default orderRoute