function alphaCompress(str) {
 let count = 0;
 let arr = [];
 str = str.toLowerCase();
 for (let i = 0; i <= str.length; i++) {
     for (let j = 0; j <= str.length; j++) {
         if (str.charCodeAt(i) === str.charCodeAt(j)) {
             count++;
         }
     }
     if(arr.indexOf(str[i] === -1) {
         if (count > 1) {
            arr.push(str[i]);
            arr.push(count);
        }
        else {
            arr.push(str[i]);
        }
        }
     }
 }

console.log(alphaCompress("AADDDLLLL"));