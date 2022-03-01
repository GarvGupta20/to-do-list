//jshint esversion:6
const express=require("express");
const bodyparser=require("body-parser");
const fs=require("fs");

//here i will be requiring the routes files which we wil be working on as the different modules

//whenever your call third party middleware access them in this file first as they are basically global everytme

const app=express();

const first=require("./routes/first.js");
const users=require("./routes/users.js");






//setting up my view engine
app.set("views","./views");
app.set("view engine","ejs");  //this is setting my view engine to ejs which i will be using and after this whole thing i dont need to set my view engine for any othe route

//declaring all the global middleware functions  and abviously we didnt write these methods as they are already written in express or a thirdparty middleware making no use of req res and next fucntions


app.use(bodyparser.urlencoded({encoded:true}));
app.use(express.static(__dirname+"/public"));
app.use(express.json());


//then i will declaring the middleware function which are important to be used for the particular routes

app.use("/",first);
app.use("/users",users);

//no request ethod will be use as i have kept all of them in my routes file


//we try to create our own little view engine to undersatnd what purpose ejs do for us
//as i do res.render() then my view engine will called and this function is called this function is our evrything and we should try to create a good engine

/*app.engine("my",(filepath,option,callback) => {
  fs.readFile(filepath,(err,content) => {
    if(err) {
      return callback(err);
    }
    else {
      var rendered=content.toString().replace("--",option.hi);
      return callback(null,rendered);
    }
  });   //this is our app engine it will take files with extension my and then whenever we call res.render we have to give it the argument of these callbackfunction and then we will read thod files and can parse it  or do whatever stuff we need to do with
});*/

app.listen(3000,(err) => {
  if(err) {
    console.log(err);
  }
  else {
    console.log("your server has been set up");
  }
});




module.exports=app;
