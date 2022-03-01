//jshint esversion:6
const express=require("express");
const router =express.Router();  //creates the  router class which again is the most important thing

/*router.use("/",function (req,res,next) {
  console.log("heyo");
});*/   //this has no next defined and this is why we will never move to the controller action which is lst of the chain


router.get("/",(req,res) => {
  res.render("users");
});



module.exports=router;  //this is to sendthe router class whoever is aquiring this
