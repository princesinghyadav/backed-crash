const express=require('express')
const orderroute=express.Router()
const orderController=require('../controller/order')


orderroute.get('/',(req,res)=>{
    res.send("this is a order route page");
   })
 

orderroute.post('/posting',orderController.Create)
orderroute.get('/reading', orderController.Read)
orderroute.patch('/patching' ,orderController.Update)
orderroute.delete('/deleting', orderController.Delete)
module.exports=orderroute;