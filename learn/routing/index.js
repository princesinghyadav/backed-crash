
const express= require("express")
 const app = express()

 const userroute =require("./routes")
 const todos=require("./todos")
 const cart=require("./login")
 app.get("/",(req,res)=>{
   res.send("hey there! ");
})

 app.use("/cart",cart)
 app.use("/users",userroute)
 app.use("/todos", todos)


 app.listen(3000,()=>{
    console.log(" the server statrted on https:/localhost3000");
 
 
   })
   