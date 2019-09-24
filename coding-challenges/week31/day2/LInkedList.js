class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
    toString() {
    return this.value;
    }

}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        let newNode = new Node(value);
        
        if(!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    prepend(value) {
        let newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

}    

module.exports = LinkedList;