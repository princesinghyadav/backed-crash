

const roleacess= (req,res,next)=>{

    const usertype=req.body.role
    console.log(usertype)
    if(usertype =="admin"){
     
        // res.send("this page only allowed for admin user")
        next()
    }else{
   res.send("this page only for admin")
    }

}

module.exports=roleacess;