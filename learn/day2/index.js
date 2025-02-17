const express =require("express")

 const server = express()
    
 server.get("./home",(req,res)=>{
    res.send("welcome to home page");
 })
 server.get("./login",(req,res)=>{
    res.send("welcome to login page");
 })
 
 server.get("./ticket",(req,res)=>{
    res.send("welcome to ticket  page");
 })
  
 server.post("/data" ,(req,res)=>{
    console.log(req.body)
    res.send("data  received sucessfully");
 })

 server.listen(8002,()=>{
    console.log("server is running on 8002 its express");
 })