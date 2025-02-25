const express=require("express")
const userModel=require('../models/user.models')


async function Create(req,res){
    const user= await new userModel(req.body);
    user.save()
    res.send("posted successfully");
}
async function Read(req,res){
   const user= await userModel.find()
    res.send(user)
}
async function Update(req,res){
    await userModel.updateOne({_id:'67bd6be6436309f291201401'},{name:"changedname"})
    res.send("user updated successfully");
}
async function Delete(req,res){
    await userModel.findOneAndDelete({name:""})
    res.send("user deletsd succesfully")
}
module.exports={
    Create,
    Read,
    Update,
    Delete
}