const express=require("express")
const Formroute= express.Router()
const bcrypt =require('bcrypt')
const userr= require('./models/usermodels')



Formroute.get('/',(req,res)=>{
    res.send ("this is a home page of form ")
})
Formroute.get('/submit',(req,res)=>{
 res.render('./register')
// res.send("hey form page workl succesfully!")
})
Formroute.post('/submit', async (req,res) => {
    // console.log(req.body);
    // res.send("done")

    const {username,email,password}=req.body;
    // const hashpassword = await bcrypt.hash(password,10)
    const user_one= new userr();
    
    let responce = {}
    try {
        responce = await userr.find({})
    } catch (error) {
       console.log(error); 
    }
    
    // res.json(user1)
    res.send({'data':responce} );
    console.log(responce)
})
 module.exports=Formroute;