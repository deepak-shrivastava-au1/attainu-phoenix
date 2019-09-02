class Node  {
    constructor(value = null) {
            this.left = null;
            this.right = null;
            this.parent = null;
            this.value = value;
    }

    setValue(value) {
        this.value = value;
    }
    setLeft(node) {
        if(this.left) {
        this.left.parent = null;
        }
        this.left = node;

        if(this.left) {
            this.left.parent = this;
        }
    }
    setRight(node) {
        if(this.right) {
            this.right.parent = null;
            }
            this.right = node;
    
            if(this.right) {
                this.right.parent = this;
            }
    }

    removeChild(nodeToDelete) {
        if(this.left && this.left.value === nodeToDelete) {
            this.left = null;
            return true;
        }

        if(this.right && this.right.value === nodeToDelete) {
            this.right = null;
            return true;
        }

        return false;
    }

    replaceChild(nodeToReplace, replacementNode) {
        if(!nodeToReplace || !replacementNode) { return false;}

        if(this.left && this.left.value === nodeToReplace.value) {
            this.left = replacementNode;
            return true;
        }

        if(this.right && this.right.value === nodeToReplace.value) {
            this.right = replacementNode;
            return true;
        }
        return false;
    }

    static copyNode(source, target) {
        target.setValue(source, value);
        target.setLeft(source.left);
        target.setRight(source.right);
    }

    find(value) {
        if(this.value == value) {
            return this;
        }

        if(value < this.value && this.left) {
            return  this.left.find(value);
        }

        if(value > this.value && this.right) {
            return  this.right.find(value);
        }

        return null;
    }

    findMin() {
        if (!this.left) {
            return this;
        }

        return this.left.findMin();
    }

    remove(value) {
        let nodeToDelete = this.find(value);

        if(!nodeToDelete) { return null;}

        let parent = nodeToDelete.parent;

        if(!nodeToDelete.left && !nodeToDelete.right) {
            if(parent) {
                parent.removeChild(nodeToDelete);
            }
            else{
                nodeToDelete.value = null; 
            }
        }
        else if(nodeToDelete.left && nodeToDelete.right) {
            let nextNode = nodeToDelete.findMin();
            if(nextNode === nodeToDelete.right) {
                this.remove(nextNode.value);
                nodeToDelete.setValue(nextNode.value);
            }
            else {
                nodeToDelete.setValue(nodeToDelete.right.value);
                nodeToDelete.setValue(nodeToDelete.right.right);
            }
        }
        else {
            let childNode = nodeToDelete.left || nodeToDelete.right ;

            if(parent) {
                parent.replaceChild(nodeToDelete, childNode);
            }
            else {
                Node.copyNode(childNode, nodeToDelete);
            }
        }

        nodeToDelete.parent = null;

        return true;
    }

    insert(value) {

        if(!this.value) {
            this.value = value;
            return; 
        }
        if(value <= this.value) {

            if(this.left) {
                return this.left.insert(value);
            }
            else {
                this.left = new Node(value);  
                this.left.parent = this;  
            }
            
        }
        else {
            if(this.right) {
                return this.right.insert(value);
            }
            else {
                this.right = new Node(value);   
                this.right.parent = this; 
            }

        }

    }

    printInOrder() {
        if(this.left) {
            this.left.printInOrder();
        }
        console.log(this.value);

        if(this.right) {
            this.right.printInOrder();
        }
    } 
}

class BinarySearchTree {
    constructor() {
        this.root = new Node();
    }

    insert(value) {
        this.root.insert(value);
    }

    printInOrder() {
        this.root.printInOrder();
    }

    find(value) {
        return this.root.find(value);
    }

    findMin() {
        return this.root.findMin();
    }

    remove(value) {
        return this.root.remove(value);
    }
}

let tree = new BinarySearchTree();  

tree.insert(100);
tree.insert(150);
tree.insert(50);
tree.insert(145);
tree.insert(40);
tree.insert(80);
tree.insert(20);
tree.printInOrder();

//console.log( tree.findMin(40) );
console.log("Deleting");
tree.remove(50);
tree.printInOrder();


