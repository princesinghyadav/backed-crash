const Inert = require("@hapi/inert");

await server.register(Inert);


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
 },{
   
      method: "GET",
      path: "/static/{file*}", // Serve any file dynamically
      handler: {
        directory: {
          path: "public", // Folder where static files are stored
          index: ["index.html"], // Default file
        },
      },
   
 }
]
module.exports=useroutes;