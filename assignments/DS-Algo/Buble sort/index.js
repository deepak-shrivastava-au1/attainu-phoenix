function randomArray(max) {
    let arr = [];
    for ( i = 1; i <= max; i++) {
        arr.push(Math.floor(Math.random()*10 ) );
    }
    return arr;
}


function bubbleSort(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        
        for (let j = 0; j < arr.length - i; j++) {

            if (arr[j] > arr[j+1]) {
                
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}


console.log(bubbleSort(randomArray(10)));