const mongoose=require('mongoose')

const userSchema =new   mongoose.Schema({
    name :String,
    no_of_items:Number
})


const userModel= mongoose.model('user',userSchema)


module.exports=userModel;
