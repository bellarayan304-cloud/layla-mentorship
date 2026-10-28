import express from 'express'
import { protect } from '../middlewares/auth.js'
import { authorize } from "../middlewares/authorize.js";

// import router from './Auth.js';
const router=express.Router()

router.get('/dashboard',protect,authorize('admin','student'),(req,res)=>{
    res.json({message:`welcome to the admin dashboard`})
})



export default router;