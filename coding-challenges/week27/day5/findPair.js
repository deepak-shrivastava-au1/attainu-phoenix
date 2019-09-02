function findPairs(x, arr) {
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < i; j++) {
            if (arr[i] + arr[j] == x) {
                if (pairs.includes(arr[i])){
                    continue;
                }
                else {
                    pairs.push([arr[i], arr[j]]);
                }
                
            }
        }
    }
    return pairs;
}

let arr1 = [1,2,3,4,5,6,5,8];
console.log(findPairs(10, arr1));