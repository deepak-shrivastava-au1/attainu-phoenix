function missingNumbers(arr) {

    let missingArr = [];
    for (let i = 0; i < arr.length-1; i++) {
        let diff = arr[i+1] - arr[i];
      //  console.log(arr[i+1], arr[i]);
        if (diff != 1) {
            while(arr[i+1] - arr[i] != 1){
                missingArr.push(arr[i]+1); 
                arr[i]++;
            }
         }
        else {
           continue;
        }
    }
    return missingArr;
}


let arr1 = [1,2,3,4,5,9,10];
let arr2 = [1,2,3,4,5,6,8,10,11,13,14,17];
console.log(missingNumbers(arr1));
console.log(missingNumbers(arr2));