function startNumber(num) {
    let arr = [];
    arr.push(num);
    for ( let i = num; i >= 1; i--) {
        if( num % 2 == 0) {
            num = num/2;
            arr.push(num);
        }
        else {
            num = num*3 + 1;
            arr.push(num);
        }
        if (num == 1) {
            break;
        }
    }
    return arr;
}
//console.log(startNumber(97));
    let array = [];
    for (let k = 0; k < 1000; k++ ) {
        let result = startNumber(k).length;
        array.push(result);
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {

            if (array[j] < array[j+1]) {
                
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    console.log(array[0]);
    



