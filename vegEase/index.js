const express = require('express')
const app= express()
const conn=require('./config/db')
const crudRouter=require('./routes/crud')
const Blogmodel=require('./models/user.models')

app.use(express.json())


app.use('/crud',crudRouter)
app.get('/',(req,res)=>{
    res.send('home page   E');
})




app.listen(3039 ,()=>{
  conn()
    console.log("server started and connected with database succesfully")
})