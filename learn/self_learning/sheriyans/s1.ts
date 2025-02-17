var http=require('http')

const server =http.createServer((req,res)=>{
    console.log(req.url);
if(req.url=='/about'){
    res.end('this is a about page ')
}
if(req.url=='/aboutt'){
    res.end('this is a abouttttt page ')
}
   
})

server.listen(3000)

// i have create server with the help of http and simple routing 