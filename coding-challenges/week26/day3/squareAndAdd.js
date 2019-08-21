function sqaureAndAdd(num) {
    let result = Math.pow(2, num);
    //let digit = 0;
    let sum = 0 ;
   // console.log(result) ;
    while(result) {
        sum  += result % 10;
        result = Math.floor(result / 10);
    }
 return sum ;
}


console.log(sqaureAndAdd(1000));