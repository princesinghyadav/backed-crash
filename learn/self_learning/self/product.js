const express=require('express')
const productRoute=express.Router()

productRoute.get("/",(req,res)=>{
  res.send("this is a productRoute pagre")
})

productRoute.get("/singleproduct",(req,res)=>{
 res.send("this is the [page of product single page of product ")
})
productRoute.get("/productcart",(req,res)=>{
    res.send("this is productcvagrt page ")
})

module.exports=productRoute