class Heap {
    constructor(compareFunction) {
        this.array = [];

        this.compare = compareFunction;
    }
    //Heap function
    add(item) {
        this.array.push(item);
        this.heapifyUp();
    }
    find(item) {
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] == item) {
                return i;
            }
        }
    }
    remove(item) {
        let itemToRemove = this.find(item);
        if (itemToRemove === -1) { return null; }

        //Delete last element
        if (itemToRemove === this.array.length - 1) {
            return this.array.pop();
        }
 // delete mid elements
        this.array[itemToRemove] = this.array.pop();

        let parent = this.getParent(itemToRemove);
        
        if (this.hasLeftChild(itemToRemove) && !parent || this.compare(parent, this.array[itemToRemove])) {
            this.heapifyDown(itemToRemove);
        }
        else {
            this.heapifyUp(itemToRemove);
        }
    }
    heapifyUp(index) {
        let currentIndex = index || this.array.length - 1 ;

        while(this.hasParent(currentIndex) && !this.compare(this.getParent(currentIndex),  this.array[currentIndex]) ) {
            this.swap( this.getParentIndex(currentIndex), currentIndex);

            currentIndex = this.getParentIndex(currentIndex);
        }
    }
    heapifyDown(index = 0) {
        let currentIndex = index;
        while(this.hasLeftChild(currentIndex)) {

            let smallestChileIndex = this.getLeftChildIndex(currentIndex);

            if (this.hasRightChild(currentIndex) && this.compare(this.getRightChild(currentIndex), this.getLeftChild(currentIndex))) {
                smallestChileIndex = this.getRightChildIndex(currentIndex);
            }

            if (this.compare(this.array[currentIndex],  this.array[smallestChileIndex])) { 
                break;
            }
            else {
                this.swap(currentIndex, smallestChileIndex);
            }

            currentIndex = smallestChileIndex;
        }
    }
 //Utility functions
 getLeftChildIndex(parentIndex) {
     return (2 * parentIndex) +1 ;
 }
 getRightChildIndex(parentIndex) {
     return (2 * parentIndex) +2 ;
 }
 getParentIndex(childIndex) {
     return Math.floor( (childIndex - 1) / 2);
 }

 getLeftChild(parentIndex) {
     return this.array[this.getLeftChildIndex(parentIndex)];
 }
 getRightChild(parentIndex) {
    return this.array[this.getRightChildIndex(parentIndex)];
 }
 getParent(childIndex) {
     return this.array[this.getParentIndex(childIndex)];
 }

 hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0;
 }
 hasLeftChild(parentIndex) {
     return this.getLeftChildIndex(parentIndex) < this.array.length;
 }
 hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.array.length;
 }
 
 swap(indexOne, indexTwo) {
     let temp = this.array[indexOne];
     this.array[indexOne] = this.array[indexTwo];
     this.array[indexTwo] = temp;
 }
 print() {
        console.log(this.array);
    }
}

class MinHeap extends Heap {
    constructor() {
        let compare = function(a,b){
            return a < b;
        }
        super(compare);
    }
}

let h = new MinHeap();

for( let i = 0; i <= 5; i++) {
    let item = Math.floor(Math.random() * 10);
    console.log(item);
    h.add(item);
}
h.print();
console.log(h.find(5));
console.log(h.remove(2));
h.print();