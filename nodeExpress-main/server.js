const express=require("express");
// const { dirname } = require("path");
const app=express();
const path=require("path")
const contact=require("./api/user")
// console.log(contact)
// app.get("/",(req,res)=>res.send("<h1>hello go my code </h1>"))
app.get("/",(req,res) =>res.sendfile(path.join(__dirname,"public","home.html"    )))
// app.get("/info",(req,res) =>res.sendfile(path.join(__dirname,"public","info.html")))
app.use(express.static(path.join(__dirname,"public")))

const PORT=process.env.PORT||5000;
app.listen(PORT,err=>err?console.log(err):console.log("server is good"))


function get getT
app.get("/now", function(req,res,next){
    next();

},function(req,res){
    res.json({time: req.time});
})

