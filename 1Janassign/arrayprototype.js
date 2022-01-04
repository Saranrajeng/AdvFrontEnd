Array.prototype.checkPrime = function() {
    var flag =0;
    for (let i = 0; i < this.length; i++) {

       

        if(this[i]==2||this[i]==3||this[i]==5){

        }
           
           else{
               if(this[i]%2==0 || this[i]%3==0 || this[i]%5==0){
                      flag=1;
           }
                    
           }
           
    }
    if(flag==1){
        return false
    }
    else{
        return true
    }
  };
  console.log([2,4,10,15].checkPrime());
  console.log([1,3,5].checkPrime());
  console.log([1,3,5,7,11,4,13,17,2].checkPrime());