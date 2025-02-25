const express =require('express');
const app=express();
const  connection= require('./config/db')
const userroute=require('./route/user.route')
const itemroute=require('./route/item.route')
const orderroute=require('./route/order.route')
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("home page ")
})
app.use("/user",userroute) 
app.use('/order',orderroute)
app.use('/item',itemroute)


app.listen(3030,()=>{
    connection()
    console.log("server running on 3030");
})