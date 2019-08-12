class stack {
    constructor() {
        this.arr = [];
        this.count = 0;
    }

    push(item){
        this.arr.push(item);
        this.count = this.count+1;
    }
    pop() {
        if(this.count>0) {
           this.arr.pop();
            this.count = this.count-1;
        }
        else (
            console.log("Stack is empty")
        )
    }
    print() {
        let stack = this.arr;
        console.log(stack);
    }
}


const obj = new stack();

obj.push(5);
obj.push(10);
obj.push(8);
obj.push(7);
obj.print();



obj.pop();
obj.pop();
obj.print();
obj.pop();
obj.pop();
obj.pop();
obj.print();


