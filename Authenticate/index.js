const express =require('express')
const app= express()
const connection = require('./src/config/db')
const authRouter=require('./src/Routing/Auth.routing')
const dotenv = require('dotenv').config();
const uploadroute=require('./src/Routing/upload.routing')
const CryptoJS = require('crypto-js')
const tokenrouter=require('./src/Routing/token.cart')

 


app.use(express.json())

const Port =process.env.Port  
// console.log(Port)
app.get('/',(req,res)=>{
    res.send("This is our home page ")
})
app.use('/auth',authRouter);
app.use('/cart',tokenrouter)
app.use('/upload',uploadroute); 




 
 

app.listen(Port ,async ()=>{
    try {
        console.log("server listen on ",Port) 
    connection 
    } catch (error) {
       console.log(error); 
    }
   
})


