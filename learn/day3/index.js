

const express= require("express")
const app = express()

app.get("/users",(req,res)=>{
    res.send("hey this is users page")
})
app.get("/login",(req,res)=>{
    res.send("hey this is login page")
})
app.get("/cart",(req,res)=>{
    res.send("hey this is crt page")
})

app.listen(5003,()=>{
    console.log("server is running on 5003 ");
})