const express=require('express')
const formRoute=express.Router()
// import Request from "express"
// import {reques}
const w= express.Request
const m=express.Response
// let userModels=require('./models/user')

formRoute.get("/",(req :any,res:any)=>{

    res.send("this is a form page in route type form-detailsave");
})


//these method are to take data from form tag ,but showing on url   and not saving data in mongodb

// formRoute.get("/form-section",(req: any,res:any)=>{
//     console.log(req.query)
//     res.send("congrats you have succesfully  retrieve data")
//     res.render("./index")
//  })

// so another method is that through post method 
// formRoute.post("/form-section",(req,res)=>{
//    console.log(req.body)
//    res.send("congrats  succesfully  retrieve data,prince ")
   
// })

//  this is to store form data in mongo db after taking directly from user.
formRoute.get('/form-detailsave',(req:any,res:any)=>{
//    console.log('success')
   res.render('./formdata')
// res.send("hey  done ")
})

formRoute.get('/test',(req:any,res:any)=>{
   res.render('./formdata')

//    res.send("this is a testing  page ")
})


 module.exports=formRoute