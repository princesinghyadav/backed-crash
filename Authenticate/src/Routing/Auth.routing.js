const express= require('express')
const authRouter=express.Router()
const authControl=require('../controller/Auth.controller')  
const { body } = require('express-validator');
 
authRouter.post('/register', [
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  ],authControl.Register)
authRouter.post('/login',authControl.login)
authRouter.post("/verifyotp",authControl.verifyotp)
module.exports=authRouter;