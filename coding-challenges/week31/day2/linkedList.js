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

    print() {
        let currentNode = this.head,
        values = [];
        while(currentNode) {
            values.push(currentNode.value);
            currentNode = currentNode.next;
            }
            console.log(values);

            let total = values.length;
            let middle = 0;
            if(total % 2 == 0) {
                middle = Math.floor((total - 1) / 2);
                console.log(values[middle], "and", values[middle + 1]);
            }
            else {
                middle = Math.floor(total / 2);
                console.log(values[middle]);
            }
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

let l = new LinkedList(); 
l.append("Banglore");
l.append("Chennai");
l.append("Varanasi");
l.append("Mumbai");

l.prepend("Orian Mall");
l.prepend("Marina Beach");
l.prepend("Sarnath");
l.prepend("Local Train");
console.log("Middle of even");

l.print();

console.log("Middle of odd");
//l.delete("Local Train");
l.delete("Mumbai"); 
l.print();

//console.log(l.search("Varanasi"));
//console.log(l.search("Sarnath"));