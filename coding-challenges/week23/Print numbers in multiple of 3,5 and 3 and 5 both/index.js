


function numbers() {

        for (let i = 1; i <= 100; i++){
            if (i%3 == 0 && i%5 != 0) {
                console.log("FIZZ");
            }

            else if (i%5 == 0 && i%3 != 0) {
                console.log("BUZZ");
            }

            else if (i%3 == 0 && i%5 == 0) {
                console.log("FIZZBUZZ");
            }
            else {
                console.log(i);
            }
        }
}

numbers();