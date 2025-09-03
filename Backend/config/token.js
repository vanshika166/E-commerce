import jwt from "jsonwebtoken";

export const genToken = (userId)=>{
    try {
        const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn:"7d"})
        console.log("Generated token:", token);
        return token;
    } catch (error) {
    console.log("token error:", error)    
    }   
}

export const adminToken = (email)=>{
    try {
        const token = jwt.sign({email},process.env.JWT_SECRET,{expiresIn:"7d"})
        return token;
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}