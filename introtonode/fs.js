
const fs=require("fs")


    fs.readFile("./text.txt","utf-8" ,(err,msg)=>{
        if(err){
            console.log("error",err)
        }


        console.log( msg)
    })

    // console.log( "msg")
    // const msg= fs.readFileSync("text.txt","utf-8")
    // console.log(msg)