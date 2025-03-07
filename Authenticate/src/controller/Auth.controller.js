const authModel=require('../models/Auth.model')
const CryptoJS=require('crypto-js')
const {   validationResult } = require('express-validator');
const jwt=require('jsonwebtoken')
const  speakeasy = require("speakeasy");
const nodemailer = require('nodemailer');
const { text } = require('express');


 const Register=  (req,res)=>{
  const {name,email,password,gender,age,role,otp}= req.body;

3  // const hmac = CryptoJS.HmacSHA256("Hello, CryptoJS!", secretKey).toString();
 
 // this is for validationg input from user   express-validator
const errors = validationResult(req);

if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() });
}


//by using crypto-js we are converting input password in hexadecinmal pssword and decrypting it  
const hash2 = CryptoJS.SHA256(password).toString(); 
// const secretKey=1234567891234567;

// const encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();
// console.log("Encrypted Password:", encryptedPassword);



// this is for generating the otp 
var secret = speakeasy.generateSecret({length: 6});
// console.log(secret.base32,'secretsecret');
// it basically contain the genrated otp 
var token = speakeasy.totp({
    secret: secret.base32,
    encoding: 'base32'
  });
  
  console.log(token,"token")
  console.log(secret,"secret")
  // Email credentials (use environment variables for security)
// sendig the email to customer  (i)process
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use Gmail or another SMTP provider
  auth: {
    user:  process.env.email, // Your email (must allow less secure apps or use App Password)
    pass: process.env.passkey // Your email password or app password
  }
});

// Email options (ii)process
const mailOptions = {
  from: process.env.email,
  to: email, // Replace with recipient's email
  subject: 'VegEase register code....',
  text: `Your OTP code is: ${token}. It is valid for 5 minutes.Please don't share th
  is otp with someone else `
  
};

// Send the email   (iii)process
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending OTP:', error);
  } else {
    console.log('OTP sent successfully:', info.response);
  }
});

  try {
    const user = new authModel({
      name,
      email,
      password:hash2,
      gender,
      age ,
      role,
      secret_otp:secret.base32,
      isVerified:false
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


 // this is the funvction which we are using to check the encrpted password is correct or not 
function verifyPassword(inputPassword, storedHash) {
  return CryptoJS.SHA256(inputPassword).toString() === storedHash;
}

 // function of login the user after registering it 
 const login = async (req,res)=>{
  const {email,password }=req.body;
  
   try {
    // getting email and checking the user is valid or not inm our database 
    const user = await authModel.findOne({email})
    // console.log(user)
    if(!user){
      return res.send("your emaill is incoreect or password ")
    }
  //  console.log(user.password)
  const storepass= user.password; 
  //  res.send(user)
  //  console.log(verifyPassword(password, storepass))

  // validating rthe password with encrypted and decrypted pssword

  const validPassword= verifyPassword(password,storepass);
    // const user=  await authModel.findOne({email,password})
    if(!validPassword){
      return res.send("your password has incoreect  ")
    }

    // just creating the token by using jwt 
    var token = jwt.sign({ name:user.name  , role:user.role}, process.env.Secret_key);
    res.status(201).json({
      
      massage :'user login  succesfully ',
      token
    })
   } catch (error) {
    console.log(error)
   }
 }



 const verifyotp=  async(req,res)=>{
   const {email,otp}=req.body;
  //  console.log(email)
   const user2 =await authModel.findOne({email})
   
   console.log(user2)
  // function for validating the otp 
    try {
      var tokenValidates = speakeasy.totp.verify({
        secret:user2.secret_otp,
        encoding: 'base32',
        token: Number(otp) ,
        window: 6
      });
      console.log(tokenValidates)
      if(!tokenValidates){
       res.send("your otp doesnt match ")
      }if(tokenValidates){
         
         await authModel.updateOne({ email: email }, { $set: { isVerified:true } })
      
         res.send("otm matched sucessfully and update the userVerified")
      }
     
    } catch (error) {
      console.log(error)
    }
 }
module.exports={
    Register,
    login,
    verifyotp
}