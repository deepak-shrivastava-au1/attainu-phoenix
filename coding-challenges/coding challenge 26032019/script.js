'use strict';

var fs = require("fs");

var messageWrite = (file, message, n) => {
fs.writeFile(file, message.repeat(n), function(err) {

    if(err) {
        console.log("error in writing file")
    }
    console.log("File Saved !");
});
};
messageWrite('hello.txt', 'Welcome to AttainU \"\n\" ,50);