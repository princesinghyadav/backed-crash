const express= require('express')
const tokenrouter=express.Router()
const middlew= require('../middleware/auth.middleware')
const roleacess=require('../middleware/user.acess')








tokenrouter.get("/",middlew, (req,res)=>{ 
     


    res.send("this is a cart page ! wow you had acessed the acart page") 


})

tokenrouter.get("/token",  middlew,  (req,res)=>{
    res.send("welcome in token page ");
})

tokenrouter.get("/update",[middlew,roleacess],(req,res,)=>{
    res.send("this is a update page only  allow  to the admin user  you are admin! ")
})

module.exports=tokenrouter;