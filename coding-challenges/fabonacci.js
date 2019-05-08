'use strict'

var fabonacci = function(n) {
    var a = 0; 
    var b = 1; 
    var f = 0;
    for(var i = 0; i < n; i++) {
        if( i <= 1 ){
            f = i;
        }
        else{
        f = a + b;
        a = b;
        b = f;
        }
        console.log(f);
    }
        
};
fabonacci(10);