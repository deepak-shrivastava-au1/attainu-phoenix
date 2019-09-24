const LinkedList = require("./LInkedList");

class FindMiddle extends LinkedList {
    
    middle() {
        let currentNode = this.head,
        values = [];
        while(currentNode) {
            values.push(currentNode.value);
            currentNode = currentNode.next;
            }
            console.log(values);
            console.log("Middle  ---->");
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
}

let l = new FindMiddle();

l.append("Banglore");
l.append("Chennai");
l.append("Varanasi");
l.append("Mumbai");

l.prepend("Orian Mall");
l.prepend("Marina Beach");
l.prepend("Sarnath");
l.prepend("Local Train");

l.middle();
