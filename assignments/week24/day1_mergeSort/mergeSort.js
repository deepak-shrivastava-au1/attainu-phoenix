function randomArray(max) {
    let arr = [];
    for( let i = 0; i <= max; i++) {
        arr.push(Math.floor(Math.random() * 10));
    }
    return arr;
}

function mergedArray(left, right) {

    let merge = [];
    while(left.length && right.length) {

        let smallest;
        if(left[0] < right[0]) {
            smallest = left.shift();
        } else {
            smallest = right.shift();
        }

        merge.push(smallest);
    }
    if (left.length) {
        merge = merge.concat(left);
    }
    if (right.length) {
        merge = merge.concat(right);
    }
    
    return merge;
}

function mergeSort(arr) {
    if (arr.length === 1) {return arr;}
    let middle = Math.floor(arr.length /2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);

    let leftSorted = mergeSort(left);
    let rightSorted = mergeSort(right);
    
    return mergedArray(leftSorted, rightSorted);

}
console.log(mergeSort(randomArray(9)));