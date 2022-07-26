// const { time } = require("console");
// const express=require("express");
// // const { dirname } = require("path");
// const app=express();
// const path=require("path")
// const contact=require("./api/user")
// // console.log(contact)
// // app.get("/",(req,res)=>res.send("<h1>hello go my code </h1>"))
// app.get("/",(req,res) =>res.sendfile(path.join(__dirname,"public","home.html"    )))
// // app.get("/info",(req,res) =>res.sendfile(path.join(__dirname,"public","info.html")))
// app.use(express.static(path.join(__dirname,"public")))

// const PORT=process.env.PORT||5000;
// app.listen(PORT,err=>err?console.log(err):console.log("server is good"))
// let day =time.getDate();
// let hour=time.gethour();
// console.log(day)
// console.log(hour)
const express=require("express");
const { Server } = require("http");
const app=express();
const path=require("path")


const time = new Date();
const hour = time.getHours();
const day = time.getDay();

console.log('hour',hour)
console.log('day',day)

const PORT = process.env.PORT || 000

app.use(function(req,res,next){
    (hour>9 && hour<=11 && day>1 && day<6 ) ? next(): res.sendFile(path.join(__dirname,"public","home.html"))
})

app.use(express.static(path.join(__dirname,"public")))



app.listen
(PORT,err=>err?console.log(err):console.log(  '  server is successfully runnig ' ) );
