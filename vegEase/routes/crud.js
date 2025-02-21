 const express =require('express')
const crudRouter=express.Router();
// const Blogmodel=require('../models/user.models')
const crudfunn=require('../controllers/crudfun')

// crudRouter.get('/',(req,res)=>{
//     res.send("this is a page  of croud home")

// })

crudRouter.post('/posting',crudfunn.crate )
// crudRouter.get('/reading', crudfun.Readd)
// crudRouter.get('/patching',crudfun.Readd )
// crudRouter.get('/deleting',crudfun.Readd )

  module.exports=crudRouter;