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

    search(value) {
        let currentNode = this.head;
        while(currentNode) {
            if(currentNode.value == value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    toArray() {
        let node = [];
        let currentNode = this.head;

        while(currentNode) {
            node.push(currentNode);
            currentNode = currentNode.next;
        }
        return node;
    }

    print() {
        let currentNode = this.head,
        values = [];
        while(currentNode) {
            values.push(currentNode.value);
            currentNode = currentNode.next;
            }
            console.log(values);
    } 

    delete(valueToDelete) {
        if (!this.head) { return null;}
        // if head is to be deleted
        if (this.head.value === valueToDelete) {
            this.head = this.head.next;
            return;
        }
        
        // if any middle node is to be deleted.
        let currentNode = this.head;
        while(currentNode.next) {
            if (currentNode.next.value === valueToDelete) {
                currentNode.next = currentNode.next.next;
                break;
            }
            currentNode = currentNode.next;
        }
         // if tail is to be deleted
         if(this.tail.value === valueToDelete) {
            this.tail = currentNode;
         }
    }

}
module.exports = LinkedList;