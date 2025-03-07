const jwt = require('jsonwebtoken');

const middlew=(req,res,next)=>{
   const token =req.query.token;
  // const header = req.rawHeaders[1];
  // const token= header.split(" ")[1]
// console.log(token)


//this is the where we are verifying token

  jwt.verify(token, process.env.Secret_key, function(err, decoded) {
    if(err){
     res.send("you cant acess without login !")
    }if(decoded){
      console.log(decoded.role) // bar
      req.body.role=decoded.role;
      next()
    }
   
  });
    //  try {
    //   if(req.query.token == "yoyo"){
    //     next()
    //   }else{
    //     res.send("You cant acess this page without  login ")
    //   }
        
    //  } catch (error) {
    //     console.log(error)
    //  }
     

}
module.exports=middlew;