// const jwt =require('jsonwebticket')

const middlew=(req,res,next)=>{
   
     
     try {
      if(req.query.token == "yoyo"){
        next()
      }else{
        res.send("just go and login ")
      }
        
     } catch (error) {
        console.log(error)
     }
     

}
module.exports=middlew;