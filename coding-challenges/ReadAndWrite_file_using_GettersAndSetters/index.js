var fs = require('fs');

class Myfiles{
    constructor(fileName){
        this.fileName = fileName;
    }

    get data(){
        return fs.readFileSync(this.fileName, "utf-8");
    }

    set data(value){
        fs.writeFileSync(this.fileName, value, "utf-8", "w");

    }
}
let file = new Myfiles("Hello.txt");
file.data = "Hello World";
console.log(file.data);
file.data = "I am Deepak Shrivastava"
console.log(file.data);