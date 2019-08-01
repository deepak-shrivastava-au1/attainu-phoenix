
const fs = require("fs");

function search(fileName, searchWord) {
    fs.readFile(fileName, "utf-8", (err, data) => {
        if(err) { return console.log("Failed to read-->", fileName ); }

        data = data.split("\n");
        for(let i = 0; i < data.length; i++) {
            if(data[i].includes(searchWord)) {
                if(!data[i]){ continue;}
                console.log("Line Number: ", i+1, data[i]);
            }
        }
    })
}

function main(){
    if(process.argv.length !== 4) {
        console.log("i need a file name and string to search!");
        return;
    }
    let fileName = process.argv[2];
    let searchWord = process.argv[3];
    
    search(fileName, searchWord);

}

main();