//jshint esversion:6
const express=require("express");
const date=require("./date");
const router =express.Router();  //creates the  router class which again is the most important thing
let list=[];
let wlist=[]; //use let as it will be a block scope but when declared globally it also uses gobally



router.get("/",(req,res) => {
  /*let a=new Date();
  let option={
    weekday:"long",
    day:"numeric",
    month:"long"
  };*/
  res.render("index",{date:date(),listitem:list});
});

//a.toLocaleDateString("en-us",option)


router.get("/work",(req,res) => {
  res.render("index",{date:"work item",listitem:wlist});
});

router.post("/",(req,res) => {
  let a=req.body.listitem;
  console.log(req.body);
  if(req.body.work=="")
  {
    wlist.push(a);
    res.redirect("/work");
  }
  else {
    list.push(a);
    res.redirect("/");
  }
  //res.render("index",{date:a.toLocaleDateString("en-us",option),listitem:list});   //this wont work we need to redirect that back to get request as we dont have what get has that is why it is always good practise to redirect from post to get request

});





module.exports=router;  //this is to sendthe router class whoever is aquiring this









//this is actually very helpful command it tells to send new request for a new page whoch help us in evaluating with the content happened in the preevious outputs
