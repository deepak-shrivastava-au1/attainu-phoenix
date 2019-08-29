const LinkedList = require("./linkedList");

class Queue extends LinkedList {
    enqueue(value) {
        this.append(value);
    }
    dequeue() {
        if (!this.head) { return null;}

        let removedValue = this.head.value;
        this.head = this.head.next;
        return removedValue;
    }
}


let q = new Queue();
q.enqueue(12);
q.print();

q.enqueue(100);
q.print();

q.enqueue(120);
q.print();

q.dequeue();
q.print();