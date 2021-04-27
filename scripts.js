class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    size() {
        let node = this.head;
        let counter = 0;
        while (node) {
            counter++;
            node = node.next
        }
        return counter
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let node = this.head;
        if (node) {
            while (node.next) {
                node = node.next
            }
        }
        return node;
    }

    clear() {
        this.head = null
    }
}

class LinkedNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const list = new LinkedList();
const node1 = new LinkedNode(1);
const node2 = new LinkedNode(2);
const node3 = new LinkedNode(3);
list.head = node1;
node1.next = node2;
node2.next = node3;

console.log(list.head.next.next.data);
console.log(list.size());
console.log(list.getLast().data);
console.log(list.getFirst().data);
console.log(list.clear());
console.log(list.size());

