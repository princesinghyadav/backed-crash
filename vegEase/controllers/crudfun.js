const Blogmodel = require('../models/user.models')
async function Readd(req, res) {
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const skip = (page - 1) * limit;
    const data = await Blogmodel.find().skip(skip).limit(limit);
    res.json({ status: "success", data })

}
async function crate(req, res) {
    console.log(req.body, 'req.body')
    const user = await new Blogmodel(req.body)
    console.log(user, 'user')
    user.save()
    return  res.send("posting succesfully")
    
}
async function update(req, res) {

    // await  user.findByIdAndUpdate({id:"67b849133e3e0f93ba46e61f"},{password:"passwordchanged"})
    await Blogmodel.updateOne({ name: 'prince' }, {
        email: 'piyuchanged@gmail.com'
    })
    res.send("updated data")
}
async function deletee(req, res) {
    // const id=req.params.id()

    const de = await Blogmodel.findOneAndDelete({ email: "johndoe@example.com" });
    res.send("got deleeter ")
}
async function soft(req, res) {
    const id = req.params
    console.log(id)
    // const idd='janesmith@example.com'
    //const idd='67b85cc75e62abba214fda96'
    const  sof=await Blogmodel.findByIdAndUpdate(  id,
        { deleted: true },
        {new:true}

         );
    res.send("got  soft deleted ")

}

module.exports = {
    Readd,
    crate,
    update,
    deletee,
    soft
}