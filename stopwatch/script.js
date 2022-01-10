var timeH = document.querySelector("h1");
let timeSecond = 0;
        
var mini=0;
var maxi=60;
var countUp;
var btn =document.getElementById("btn");





  function displayTime(second) {
      let hr = Math.floor(second/3600)
      
    let min = Math.floor(second /60 );
      if(min>60){min=min%60}
    

    let sec = Math.floor(second %60);
    timeH.innerHTML = `${hr < 10 ? "0" : ""}${hr}:${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
  }
  
function start(){
     countUp = setInterval(() => {
        timeSecond++;
        displayTime(timeSecond);
        
      }, 10);
     
  }
  function pause(){
      clearInterval(countUp);
  }
  function reset(){
      clearInterval(countUp);
      timeSecond=0;
      timeH.innerHTML='00:00:00';
  }
  function lap(){
      var list =document.getElementById("list");
      var li =document.createElement("li");
      li.innerHTML=timeH.innerHTML;
      list.appendChild(li);
  }
  function startpause(){
      if(btn.innerText=="Start"){
          start();
          btn.innerText="Pause";
      }
      else{
          pause();
          btn.innerText="Start"
      }
  }