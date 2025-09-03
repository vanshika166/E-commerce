import express from 'express'
import { addToWishList, getUserWishlist, removeWish } from '../controller/wishlistController.js'
import isAuth from '../middleware/isAuth.js'
const wishRoute = express.Router()

wishRoute.post("/addtoWish",isAuth,addToWishList);
wishRoute.post("/remonewish",isAuth,removeWish);
wishRoute.post('/getwishlist',isAuth,getUserWishlist);

export default wishRoute;