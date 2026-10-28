import express from 'express'
import { protect } from '../middlewares/auth.js';
import { uploudFile } from '../controllers/uploudController.js';
import { uploud } from '../middlewares/uploud.js';

const router=express.Router()



router.post('/profile-picture',protect,uploud.single('file'),uploudFile)

export default router;