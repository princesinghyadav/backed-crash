 
const express =require('express')
const app =express()
const Formroute=require('./form')
const dotenv= require('dotenv')
dotenv.config()
app.set('view engine', 'ejs')
const connectToDb=require('./config/db')

connectToDb()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/form',Formroute)
app.get('/',(req,res)=>{
    res.send("this is the home page .")
})

app.listen(3034 )