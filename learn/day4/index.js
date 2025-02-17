const express= require("express")
const helmet = require("helmet")
const app =express()


app.use(helmet())

app.get("/", (req, res) => {
    res.send("Hello World with Helmet!");
  });

app.listen(8005,()=>{
    console.log("server on 8005");
})