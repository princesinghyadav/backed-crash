const express=require('express')
const userroute=express.Router()
const userModel=require('../models/user.models')
const userController=require('../controller/user')

userroute.get('/',(req,res)=>{
//  console.log("this is a user  route page");
 res.send("This is user route page ")
})

userroute.post('/posting',userController.Create)
userroute.get('/reading', userController.Read)
userroute.patch('/patching' ,userController.Update)
userroute.delete('/deleting', userController.Delete)
module.exports=userroute;