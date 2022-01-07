var input = document.getElementById("input").value;
var container = document.querySelector(".container");
var containerbtn = document.querySelector(".container-btn");
var btn = document.querySelector(".btn");
var videodiv=document.querySelector(".video-div");
var interval,interval1,interval2;
var i =document.getElementById("i");
var love =document.getElementById("love");
var you =document.getElementById("you");
// var audio=document.getElementById("audio");
var time=3;
var time1=3;
var time2=3; 

function ok(){
    you.style.display="none";
    
    
       
        videodiv.style.display="flex";
        // audio.muted="false";
      
        
    
    
}

function iv(){
    
    i.style.display="flex";
   
    console.log("called");
   time--;
   if(time<0){clearInterval(interval);
    interval1 = setInterval(lovev(),1000);}
   
    
}
function lovev(){
    i.style.display="none";
    love.style.display="flex";
    time1--;
    console.log("caling");
    if(time1<0){clearInterval(interval1);
     interval2 = setInterval(youv(),1000);}
    
}
function youv(){
    love.style.display="none";
    you.style.display="flex";
    clearInterval(interval2);
    clearInterval(interval);
    clearInterval(interval1);
    // ok();
}

function ok1(){
    var input = document.getElementById("input").value;
    if(input=="Baby"||input=="baby"||input=="bae"||input=="gundu"||input=="Gundu"){
        container.style.display="none";
        containerbtn.style.display="none";
        videodiv.style.display="flex";
}
else{
    alert("Baby enter the correct answer!");
}
}