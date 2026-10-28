import express  from "express";
const app =express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("hellow layla")
})
app.post('/users',(req,res)=>{
    const userData =req.body;
    res.send(`create the user: ${userData.name}`)
})

app.put('/users/:id',(req,res)=>{
    const userId=req.params.id;
    const userData=req.body
    res.send(`send ${userId} update with email ${userData.email}`)

})

app.delete('/users/:id',(req,res)=>{
    const userId=req.params.id;
    res.send(`user ${userId} delete`)
})

app.listen(4000,()=>{
console.log("server is running on http://localhost:4000")
})