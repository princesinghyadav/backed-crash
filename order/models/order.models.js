const mongoose =require('mongoose')

const orderSchema = new mongoose.Schema({
productName:String,
quantity:Number,


})
const orderModel=mongoose.model('order',orderSchema)
module.exports=orderModel;