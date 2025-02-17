const express =require("express")
const todos= express.Router();

todos.get("/",(req,res)=>{
    res.send("this is todo page.")
 })

 todos.get("/completed",(req,res)=>{
    res.send("this is todo completed.")
 })
 todos.get("/in progress",(req,res)=>{
    res.send("this is todo in progress.")
 })
 todos.get("/pending",(req,res)=>{
    res.send("this is todo pending.")
 })

 module.exports= todos;