
const http=require("http")

const server =http.createServer((req,res)=>{
    if(req.url==="/home" ){
        res.write(" <h2> welcome to home page </h2>")
        res.end()
    }
    else if(req.url==="/center" ){
        res.write("welcome to center  page ")
        res.end()
    }
    else {
        res.write("404 Not Found  ")
        res.end()
    }

})
server.listen(8080,()=>{
    console.log("server is running on port 7080")
})