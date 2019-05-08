

var star= function(n){
    var k = ' ';
    //var l = ' ';
    for(var i=1; i<=n; i++){
        
    for (var j =1; j<=n-i; j++){
            k= k+"\t";
            //console.log("deepak");
    }
    for(var v=1; v<=i; v++){
        k=k+"*\t\t";  
    }
    console.log(k);
    k="";
    }
 
}

star(10);