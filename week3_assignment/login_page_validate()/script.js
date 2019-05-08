'use strict'

var max_attempt = 3;

function validate() {

var username= document.getElementById("username").value;
var password = document.getElementById("password").value;

console.log(username, password);

if( username ==="deepak" && password === "shrivastava"){

    alert("login Successfully");
    window.location= "login.html"; //redirect to the same page again.
 
}
else{
alert ("Login Failed...");
max_attempt--;
}

if(max_attempt==0){

    alert("You have exceeded the maximum limit:");

}
}
