class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue2 {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const node = new Node(value);
        if(this.length === 0) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }

        this.length++;
    }

    dequeue() {
        if(this.length === 0){
            return null;
        }


        let first = this.first;
        this.first = this.first.next;
        this.length--;
        if(this.length === 0) {
            this.last = null;
        }
        return first;
    }

    print() {
        console.log()
        console.log('PRINT')
        let node = this.first;
        while (node) {
            console.log(node.value);
            node = node.next;
        }
        console.log('PRINT SIZE ' + this.length)
        console.log()
    }
}

class Queue {
    constructor() {
        this.dequeueStack = new Stack();
        this.enqueueStack = new Stack();
    }

    peek() {
        if(this.enqueueStack.length > 0) {
            return this.enqueueStack.peek();
        }
        return this.enqueueStack.peek();
    }

    enqueue(value) {
        const length = this.dequeueStack.length;
        for(let i = 0; i < length; i++) {
            this.enqueueStack.push(this.dequeueStack.pop());
        }

        this.enqueueStack.push(value);
    }

    dequeue() {
        const length = this.enqueueStack.length;
        for(let i = 0; i < length; i++) {
            this.dequeueStack.push(this.enqueueStack.pop());
        }

        return this.dequeueStack.pop();
    }

    print() {
        const length = this.enqueueStack.length;
        for(let i = 0; i < length; i++) {
            this.dequeueStack.push(this.enqueueStack.pop());
        }
        this.dequeueStack.print();
    }
}

class Stack {
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
        if (this.length === 1) {
            this.bottom = null;
        }

        this.top = this.top.next;
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


const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.print();

console.log(queue.dequeue());

queue.print();

console.log(queue.dequeue());
console.log(queue.dequeue());
queue.print();

console.log(queue.dequeue());
console.log(queue.peek());
queue.print();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print();


