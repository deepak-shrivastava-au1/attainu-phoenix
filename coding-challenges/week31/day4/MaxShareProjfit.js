'use strict';
function MaxShareProfit(n) {
    let max = 0;
    let diff = 0;

    for ( let i = 0; i < n.length; i++) {

        for (let j = i; j < n.length; j++) {

           diff = n[j] - n[i];

           if( max < diff) {
            max = diff;
            }
        }   
    }
    return max;

}

let input = [7,1,5,3,6,4];

console.log(MaxShareProfit(input));