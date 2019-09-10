function stepsToMaxSum(n) {
    let count = 0;
    for(let j = 1; j <= n; j++) {
            var total = 0;
            let i = 0;
            while(total != n){
                total = j + i;
                i++;
            }
            if(total == n) {
                count++;
            }
    }
    for(let j = n-1; j >= 1; j--) {
            var total = 0;
            let i = 0;
            while(total != n){
                total = j + i;
                i++;
            }
            if(total == n) {
                count++;
            }
       }
       console.log(count);
}
console.log(stepsToMaxSum(3));
