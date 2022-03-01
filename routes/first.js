//jshint esversion:6
const express=require("express");
const date=require("./date");
const mongoose=require("mongoose");
const router =express.Router();  //creates the  router class which again is the most important thing

let p=date();
let alist=[];
let wlist=[];

mongoose.connect("mongodb+srv://Garv_Gupta:garvgupta2002%402002@cluster0.qfzdw.mongodb.net/todolist");


const listschema={
  name:String
};
const worklistschema={
  name:String
};

const Workitems=mongoose.model("worklist",worklistschema);

const Items=mongoose.model("list",listschema);


router.get("/",(req,res) => {
  /*let a=new Date();
  let option={
    weekday:"long",
    day:"numeric",
    month:"long"
  };*/

  alist=[];

  Items.find((err,doc) => {
    if(err) {
      console.log(error);
    }
    else {
       doc.forEach((value) => {
         //console.log(value.name);
         alist.push(value.name);
       });
       //console.log(alist);
       res.render("index",{date:date(),listitem:alist});  //we have to define this under the find bcause it is asynchronous
    }
  });
});

//a.toLocaleDateString("en-us",option)






router.get("/work",(req,res) => {


  wlist=[];

  Workitems.find((err,doc) => {
    if(err) {
      console.log(error);
    }
    else {
       doc.forEach((value) => {
         //console.log(value.name);
         wlist.push(value.name);
       });
       //console.log(wlist);
       res.render("index",{date:"work item",listitem:wlist});
    }
  });
});


router.post("/",(req,res) => {
  let a=req.body.listitem;
  //console.log(a);
  //console.log(req.body);
  if(req.body.work=="")
  {
    const item=new Workitems({
      name:a
    });
     item.save();
    res.redirect("/work");
  }
  else {
    const item=new Items({
      name:a
    });
    item.save();

    res.redirect("/");
  }
  //res.render("index",{date:a.toLocaleDateString("en-us",option),listitem:list});   //this wont work we need to redirect that back to get request as we dont have what get has that is why it is always good practise to redirect from post to get request

});


router.post("/delete",(req,res) => {
  console.log(req.body);
  if(req.body.checkbox) {
    Items.deleteOne({name:req.body.checkbox},(err) => {
      if(err ){
        console.log("sorry cant delete this item");
      }
      else {
        console.log("item deleted");
      }
  res.redirect("/");
    });
  }
});
if(p!==date()) {
     Items.deleteMany({});
}



module.exports=router;  //this is to sendthe router class whoever is aquiring this









//this is actually very helpful command it tells to send new request for a new page whoch help us in evaluating with the content happened in the preevious outputs
