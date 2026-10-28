
import express from 'express'
const router=express.Router()
// import {getUsers, getUsersInfro, updateUser }from'../controllers/users.js'
import { createUser } from'../controllers/posts.js'
import {
  getUsers,
  getUsersInfro,

  updateUser
} from '../controllers/users.js';

import User from '../model/User.js';


router.get('/',getUsers)
router.get('/:id',getUsersInfro)
router.post('/create',createUser)
router.put('/update/:id', updateUser)

// real app




//export the router
export default router