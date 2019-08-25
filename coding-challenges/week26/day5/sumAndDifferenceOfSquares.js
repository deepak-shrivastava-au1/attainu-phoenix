function sumOfSquares(num) {

    let squareThenSum = 0;
    let sumThenSquare = 0;
    let total = 0;
    for (let i = 1; i <= num; i++) {
        squareThenSum = i*i + squareThenSum;
        sumThenSquare = i + sumThenSquare;
    }
     total = sumThenSquare*sumThenSquare;
     console.log("sum Then square = ", total);
     console.log("square Then sum = ", squareThenSum);

     return total - squareThenSum;

}

console.log("Difference = ", sumOfSquares(100));