const LinkedList = require("./linkedList");


class Stack extends LinkedList {
    push(value) {
        this.prepend(value);
    }

    pop() {

        if(!this.head) { return null; }
        let removedValue = this.head.value;
        this.head = this.head.next;
        return removedValue;
    }

}


let s = new Stack();

for (let i = 0; i < 5; i++) {
    s.push(Math.floor(Math.random() *100));
    s.print();
}

console.log(s.pop());
s.print();


