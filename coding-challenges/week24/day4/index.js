function subArray(arr) {
       let total = 0;
       let newTotal = 0,
       mArr = [];

    for (let i = 0; i <= arr.length-1; i++) {

        total = total + arr[i];
        console.log(total);
    for (let j = i; j < arr.length; j++){
        newTotal = newTotal + arr[i];
    if (total < newTotal) {
        mArr.push(newTotal);
    }
}
    }
    
   
     
    return mArr;

}

let mArr = [2,5,3,-4,6,-7,6];
console.log(subArray(mArr));
