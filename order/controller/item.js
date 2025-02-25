const express=require("express")
const itemModel=require('../models/item.models')


async function Create(req,res){
    const user=  new itemModel(req.body);
    await user.save()
    await res.send("posted successfully ,sir");
    console.log(user)
}
async function Read(req,res){
   const user= await itemModel.find()
    res.send(user)
}
async function Update(req,res){
    await itemModel.updateOne({_id:'67bd6be6436309f291201401'},{name:"changedname"})
    res.send("user updated successfully");
}
async function Delete(req,res){
    await itemModel.findOneAndDelete({name:""})
    res.send("user deletsd succesfully")
}
module.exports={
    Create,
    Read,
    Update,
    Delete
}