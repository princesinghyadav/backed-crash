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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var userModels = require('./models/user');
var connection = require('./config/db');
var formRoutes = require('./form');
//   app.use("/",(req,res,next)=>{  // middleware must call next function      
//      const a =2 ;
//      const b=4;
//      console.log(a+b);
//   next()
//   })
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", 'ejs');
app.use('/form', formRoutes);
app.get("/", function (req, res) {
    //  res.render("index")
    res.send("this is a home page ");
});
app.get("/about", function (req, res) {
    res.send("this is a about page");
});
app.post('/form-detailsave', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, email, password, userss;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                console.log(req.body);
                _a = req.body, username = _a.username, email = _a.email, password = _a.password;
                return [4 /*yield*/, userModels.create({
                        username: username,
                        password: password,
                        email: email
                    })];
            case 1:
                userss = _b.sent();
                res.send(userss);
                return [2 /*return*/];
        }
    });
}); });
// performing crud operations 
// readd operation in crud 
//  app.get("/read",async (req:any ,res:any)=>{
//    await userModels.find().then((userr:any)=>{
//       console.log(userr)
//       res.send(userr);
//    })
//    })
//   update operation of crud 
//    app.get("/update", async  (req:Url,res:any)=>{
//       await userModels.updateOne({username:'editor_hun_bhi'},{
//         email:'piyu@gmail.com'
//       }).then((userr:string)=>{
//          res.send(userr)
//       })
//  })
// app.get ('/delete',async(req:any,res:any)=>{
//     userModels. deleteOne({username:'editor_hun_bhai'}).then((userr:any)=>{
//        res.send(userr)
//        console.log("user deleted bro ")
//        // res.send("user deleted ")
//     }).catch((err:any)=>console.log(err))
// })
app.listen(8080);
