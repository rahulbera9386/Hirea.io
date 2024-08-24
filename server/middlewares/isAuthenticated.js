import jwt from "jsonwebtoken"
import User from './../models/user.model.js';


const isAuthenticated=async(req,res,next)=>{
    try{
const token=req.cookies.token;
if(!token)
{
    res.status(500).json({message:"User Not Authenticated,Please Login",success:false})
}
const decode=await jwt.verify(token,process.env.SECRET_KEY);
if(!decode)
{
    res.status(500).json({message:"Invalid Token",success:false})
}

//console.log(decode);
req.id=decode.userId;

const user=await User.findById(decode.userId);
req.user=user;
next();
}
    
    catch(error)
    {
        res.status(500).json({message:error.message})
    }
}

export default isAuthenticated;