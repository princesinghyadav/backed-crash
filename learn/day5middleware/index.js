const express = require("express")
const app =express();

app.use(express.json())

 const middleware1=(req,res,next)=>{
    console.log("1");
    next()
    console.log("4")
 }
 const middleware2=(req,res,next)=>{
    console.log("2");
    next()
    console.log("3")
 }
// const permission=(req,res,next)=>{
//     const card=true;
//     if(card){
//         next()
//     }else{
//         console.log("go to home and take id card.")
//     }
// }
 
//  app.use(permission)
app.use(middleware1,middleware2)

 app.get("/home",[middleware1,middleware2],(req,res)=>{
    res.send("home pagee")
    console.log("6");
 })
 app.get("/cart",(req,res)=>{
    res.send("cart pagee")
    console.log("7");
 })


app.listen(8005,()=>{
    console.log("server sttared on 8005");
})