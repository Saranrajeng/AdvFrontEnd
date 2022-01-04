function minofAll(){
    var min =arguments[0];
   for(var i=0; i<arguments.length;i++){
       if(min>arguments[i]){
           min=arguments[i];
       }
   }
   return min

}
console.log(minofAll(1,2,3,4,5,6));
console.log(minofAll(-1,-5,10));
console.log(minofAll(10,20));;