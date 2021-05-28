class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack2 {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const node = new Node(value);
        if (this.length === 0) {
            this.bottom = node;
            this.top = node;
        } else {
            node.next = this.top;
            this.top = node;
        }
        this.length++;
    }

    pop() {
        if (this.length === 0) return this.top;
        const top = this.top;
        if (this.top.next) {
            this.top = this.top.next;
        } else {
            this.top = null;
            this.bottom = null;
        }
        this.length--;
        return top;
    }

    print() {
        console.log()
        console.log('PRINT')
        let node = this.top;
        while (node) {
            console.log(node.value);
            node = node.next;
        }
        console.log('PRINT SIZE ' + this.length)
        console.log()
    }
}

class Stack1 {
    constructor() {
        this.arr = [];
        this.length = 0;
    }

    peek() {
        if(this.length > 0){
            return this.arr[0];
        }

        return null;
    }

    push(value) {
        this.arr[this.length] = value;
        this.length++;
    }

    pop() {
        if(this.length === 0){
            return null;
        }
        const el = this.arr[this.length - 1];
        this.length--;
        return el;
    }

    print() {
        console.log()
        console.log('PRINT')
        for(let i = this.length - 1; i >= 0; i--){
            console.log(this.arr[i]);
        }
        console.log('PRINT SIZE ' + this.length)
        console.log()
    }
}

class Stack {
    constructor() {
        this.arr = [];
    }

    peek() {
       return this.arr[this.arr.length - 1];
    }

    push(value) {
        this.arr.push(value);
    }

    pop() {
        return this.arr.pop();
    }

    print() {
        console.log()
        console.log('PRINT')
        for(let i = this.arr.length - 1; i >= 0; i--){
            console.log(this.arr[i]);
        }
        console.log('PRINT SIZE ' + this.arr.length)
        console.log()
    }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

stack.print();

console.log(stack.pop());
stack.print();

console.log(stack.peek());
stack.print();

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
stack.print();
console.log(stack.peek());

stack.push(1);
stack.push(2);
stack.push(3);

stack.print();


