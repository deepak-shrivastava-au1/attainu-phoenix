'use strict'

var checkPrimeNumbers = function(n){
    var counter = 0;
   for(var i=1; i<=n; i++){
     
    if(n%i == 0){
        counter = counter+1;
    }
    
   }
   if(counter == 2){
       console.log(n, "is a Prime Number.");
   }
   else{
       console.log(n,"is not a prime number.");
   }
}

var printPrimeNumbers = function(num){

    
    for( var i=1; i<=num; i++){

        var counter=0;

        for(var j=1; j<=i; j++){

            if(i % j == 0){
                
                counter = counter+1;
            }
        }
             if(counter == 2){
                console.log(i);
             }
            
    }
}

var numberOfPrimeNumbers = function(a){
var n=0;
var number = a;
var arrprime = [];
for( var i=1; i<=number; i++){
    var counter = 0;
    for(var j=1; j<=i; j++){
        if(i % j ==0){
            counter++;
        }
    }
    if(counter == 2){
        arrprime.push(i);
        //console.log(i);
        n++;
    }
    if(n ==a){
        break;
    }
    else{
        number++;
    }
}


    return arrprime;

}


console.log(checkPrimeNumbers(25));
console.log(printPrimeNumbers(50));
console.log(numberOfPrimeNumbers(50));