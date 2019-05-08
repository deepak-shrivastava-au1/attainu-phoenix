'use strict'


var express = require("express");
var app = express();


app.get("/mul/:number1/:number2", function(request, response){

    var number1 = parseInt(request.params.number1);
    var number2 = parseInt(request.params.number2);
    var result = number1*number2;

    response.send("Multiplication is = "+ result);
});
app.get("/add/:number1/:number2", function(request, response){

    var number1 = parseInt(request.params.number1);
    var number2 = parseInt(request.params.number2);
    var result = number1+number2;

    response.send("Sum is = "+ result);
});

app.get("/minus/:number1/:number2", function(request, response){

    var number1 = parseInt(request.params.number1);
    var number2 = parseInt(request.params.number2);
    var result = number1-number2;

    response.send("Subtraction is = "+ result);
});
app.get("/div/:number1/:number2", function(request, response){

    var number1 = parseInt(request.params.number1);
    var number2 = parseInt(request.params.number2);
    var result = number1/number2;

    response.send("Division is = "+ result);
});

app.listen(3000);