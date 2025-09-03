import User from '../model/UserModel.js'


export const getCurrentUser = async (req,res) => {
    try {
        let user = await User.findById(req.userId).select("-password")
        if (!user) {
            return res.status(400).json({ message: "user is not  found" })
        }
        return res.status(200).json(user)
    } catch (error) {
        return res(500).json({ message: error.message })
    }
}

export const adminAuth = async(req,res)=>{
    try {
        let adminEmail = req.adminEmail;
        if(!adminEmail){
            res.status(404).json({message:"admin not found"})
        }
        res.status(200).json({
            email:adminEmail,
            role:"admin"
        })
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


export const getAllUsers = async(req,res)=>{
    try {
        const allUsers = await User.find({})
        return res.status(200).json(allUsers)
    } catch (error) {
        console.log("All users:", error)
        return res.status(500).json({error:error.message})
    }
}