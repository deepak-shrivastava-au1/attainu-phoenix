'use strict'

class MySet{
    constructor(...elements){
        this.set = new Set(elements);
    }
    print(){
        this.set.forEach(function(a){
            console.log(a)
        });
    }
    search(element){
        return this.set.has(element);
    }

    
}
let mySet = new MySet(1,2,2,2,3,4,5);
mySet.print();
console.log(mySet.search(2));
console.log(mySet.search(79));
