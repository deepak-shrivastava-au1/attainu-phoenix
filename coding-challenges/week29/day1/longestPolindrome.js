function findLongestPoli(str) {
     str = str.split('');
     let arr =[];
    let n = str.length - 1;
    for(let i = 0; i <= str.length; i++) {
        for (let j = 0; j <= str.length; j++) {
            if(str[i] == str[j]){
                for(let u = 0; u <= str[j]; u++) {
                    arr.push(str[u]);
                }
            }
        }
    }
    
    return arr;
}

console.log(findLongestPoli("malayalamic"));