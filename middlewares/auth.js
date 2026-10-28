import jwt from 'jsonwebtoken'
import User from '../model/User.js'
export const  protect =async(req,res,next)=>{

  const token = req.headers.authorization?.split(' ')[1];
  // console.log("req.headers.authorization")
  // console.Console.log("info token",token)

if (!token) return res.status(401).json({ message: 'No token provided' });

try{
  const decoded = jwt.verify(token,process.env.JWT_SECRET)
  console.log("token",decoded)
  req.user=await User.findById(decoded.id).select('-password')
  


console.log("USER ROLE:", req.user?.role);




next()
} catch (err) {
  console.log("JWT ERROR:", err.message);

  return res.status(401).json({
    message: err.message
  });
}

} ;


