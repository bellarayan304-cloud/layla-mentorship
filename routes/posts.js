
import express from 'express'
import { getPosts, getUsersInput }  from'../controllers/posts.js'
const router=express.Router()

router.get('/',getPosts)
router.get('/:id',getUsersInput)

//export the router


export default router