const express =require('express')
const router= express.Router()

router.get("/",(req,res)=>{
    res.send("this is a user page ");
})
router.get("/profile",(req,res)=>{
    res.send("this is a user's profile page")
})
router.get("/userdetail",(req,res)=>{
    res.send("this is a userdetail page");
})

module.exports=router