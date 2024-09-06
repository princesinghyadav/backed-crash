
const express= require("express")
 const app = express()

 const userroute =require("./routes")
 const auth=require("./login")
 app.use("/auth",auth)
 app.use("/users",userroute)
 app.get("/",(req,res)=>{
    res.send("hey there! ");
 })


 app.listen(8004,()=>{
    console.log("express server is started 8004 ");
 })