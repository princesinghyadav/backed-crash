 
 const express =require("express")
const routes= express.Router();

routes.get("/",(req,res)=>{
    res.send("hey thehre ")
})
routes.get("/profile",(req,res)=>{
    res.send("hey thehre profile  ")
})
routes.get("/name",(req,res)=>{
    res.send("hey thehre prince ")
})

module.exports= routes;