function largest(arr1) {

    for (let i = 0; i <= arr1.length; i++) {
        for (let j = 0; j <= arr1.length -1; j++) {
            if( arr1[j] < arr1[j+1]) {
                let temp = arr1[j];
                arr1[j] = arr1[j+1];
                arr1[j+1] = temp;
            }
        }
    }
    return arr1[0];
}


function smallest(arr1) {

    for (let i = 0; i <= arr1.length; i++) {
        for (let j = 0; j <= arr1.length -1; j++) {
            if( arr1[j] > arr1[j+1]) {
                let temp = arr1[j];
                arr1[j] = arr1[j+1];
                arr1[j+1] = temp;
            }
        }
    }
    return arr1[0];
}



let a = [9,4,5,6,4,7,8,9]
console.log("Largest no is = ", largest(a));
console.log("Smallest no is = ", smallest(a));