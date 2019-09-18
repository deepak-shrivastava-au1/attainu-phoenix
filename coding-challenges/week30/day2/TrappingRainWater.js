function trappingRainWater(arr) {
    let total = 0;
    let left_max = 0 , right_max = 0;

    let max = arr.length - 1;
    let min = 0;

    while(min <= max) {
        if(arr[min ] < arr[max]) {
            if(arr[min] > left_max) {
                left_max = arr[min];
            }
            else {
                total += left_max - arr[min];
                min++;
            }
        }
        else {
            if(arr[max] > right_max) {
                right_max = arr[max];
            }
            else {
                total += right_max - arr[max];
                max++;
            }
        }
    }
   
    return total;
}

let input = [0,1,0,2,1,0,1,3,2,1,2,1];

console.log(trappingRainWater(input));