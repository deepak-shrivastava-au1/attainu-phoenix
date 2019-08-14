function   inputString(s) {
    let repeat = 0;
  //  let result = s.split("");
  let result = s.toLowerCase();
    console.log(result);
    for (let i = 0; i < result.length; i++) {
        for (j = 0; j < result.length; j++) {
            if (result.charCodeAt(i) === result.charCodeAt(j)) {
                repeat++;
            }
        }
    }
    if (repeat > result.length) {
        return true;
    }
    else {
        return false;
    }
}


console.log(inputString("Ansal"));
console.log(inputString("Arkesh"));