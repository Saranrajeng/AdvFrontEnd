let arraysize =40;
let min=3;
let max=250;
let array =[arraysize];
let sortedaray=[arraysize];




generateArray();
 
function generateArray(){

    for(var i=0; i<arraysize;i++){
        array[i]=generatearrayvalue(min,max);
        if(array[i]==array[i-1]){
            array[i]=generatearrayvalue(min,max);

        }
    }
}

function generatearrayvalue(){
    return Math.floor(Math.random()*(max-min)+min);

}

bubblesort(array);

function bubblesort(array){
    sortedaray=Array.from(array);
    for(var i=0;i<arraysize;i++){
        for(var j=0;j<arraysize-1;j++){
             if(sortedaray[j]>sortedaray[j+1]){
                 let temp = sortedaray[j];
                 sortedaray[j]=sortedaray[j+1];
                 sortedaray[j+1]=temp;
             }
        }
    }
    return sortedaray;
}


