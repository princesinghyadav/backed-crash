const mongoose =require('mongoose');
// amkmin schema the 2 nd step 
const Testschema= new mongoose.Schema({
  name:String,
  email:{type:String, required:true},
  password:String,
  phone:Number
   
})

// 3rd step making models
const Blogmodel=  mongoose.model("tsting",Testschema);// is exported as a functiojn not schema


// first step to connect with mongo db 
async function conn(){
try {
    const connection = await mongoose.connect('mongodb://127.0.0.1:27017/tested')
     
    console.log("connected to database succesfully ,sir")
// 4 step to create user with folowing schema
const my_first= new Blogmodel({
    name:"sunil",
    email:"sunil098@gmail.com",
    password:"sunil@123",
    phone: 15488
    
    })
    //5 step to save 
    
    await my_first.save()
  connection.disconnect()
} catch (error) {
    console.log(error);
}
     

 
}
conn()