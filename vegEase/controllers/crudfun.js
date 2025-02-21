
async function Readd(req,res){
   
   const data = await Blogmodel.find()
   res.json({status:"success", data})
 
}
 async function crate(req,res){
    console.log(req.body,'req.body')
    const user=await new Blogmodel(req.body)
    console.log(user,'user')
   await  res.send("posting succesfully")
    
}
async function update(req,res){

    await  Blogmodel.findByIdAndUpdate({id:""},{})
    
}
async function deletee (req,res){
    await   Blogmodel.findByIdAndDelete({id:''},{})
    
}
module.exports={
    Readd,
    crate,
    update,
    deletee
}