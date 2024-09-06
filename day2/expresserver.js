const express =require("express")
const fs= require("fs")

 const server = express()
    server.use(express.json())
 server.get("./home",(req,res)=>{
    res.send("welcome to home page");
 })
 server.get("./login",(req,res)=>{
    res.send("welcome to login page");
 })
 server.get("./logout",(req,res)=>{
    res.send("welcome to logout  page");
 })
 server.get("./ticket",(req,res)=>{
    res.send("welcome to ticket  page");
 })
  
 server.post("/data" ,(req,res)=>{
    console.log(req.body)
    res.send(`data  received sucessfully ${req.body}`);
    const userdata= fs.readFilesync("data1.json", "utf-8")
    console.log("userdata",userdata);
    const parse= JSON.parse(userdata)
    console.log("parse",parse)
    parse.push(userdata)
    fs.writeFileSync("/data.json" ,JSON.stringify(parse))
    res.send("dtaa received successfully", parse)
 })

 server.listen(8001,()=>{
    console.log("server is running on   8001 its express");
 })