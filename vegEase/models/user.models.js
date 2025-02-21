const mongoose=require('mongoose')

const Testschema= new mongoose.Schema({
  name:String,
  email:{type:String, required:true},
  password:String,
  phone:Number
   
})



 
const Blogmodel=  mongoose.model("veg",Testschema);
    

 module.export=Blogmodel;