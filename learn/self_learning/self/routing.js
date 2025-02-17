const express=require('express')
const  router  = require('./profile')
const productRoute =require ('./product')
const app= express()
 app.use(express.json())
app.use("/user",router)
app.use("/product",productRoute)
app.get("/",(req,res)=>{

    res.send("this is home  page")
})



app.listen(3033,()=>{
    console.log("server listening on 3030");
})