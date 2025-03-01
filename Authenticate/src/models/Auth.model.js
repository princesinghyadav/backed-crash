const mongoose = require('mongoose')

const authSchema=  mongoose.Schema({
    name:String,
    email: {type:String, required :true},
    // gender: {
    //        enum: ["male","female","transgender"]
    //      },
    password:String,
    gender:String,
    age:Number
})

 const authModel = mongoose.model("registeredData",authSchema)
  
 module.exports=authModel;