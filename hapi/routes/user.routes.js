const Inert = require("@hapi/inert");

 


 const useroutes=[
    {
    method:"GET",
    path:"/using",
    handler:(request,h)=>{
       return  `this is userpage `
    }
 },
 {
    method:"get",
    path:"/users",
    handler:(request,h)=>{
        return "this is userspage "
    }
 }
 
]
module.exports=useroutes;