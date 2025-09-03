import express from 'express'
import { adminLogin, googleSignup, login, logOut, signUP } from '../controller/authController.js'

const authRoutes = express.Router()

authRoutes.post("/signup",signUP)
authRoutes.post("/login",login)
authRoutes.get("/logout",logOut)
authRoutes.post("/googlesignup",googleSignup)
authRoutes.post("/adminlogin",adminLogin)


export default authRoutes;