
// const posts = [
//   { id: 1, name: "apdala" },
//   { id: 2, name: "fatima" }
// ];

import User from'../model/User.js';
// const { getUsers } = require('./users');

export const getUsers=async(req,res)=>{
  const users=await User.find()
  res.json(users)
}

export const getPosts = (req, res) => {
  res.json(posts);
};



export const getUsersInput = (req, res) => {
 

  const post = posts.find(u => u.id == req.params.id);

if (!post) return res.status(404).send("post not found");

res.json(post);

}

export const createUser=async(req,res)=>{

  console.log("req.body",req.body)
  const user = new User (req.body)
  const save=await user.save()
  res.status(201).json(save)
}