'use strict'

var mongo = require("mongodb");
var express = require("express");
var bodyParser = require("body-parser");

//express application
var file = express();

//use body parser
file.use(bodyParser.urlencoded({extended: false}));

//DB Connection

var DB ;

var mongoClient = new mongo.mongoClient("mongodb://localhost:27017/users",{
    useNewUrlParser: true;
})
mongoClient.connect(err=>{
    if (err){
        console.log("Sorry Error in Connecting to Database !")
    }
    else{
        console.log("Successfully Connected to Database !")
    }
    DB= mongoClient.db("users");
});