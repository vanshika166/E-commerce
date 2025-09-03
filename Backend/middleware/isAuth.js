import jwt from 'jsonwebtoken'

const isAuth = async(req,res,next)=>{
  try {
      const {token} = req.cookies;
    if(!token){
        res.status(400).json({message:"user does not have a  token"})
    }
    const verifyUser = jwt.verify(token,process.env.JWT_SECRET)
    if(!verifyUser){
        res.status(400).json({message:"user does not have a  valid token"})
    }
    req.userId = verifyUser.userId
    next()
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}

export default isAuth;