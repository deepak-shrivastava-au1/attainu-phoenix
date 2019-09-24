

function countAndSay(n) {
    if( n == 1 ) { return "1";}
    if( n == 2 ) { return "11";}

    let str = "11";
    for(let i = 4; i <= n; i++) {
        str += '$';
        let count = 1;
        let temp = "";

        for(let j = 1; j < str.length; j++) {
            if(str[j] != str[j-1]) {
                temp += count ;
                temp += str[j - 1];
                count = 1;
            }
            else {
                count++;
            }
        }
        str = temp;
    }
    return str;
}

console.log(countAndSay(4));