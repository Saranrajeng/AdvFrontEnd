const API_KEY="b156d8abf93d9eab93b8bdcc743e2082";

var div = document.querySelector(".div");
var discity=document.getElementById("city");
var degree=document.getElementById("degree");
var main=document.getElementById("main");
var humidity=document.getElementById("humidity");
var speed= document.getElementById("speed");
var icon =document.getElementById("icon");

var data1;

function fetching(){
    let city = document.querySelector(".input").value;
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=b156d8abf93d9eab93b8bdcc743e2082")
    .then((Response)=>Response.json())
    .then((data)=>{
        console.log(data);
        humidity.innerText=data.main.humidity+"%";
        speed.innerText=data.wind.speed+"km/hr";
        main.innerText=data.weather[0].description;
        discity.innerText=data.name;
        icon.src="https://openweathermap.org/img/wn/"+data.weather[0].icon+".png";
        degree.innerText=data.main.temp+"'F";
        div.style.display="contents";
    });

   
}


