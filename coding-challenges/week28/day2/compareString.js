const s1 = require("./linkedList");
const s2 = require("./linkedlist2");


class CompareString {
    constructor(size) {
        this.array1 = [];
        this.array2 = [];
        for (let i = 0; i <= size; i++) {
            this.array1.push( new s1());
        }
        for (let i = 0; i <= size; i++) {
            this.array2.push( new s2());
        }

    }
    print() {
        let count1 = 0;
        let count2 = 0;
        for(let i = 0; i < this.array1.length; i++) {
            if(this.array1[i] === this.array2[i]) {
                count1 += 1;
            }
            else {
                count2 += 1;
            }
        }
        if(count1 === this.array1.length) {
            console.log("Both array r equal");
        }
        else {
            console.log("Arrays r not equal");
        }
    }
}

let c = new CompareString();
c.print();
