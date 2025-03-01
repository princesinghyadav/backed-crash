const express =require('express')
const app= express()
const connection = require('./src/config/db')
const authRouter=require('./src/Routing/Auth.routing')
const dotenv = require('dotenv').config();
// const jwt = require('jsonwebtoken')
const CryptoJS = require('crypto-js')


app.use(express.json())
const middlew= require('./src/middleware/auth.middleware')
const Port =process.env.Port  
// console.log(Port)
app.get('/',(req,res)=>{
    res.send("This is our home page ")
})
app.use('/auth',authRouter);
// var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

app.get("/cart",middlew ,(req,res)=>{ 
      
        res.send("this is a cart page ! wow you had acessed the acart page") 
   
    
})


// const message="hello world!"
// const hash = CryptoJS.SHA256(message).toString();
// console.log("SHA-256 Hash:", hash);


// const secretKey = "my_secret_key";
// const hmac = CryptoJS.HmacSHA256("Hello, CryptoJS!", secretKey).toString();
// console.log("HMAC SHA-256:", hmac);


 
app.listen(Port ,async ()=>{
    try {
        console.log("server listen on ",Port) 
    connection 
    } catch (error) {
       console.log(error); 
    }
   
})