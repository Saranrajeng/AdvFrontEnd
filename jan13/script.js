var data1;
var div = document.getElementById("img");
var img=[];
var im=[];

var i=0;
var images="images0";

for(var id=0; id<10; id++){
    if(id<10){
        images="images"+id;
        img[id]=document.getElementById(images);    
    }
}


function fetching(){
   fetch("https://api.unsplash.com/photos/?client_id=FH7I5vfDi5NPMu8OIZH3VFQ6mU9yS-fXVtKIye4gHy8")
         .then(response=>{
                return response.json()
             })
         .then(data=>{
              data1 = data;
                  img.forEach(element=>{
                                 if(i<10){
                                    element.src=data[i].urls.regular;
                                    i++;
                                  }
                              });
                    });
 }

function fetching1(){
    fetch("https://api.unsplash.com/photos/?query=London&client_id=K95w5Jk0CWqVSmRdS_ubMGU1a-H90bRPiZW5hweYz8U")
          .then(data=>{ 
               return data.json()
               })
          .then(picture=>{
              for(var id=0; id<10; id++){
                   if(id<10){
                        im[id]=document.createElement("img");
                        im[id].src=picture[id].urls.regular;
                        div.append(im[id]);
                    }
                }
           });

}
fetching();

window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
       fetching1();

    }
};


