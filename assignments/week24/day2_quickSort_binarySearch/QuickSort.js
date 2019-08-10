const randomArray = require("./randomArray");

function quickSort(arr) {
    if(arr.length <=1) {return arr;}

    let left =[],
    right = [],
    pivot = arr.shift(),
    centre = [pivot];
while(arr.length) {
    let currentElement = arr.shift();
    if (currentElement === pivot) {
        centre.push(currentElement);
    }else if (currentElement > pivot) {
        right.push(currentElement);
    }else {
        left.push(currentElement);
    }
}
let sortedLeft = quickSort(left);
let sortedRight = quickSort(right);
arr = sortedLeft.concat(centre.concat(sortedRight));

    return arr;
}
let x = randomArray(10);
console.log(x);
console.log(quickSort(x));