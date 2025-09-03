import jwt from "jsonwebtoken";

const isAdmin = async(req,res,next)=>{
    try {
        const {token} = req.cookies;
        if(!token){
            res.status(400).json({message:"Not authorized login again."})
        }
        const verifytoken = jwt.verify(token,process.env.JWT_SECRET)
        if(!verifytoken){
            res.status(404).json({message:"Not authorized login again, Invalid token."})
        }
        req.adminEmail = process.env.ADMIN_EMAIL
        next()
    } catch (error) {
        console.log("admin Auth error")
        res.status(500).json({message:error.message})
    }
}

export default isAdmin;