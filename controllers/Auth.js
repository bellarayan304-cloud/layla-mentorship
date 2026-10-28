// import User from "../model/User.js";
// import bcrypt from 'bcrypt';

// export const register = async (req,res,next)=>{

//   let {name,email,password}=req.body;
//   try{
//     email=email.toLowerCase();
//     const exists = await User.findOne({email});
//     if(exists) return res.status(400).json({message:"email alredy in use"});

//       const user = await User.create({name, email,password})

//       const token=generateToken(user._id)
//       res.status(201).json({token})
//   }catch (err) {
//      console.error('REGISTER ERROR:', err);
//     next(err) 

//   }
  

// }

import User from "../model/User.js";
import bcrypt from "bcrypt";
// import { generateToken } from "../utils/generateToken.js";
import { generateToken } from "../utils/generateToken.js";
// import User from "../model/User.js";

export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body ?? {};

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email and password are required"
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const exists = await User.findOne({ email: normalizedEmail });

    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Email already in use"
      });
    }

   

   const user = await User.create({
  name,
  email: normalizedEmail,
  password,
    role: "user"
});

    const token = generateToken(user._id);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      token
    });

  } catch (err) {
    console.error("REGISTER ERROR:", err);
    next(err);
  }
};


export const login = async(req,res,next)=>{

let {password,email}=req.body
try{
    email=email.toLowerCase()
const user = await User.findOne({ email });

if(!user || !(await user.comparePassword(password))){
  return  res.status(401).json({message:"invalid email and passord"})
}
console.log("login infro",user)
const token=generateToken(user._id)
res.json({token})
}catch(err){
    console.error("error",err)
next(err)
}

}




