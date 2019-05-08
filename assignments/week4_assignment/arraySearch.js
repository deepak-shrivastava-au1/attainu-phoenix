'use strict'

var arr = function(a, n){
var count = 0;
for(var i=0; i<=a.length; i++){

    if(a[i] === n){
        console.log("\n\n"+a[i]+ "  is at postion of  "+ i);
        count=count+1;
    }
    
}
if(count >=1){
    console.log("\n\nGo Back for More Search !!");
}
else{
    console.log("\n\nNo Result Found !!")
}

}

arr(['a','b','c','d','e'], 'd');
