import express from 'express'
import { adminAuth, getAllUsers, getCurrentUser } from '../controller/UserController.js'
import isAuth from '../middleware/isAuth.js'
import isAdmin from '../middleware/adminAuth.js'


const userRoute = express.Router()

userRoute.get("/getcurrentuser",isAuth,getCurrentUser)
userRoute.get("/admin",isAdmin,adminAuth)
userRoute.post("/allusers",isAdmin,getAllUsers)

export default userRoute;