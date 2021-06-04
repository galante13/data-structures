class Element {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    #data = [];

    enqueue(value, priority) {
        let hasAdded = false;
        const newElement = new Element(value, priority);
        for(let i = 0; i < this.#data.length; i++) {
            if(this.#data[i].priority > priority) {
                this.#data.splice(i, 0, newElement);
                hasAdded = true;
                break;
            }
        }

        if(!hasAdded) {
            this.#data.push(newElement);
        }
    }

    dequeue() {
        return this.#data.shift();
    }

    print() {
        console.log(this.#data);
    }
}

const queue = new PriorityQueue();

queue.enqueue(1, 7);
queue.enqueue(33, 3);
queue.enqueue(33, 2);
queue.enqueue(33, 10);
queue.enqueue(33, 11);
queue.enqueue(33, 9);
queue.enqueue(33, 1);
queue.enqueue(33, 4);

queue.print();

queue.dequeue();
queue.dequeue();

queue.print();
