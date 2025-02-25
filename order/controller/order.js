const express=require("express")
const orderModel=require('../models/order.models')


async function Create(req,res){
    const user=  new orderModel(req.body);
    await user.save()
    await res.send("posted successfully");
}
async function Read(req,res){
   const user= await orderModel.find()
    res.send(user)
}
async function Update(req,res){
    await orderModel.updateOne({_id:'67bd6be6436309f291201401'},{name:"changedname"})
    res.send("user updated successfully");
}
async function Delete(req,res){
    await orderModel.findOneAndDelete({name:""})
    res.send("user deletsd succesfully")
}
module.exports={
    Create,
    Read,
    Update,
    Delete
}