"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const expres = require('express');
const formRoute = expres.Router();
formRoute.get("/", (req, res) => {
    res.send("this is a form page in route type form-detailsave");
});
//these method are to take data from form tag ,but showing on url   and not saving data in mongodb
formRoute.get("/form-section", (req, res) => {
    console.log(req.query);
    res.send("congrats you have succesfully  retrieve data");
});
// so another method is that through post method 
// formRoute.post("/form-section",(req,res)=>{
//    console.log(req.body)
//    res.send("congrats  succesfully  retrieve data,prince ")
// })
//  this is to store form data in mongo db after taking directly from user.
formRoute.get('/form-detailsave', (req, res) => {
    // console.log('success')
    res.render('formdata');
});
formRoute.post('/form-detailsave', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(req.body)
    const { username, email, password } = req.body;
    const userss = yield userModels.create({
        username: username,
        password: password,
        email: email
    });
    res.send(userss);
}));
module.exports = formRoute;
