const mongoose=require('mongoose')

 async function conn(){
    try {
        const mon= await mongoose.connect('mongodb://127.0.0.1:27017/office')
        console.log("connected to database ");
    } catch (error) {
        console.log(error)
    }
}
  module.exports =conn;