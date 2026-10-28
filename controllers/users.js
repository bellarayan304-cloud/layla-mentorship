
const users = [
  { id: 1, name: "Layla" },
  { id: 2, name: "Ahmed" }
];

import User from'../model/User.js'

export const getUsers = (req, res) => {
  res.json(users);
};


export const getUsersInfro = (req, res) => {
 

  const user = users.find(u => u.id == req.params.id);

if (!user) return res.status(404).send("User not found");

res.json(user);

}
// const User = require("../models/users");


export const updateUser = async (req, res) => {
  const {id} = req.params;
  try{
    const updateUser=await User.findByIdAndUpdate(id,req.body, {new: true});
    if(!updateUser){
 return res.status(404).send("user not found")
    }
   
     res.json(updateUser)
  
   

}catch(err){
   console.error(err);
  res.status(500).send("Server error")
}
}
// import bcrypt from 'bcrypt';










