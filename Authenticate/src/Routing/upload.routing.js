const express =require('express')
const uploadroute=express.Router()
const multer=require('multer');

 uploadroute.get('/',(req,res)=>{

    res.send("this is a uploader file");
 })


module.exports=uploadroute;