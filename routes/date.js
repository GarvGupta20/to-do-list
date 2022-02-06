//jshint esversion:6


const m= () => {
  let a=new Date();

  let option={
    weekday:"long",
    day:"numeric",
    month:"long"
  };
  return a.toLocaleDateString("en-us",option);
};

module.exports=m;
//this module is an object which has an exports key which itself is an object and we can feed as many data as we can in this object and we can retrieve it all in the following modules just by requiring
