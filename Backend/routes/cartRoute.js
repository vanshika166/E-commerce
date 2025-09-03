import express from 'express'
import { addToCart, deleteItems, getUserCart, updateCart } from '../controller/CartController.js'
import isAuth from '../middleware/isAuth.js'

const cartRoute = express.Router()
cartRoute.post("/getcart",isAuth,getUserCart)
cartRoute.post("/updatecart",isAuth,updateCart)
cartRoute.post("/addtocart",isAuth,addToCart)
cartRoute.post("/deleteitem",isAuth,deleteItems)


export default cartRoute;