const LinkedList = require ("./linkedList");

class HashTable {
    constructor(size = 32) {
        this.size = size;
        this.array = [];
        for (let i = 0; i <= size; i++) {
            this.array.push( new LinkedList());
        }

    }

    hash(key) {
      let sum = 0;
      Array.from(key).forEach(char => sum += char.charCodeAt(0));
      return sum % this.size;
    }

    getList(key) {
        let hashId = this.hash(key);
        return this.array[hashId];
    }
    set(key, value) {
       let linkedList = this.getList(key);

        let node = linkedList.search(key);

        if(node) {
            node.data = value;
        }
        else {
            linkedList.append(key, value);
        }
    }
    get(key) {
        let linkedList = this.getList(key);

        let node = linkedList.search(key);

        if(node) {
            return node.data;
        }
        else {
            return null;
        }
    }
    delete(key) {
        let linkedList = this.getList(key);
        linkedList.delete(key);
    }
    print() {
        this.array.forEach(e => e.print());
    }
}

let h = new HashTable(8);
h.set("Instructor", "Ansal");
h.set("Student", "Deepak");
h.set("Founder", "Divyam");
h.set("CBO", "Promod");
h.set("Counsellor", "Vaibhav");
h.print();

console.log(h.get("Student"));

h.delete("CBO");
h.print();