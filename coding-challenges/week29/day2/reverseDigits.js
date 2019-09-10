

let rev = 0;
function reverseDigits(n) {
    let rem = 0;
   if(n > 0) {
       rem = n % 10;
       rev = rev * 10 + rem;
       n = Math.floor(n / 10);
       reverseDigits(n);       
   }
   if(n < 0) {
        rem = n % 10;
      
        rev = rev * 10 + rem;
        
        n = Math.trunc(n / 10);
        
        reverseDigits(n);  
   }
   
    return rev;
}

//console.log(reverseDigits(120));
console.log(reverseDigits(-1234));