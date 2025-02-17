import { Url } from "url";
const express = require("express")
 const  app = express();
 const userModels=require('./models/user')
const connection=require ('./config/db')
const formRoutes= require('./form')
//   app.use("/",(req,res,next)=>{  // middleware must call next function      
//      const a =2 ;
//      const b=4;
//      console.log(a+b);
//   next()
//   })
app.use(express.json())
app.use(express.urlencoded({  extended:true  }))

app.set("view engine",'ejs')
app.use('/form',formRoutes)

 app.get("/",(req:any,res:any)=>{
   //  res.render("index")
   res.send("this is a home page ")

 })
 app.get("/about",(req:any,res:any)=>{
    res.send("this is a about page")
 })
 
 app.post('/form-detailsave',async (req:any,res:any)=>{
   console.log(req.body)
   const {username,email,password}=req.body
  const userss= await  userModels.create({
      username : username,
      password : password,
      email :    email
 })
   res.send(userss);
 })
  
  // performing crud operations 
  // readd operation in crud 
//  app.get("/read",async (req:any ,res:any)=>{
//    await userModels.find().then((userr:any)=>{
//       console.log(userr)
//       res.send(userr);
//    })

 
//    })

//   update operation of crud 
//    app.get("/update", async  (req:Url,res:any)=>{
//       await userModels.updateOne({username:'editor_hun_bhi'},{
//         email:'piyu@gmail.com'
//       }).then((userr:string)=>{
//          res.send(userr)
//       })

//  })

  // app.get ('/delete',async(req:any,res:any)=>{
  //     userModels. deleteOne({username:'editor_hun_bhai'}).then((userr:any)=>{
  //        res.send(userr)
  //        console.log("user deleted bro ")
  //        // res.send("user deleted ")
  //     }).catch((err:any)=>console.log(err))
   

  // })
 app.listen(8080)