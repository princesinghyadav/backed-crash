const express=require('express')
const itemroute=express.Router()
const itemController=require('../controller/item')
 
 itemroute.get('/',(req,res)=>{
   res.send("this is a item route page");
   })
 
 itemroute.post('/posting',itemController.Create)
 itemroute.get('/reading', itemController.Read)
 itemroute.patch('/patching' ,itemController.Update)
 itemroute.delete('/deleting', itemController.Delete)
 module.exports=itemroute;