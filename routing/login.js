const express= require("express")
 const auth=express.Router()

 auth.get("/",(req,res)=>{
    res.send("user  successsfully")
 })
 auth.get("/login",(req,res)=>{
    res.send("user logggedin successsfully")
 })
 auth.get("/logout",(res,req)=>{
    res.send("userloggedout successful");
 })

 module.exports=auth;