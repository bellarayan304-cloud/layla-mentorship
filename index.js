// import express from "express";
import express from 'express'
import helmet from 'helmet';
import userRoute from'./routes/users.js'
import postsRoute from'./routes/posts.js';
import AuthRoute from './routes/Auth.js';
import adminRout from './routes/admin.js';
import uploadRout from './routes/uploud.js';
import tasksRout from './routes/tasks.js';





import { config }  from"dotenv";
config()
const PORT=process.env.PORT || 3000
import cors from'cors'
// import bcrypt from "bcrypt";
import morgan from 'morgan'
import mongoose from 'mongoose'
import { logger } from './middlewares/logger.js';
import { notFound } from './middlewares/notFound.js';
import { errorHandler } from './middlewares/errorHandler.js';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './utils/swagger.js';


const app = express();

app.use(helmet());


import { limiter } from './middlewares/rateLimiter.js';
app.use(limiter);



let users = [
  { id: 1, name: 'Ayaan' },
  { id: 2, name: 'Fatima' },
  { id: 3, name: 'Zubeyr' }
];
app.use(logger)
app.use(express.json())
// app.use(cors(
//     {
//         origin:[""]
// }
// ))
app.use(cors({
  origin: [""] // Ku beddel origin-ka frontend-kaaga markaad CORS isticmaalayso
}));
app.use(morgan('common'))



if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


//route middlewere

//isdiwangalin
app.use('/users',userRoute)
app.use('/posts',postsRoute)
app.use('/Auth',AuthRoute)
app.use('/admin',adminRout)
app.use('/upload',uploadRout)
app.use('/tasks',tasksRout)


app.get ('/',(req,res)=>{
    res.json(users)
   
   
// })
// // app.get('/courses',(req,res)=>{
// //     res.send("Hey Welcome")
// // })
// // app.get('/About',(req,res)=>{
// //     res.send("I am Layla, a software development learner interested in building web applications. I am currently learning JavaScript, React, Node.js, Express, and MongoDB. My goal is to become a full-stack software engineer and build useful applications.")
// // })
// //POST
// app.post('/users', (req,res)=>{
//     const newUsers={ 
//    id:users.length+1,
//    name:req.body.name
//     }
//    users.push(newUsers)
//     res.status(201).json(newUsers)
// })
// //PUT
// app.put('/users/:id', (req,res)=>{
//     const userId= req.params.id;
//     const updatedData=req.body;
//     res.send(`User ${userId} updated with name: ${updatedData.email}`)
// })
// //DELET
// app.delete('/users/:id',(req,res)=>{
//     const userId=req.params.id;
//     res.send(`user${userId} deleted`)
})
 app.use(notFound),
 app.use(errorHandler)

//conogt mongose
mongoose.connect(process.env.NODE_ENV =="development" ?process.env. process.env.MONGO_URI_DEV:process.env.MONGO_URL_PRO )
    .then(()=>console.log("✅ mongoo isoo dabac"))
    .catch((err)=>console.log("❌ iisheeg haduu errror jiro",err))

//  console.log(process.env.PORT)

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})


