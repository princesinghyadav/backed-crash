const mongoose = require('mongoose')

const authSchema=  mongoose.Schema({
    name:String,
    email: {type:String, required :true},
    // gender: {
    //        enum: ["male","female","transgender"]
    //      },
    password:String,
    gender:String,
    age:Number,
    role:{   
        type:String,
        default:"user",
        required:true
        
    },
    secret_otp:String,
    isVerified:{type:Boolean,
               default:false
            }
})

 const authModel = mongoose.model("registeredData",authSchema)
  
 module.exports=authModel;


 //closure difference hof