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
    console.log(count);
}

console.log(stepsToMaxSum(4));




1+1+1+1
2+1+1
3+1
4