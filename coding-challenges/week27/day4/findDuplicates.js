function findDuplicates(arr) {
    let length = arr.length;
    let duplicates = [];
    let singleArr = [];
    for(let i = 0; i < length; i++) {
        
        if(singleArr.includes(arr[0]))
        {
            duplicates.push(arr[0]);
            arr.shift();
         }else {
            singleArr.push(arr[0]);
            arr.shift();
         }
        
    }
    //return duplicates;
    return singleArr;

}


let arr1 = [1,2,3,2,4,4,5,6,7,7,7,8,9];
console.log(findDuplicates(arr1));