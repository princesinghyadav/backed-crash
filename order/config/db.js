const mongoose=require('mongoose');
 
  const connection =()=>{
try {
      mongoose.connect('mongodb://127.0.0.1:27017/orderlist')
    console.log('connected to database')

} catch (error) {
    console.log(error)
}
     
 }
 module.exports=connection;