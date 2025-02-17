const express= require("express")
 const cart=express.Router()

 cart.get("/",(req,res)=>{
    res.send("user  successsfully")
 })
 cart.get("/login",(req,res)=>{
    res.send("user logggedin successsfully")
 })
 cart.get("/logout",(req,res)=>{
    res.send("user loggedout successful");
 })

 module.exports=cart;