import express from 'express'


import { login, register } from '../controllers/Auth.js'
import { protect } from '../middlewares/auth.js'
import { createUserSchema } from '../schemas/userSchema.js'
import { validate } from '../middlewares/validateZona.js'

const router=express.Router()
router.post('/register', validate(createUserSchema), register)
router.post('/login',login)

router.get('/profile', protect,(req,res)=>{

    console.log("req.user",req.user)
res.json(req.user)
})

export default router;




