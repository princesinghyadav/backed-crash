const mongoose= require('mongoose');

const Userschema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        // trim:true,
        // unique:true,
        // minlength:[3,'username must be longer than three']
    },
    email:{
        type:String,
        required:true,
        // trim:true,
        // unique:true,
        // minlength:[13,'email must be longer than thirteen']
    },
    password:{
        type:String,
        required:true,
        // trim:true,
        // minlength:[4,'password  must be longer than four']
    }

})

 const userr= mongoose.model('users',Userschema,'users');
module.exports=userr;