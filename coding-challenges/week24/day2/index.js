function commanElements(arr1, arr2) {

    let arr = [];
    let length = 0;
    if (arr1.length > arr2.length) {
        length = arr1.length;
    }
    else {
        length = arr2.length;
    }
    for (let i = 0; i <= length; i++) {
        for (j = 0; j <= length; j++) {
            if (arr1[i] === arr2[j]) {
                for (let u = 0; u <= arr.length; u++) {
                    if ( arr1[i] != arr[u]) {
                        arr.push(arr1[i]);
                    }
                
                 }
            }
        }
    }
    return arr;
}





let a = [2,3,4,4,2,6];
let b = [3,2,7,6,1,4];

console.log(commanElements(a,b));