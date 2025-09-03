import User from "../model/UserModel.js"
import validator from "validator"
import bcrypt from 'bcryptjs'
import { genToken,adminToken } from "../config/token.js";


export const signUP = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existUser = await User.findOne({ email })
        if (existUser) {
            res.status(400).json({ message: "user already exist" })
        }
        if (!validator.isEmail(email)) {
            res.status(400).json({ message: "Enter a valid email" })
        }
        if (password.length < 8) {
            res.status(400).json({ message: "enter a strong password" })
        }
        let hashPassword = await bcrypt.hash(password, 10)

        const user = await User.create({ name, email, password: hashPassword })
        const token = genToken(user._id)
        console.log(token)
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "Strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "user does not exist" })
        }
        if (!validator.isEmail(email)) {
            res.status(400).json({ message: "enter the valid email" })
        }
        let matchPassword = await bcrypt.compare(password, user.password)
        if (!matchPassword) {
            return res.status(400).json({ message: "Enter the correct password" })
        }
        let token = genToken(user._id)
        console.log(token)
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "Strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        res.status(200).json(user)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


export const logOut = async (req, res) => {
    try {
        res.clearCookie("token")
        res.status(200).json({ message: "logOut successfully" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const googleSignup = async (req, res) => {
    try {
        const { name, email } = req.body;
        const userExist = await User.findOne({ email })
        if (!userExist) {
            const user = await User.create({ name, email })
            const token = genToken(user._id)
            console.log(token)
            res.cookie("token", token,{
                httpOnly: true,
                secure: false,
                sameSite: "Strict",
                maxAge: 7 * 24 * 60 * 60 * 1000
            })
            res.status(201).json(user)
        }
    } catch (error) {
        res.status(500).json("google error message:",encodeURIComponent.message)
    }
}

export const adminLogin = async(req,res)=>{
    const {email,password} = req.body;
   try {
     if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
        const token = adminToken(email)
        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            sameSite:"lax",
            maxAge:7*24*60*60*1000
        })
        res.status(200).json(token)
    }
   } catch (error) {
    res.status(500).json({message:error.message})
   }
}