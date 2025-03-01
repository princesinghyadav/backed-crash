const authModel=require('../models/Auth.model')
const CryptoJS=require('crypto-js')
const { query, validationResult } = require('express-validator');




 const Register=  (req,res)=>{
  const {name,email,password,gender,age}= req.body;

3  // const hmac = CryptoJS.HmacSHA256("Hello, CryptoJS!", secretKey).toString();
 
const errors = validationResult(req);

if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() });
}
const hash2 = CryptoJS.SHA256(password).toString(); 
// const secretKey=1234567891234567;

// const encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();
// console.log("Encrypted Password:", encryptedPassword);
  try {
    const user = new authModel({
      name,
      email,
      password:hash2,
      gender,
      age 
    })
    user.save();
    
    res.status(201).json({
      massage :'user registered succesfully '
    })
   } catch (error) {
    console.log(error)
    res.send("error occured");
   }
}

function verifyPassword(inputPassword, storedHash) {
  return CryptoJS.SHA256(inputPassword).toString() === storedHash;
}


 const login = async (req,res)=>{
  const {email,password }=req.body;

   try {


    const user = await authModel.findOne({email})
    if(!user){
      return res.send("your emaill is incoreect or password ")
    }
  //  console.log(user.password)
  const storepass= user.password; 
  //  res.send(user)
  //  console.log(verifyPassword(password, storepass))
  const validPassword= verifyPassword(password,storepass);
    // const user=  await authModel.findOne({email,password})
    if(!validPassword){
      return res.send("your password has incoreect  ")
    }
    res.status(201).json({
      massage :'user login  succesfully '

    })
   } catch (error) {
    console.log(error)
   }
 }
module.exports={
    Register,
    login
}