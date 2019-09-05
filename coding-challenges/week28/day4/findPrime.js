function primeNumber(n) {
    
    let arr = [];
    for(let i = 1; i <= n; i++) {
        let count = 0;
        for(let j = 1; j <= i; j++) {
            if(i % j == 0) {
                count += 1;
            }
        }
        if(count == 2) {
            arr.push(i);
        }
    }
    return arr;

}

console.log(primeNumber(10));