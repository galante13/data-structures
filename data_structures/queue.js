class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
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


