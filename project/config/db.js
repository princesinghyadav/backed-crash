const mongoose =require('mongoose');

function connectToDb(){

    mongoose.connect('mongodb+srv://princesinghyadav017:prince@12@cluster0.lgjam.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
        console.log("connnected to database , sir ")
    }).catch((err)=>console.log(err,'error ouucerued'))

}

module.exports=connectToDb;