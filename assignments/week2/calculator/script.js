
//add operation

var getValue = function(){
     number1 = document.getElementById("number1").value;
     number2 = document.getElementById("number2").value;

    returnObject = {
        "number1": number1,
        "number2": number2
    }
  
    return returnObject;
  }
   
    showResult = function(result){
    resultent= document.getElementById("result");
    resultent.innerText = result;
}

//add operation
plusoperation= function() {
  num = getValue();
plusButton = document.getElementById("plusButton");
sum = parseInt(num.number1) + parseInt(num.number2);
showResult(sum);
}
plusButton.addEventListener("click", plusoperation); 

//Minus Operation
minusoperation=function() {
  num = getValue();
minusButton = document.getElementById("minusButton");
minus = parseInt(number1) - parseInt(number2);
showResult(minus);
}
minusButton.addEventListener("click", minusoperation); 

//multiply Operation
muloperation=function() {
  num = getValue();
mulButton = document.getElementById("mulButton");
mul = parseInt(number1) * parseInt(number2);
showResult(mul);
}
mulButton.addEventListener("click", muloperation); 

//Division Operation
divoperation=function() {
  num = getValue();
divButton = document.getElementById("divButton");
div = parseInt(number1) / parseInt(number2);
showResult(div);
}
divButton.addEventListener("click", divoperation); 

//Reminder Operation
rimoperation=function() {
  num = getValue();
rimButton = document.getElementById("rimButton");
rim = parseInt(number1) % parseInt(number2);
showResult(rim);
}
rimButton.addEventListener("click", rimoperation); 

//square Operation

sqroperation= function() {
  num = getValue();
  document.getElementById("number2").disabled = true;
sqrButton = document.getElementById("sqrButton");
sqr1 = parseInt(number1) * parseInt(number1);
showResult(sqr1);

}
sqrButton.addEventListener("click", sqroperation); 

//cube Operation
cubeoperation =function() {
  num = getValue();
  document.getElementById("number2").disabled = true;
cubeButton = document.getElementById("cubeButton");
cube1 = parseInt(number1) * parseInt(number1) * parseInt(number1);
showResult(cube1); 
}
cubeButton.addEventListener("click", cubeoperation); 