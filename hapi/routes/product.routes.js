
const productroutes=[
    {
    method:"get",
    path:"/product/{id}",
    handler:(request,h)=>{
 // example of route parameters 
        //  console.log(request.params.name)
      //request query string
      const {name, age}=request.query;
      console.log(name,age)
      console.log(request.params.id)
   
        return 'this is product page '
    }
},
    {
   
        method:"post",
        path:"/productpost",
        handler:(request, h)=>{

console.log(request.payload);// in express we use requst.body;

            return 'this is post success'

        }
    },
    {
      method:"post",
      path:"/response",
      handler:(request,h)=>{

         const {username, password}=request.payload;
         if(username==="admin" &&  password==="passs"){
            return h.response({massage: "user can login "}).code(200)
         }else{
            return h.response({massage:"username or password is incorrect"}).code(404)
         }
//  console.log(request.payload.username);

      }
    }

]
 module.exports=productroutes;