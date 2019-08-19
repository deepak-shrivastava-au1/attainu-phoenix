'use strict'
var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");

//create the expres application
var app = express();

//use handlebar
app.set("view engine, hbs");

//use body parser
app.use(bodyParser.urlencoded({extended:false}));

// The DB stuff
var DB;
var mongoClient = new mongodb.MongoClient('mongodb://localhost:27017/blog', {useNewUrlParser: true});
mongoClient.connect(function(err) {
    if(err) {
        console.log("Error connecting to MongoDB");
    } else {
        console.log("Connection to MongoDB database blog established");
    }
    DB = mongoClient.db("blog");
});
//list all the blog posts
app.get("/", function(request, response){
    response.render("index.hbs");
});
app.get("/add", function(request, response){
    response.render("add.hbs");
});

app.listen(3000);