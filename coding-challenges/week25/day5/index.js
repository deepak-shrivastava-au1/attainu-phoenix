function alphaCompress(str) {
 let compressed = "" ;
 let previous = str[0];
 let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === previous) {
            count += 1 ;
            continue;
        }
        compressed += previous;
        if(count > 1 ) {
            compressed += count.toString();
        }
        console.log(compressed);
        
        previous = str[i];
        count = 1;
    }
        // for the last charecter
        compressed += previous;
            if(count > 1 ) {
                compressed += count.toString();
        
    }
 return compressed;
 }

console.log(alphaCompress("AAADDBLLLL"));