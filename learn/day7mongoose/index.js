const mongoose =require("mongoose")
 const urll= "mongodb://127.0.0.1:27017/";

//   first connect the server with mongo db with the help of mongoose.
 mongoose.connect(urll)
 .then(()=>{
    console.log("mongoose connected with server ");
 }).catch((err)=>{
    console.error("something went wrong", err);
 })
// mongoose.disconnect()

//  second structure the document prroviding a definite structure to the documents as well .

 // 1. step  schema or 3d model 
 const UserSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    post:String,
    isMarried:Boolean
 });
// 2. step model 
 const User= new mongoose.model("user",UserSchema)

//  3 step product insert , delelte ,update , retreive
   const user1= new User ({
    name:"Prince kumar yadv ",
    age:25,
    email:"prince017gmail.com",
    post:"front- ",
    isMarried:false,
   })
//    this is for saving the data after making if u will not coommetn out then it will adding continuously.

//    user1.save()
//    .then(()=>{ 
//     console.log("user saved successfully",user1)
//    }).catch((err)=>{
//     console.error("something went wrong ",err)
//    }) 

// //   retreive the data 

User.find({age:{$lte:30}})
.then((users)=>{
        console.log("user printed successfully",users) 
       }).catch((err)=>{
        console.error("something went wrong ",err)
       })

// //  update data

// User.updateOne( {name:"Prince kumar yadva"},{age:22})
// .then(()=>{
//         console.log("user saved successfully")
//        }).catch((err)=>{
//         console.error("something went wrong ",err)
//        })

// // Delete Data  
//    User.deleteOne({name:"Prince  "})
//    .then((use)=>{
//     console.log("deleted suceesfully" ,use)
//    }).catch((err)=>{
//     console.log(err)   
//    })

//  tip for using or operator 
//  User.find(: $or :[{name:"Alice"},{age:{$gt:25}}]);