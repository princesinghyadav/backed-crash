 const express =require('express')
const crudRouter=express.Router();
// const Blogmodel=require('../models/user.models')
const crudfunn=require('../controllers/crudfun')

crudRouter.get('/',(req,res)=>{
    res.send("this is a page  of croud home")

})

crudRouter.post('/posting',crudfunn.crate  )
crudRouter.get('/reading', crudfunn.Readd)
crudRouter.patch('/patching',crudfunn.update )
crudRouter.delete('/deleting',crudfunn.deletee  )
crudRouter.delete('/soft/:id',crudfunn.soft  )

  module.exports=crudRouter; 