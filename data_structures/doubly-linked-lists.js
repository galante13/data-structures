class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.size = 1;
    }

    append(value) {
        const node = new Node(value);
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
        this.size++;
    }

    prepend(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
        this.size++;
    }

    delete(value) {
        if(this.head.value === value) {
            this.head = this.head.next;
            this.head.prev = null;
            this.size--;
            return;
        }

        let node = this.head;
        while(node != null) {
            if(node.value === value) {
                let next = node.next;
                let prev = node.prev;
                prev.next = next;
                if(next) {
                    next.prev = prev;
                } else {
                    this.tail = prev;
                }
                this.size--;
            }
            node = node.next;
        }
    }

    search(value) {
        if(this.head.value === value) {
            return this.head;
        }

        let node = this.head;
        while(node != null) {
            if(node.value === value) {
                return node;
            }
            node = node.next;
        }
    }

    insert(index, value) {
        if(index < 0) {
            return undefined;
        }

        if(index >= this.size) {
            return undefined;
        }

        const newNode = new Node(value);
        if(index === 0) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            this.size++;
            return;
        }

        const prev = this.traverseToIndex(index - 1);
        newNode.prev = prev;
        newNode.next = prev.next;
        prev.next = newNode;
        newNode.next.prev = newNode;
        this.size++;
    }

    remove(index) {
        if(index < 0) {
            return undefined;
        }

        if(index >= this.size) {
            return undefined;
        }

        if(index === 0) {
            this.head = this.head.next;
            this.head.prev = null;
            this.size--;
            return;
        }

        const prev = this.traverseToIndex(index - 1);
        const next = prev.next.next;
        if(next) {
            next.prev = prev;
        } else {
            this.tail = prev;
        }
        prev.next = next;
        this.size--;
    }

    get(index) {
        if (index > (this.size - 1)) {
            return this.traverseToIndexBackwards(index);
        } else {
            return this.traverseToIndex(index);
        }
    }

    traverseToIndex(index) {
        let node = this.head;
        if (index === 0) {
            return node;
        }
        if (index === this.size - 1) {
            return this.tail;
        }
        while (index--) {
            node = node.next;
        }
        return node;
    }

    traverseToIndexBackwards(index) {
        let node = this.tail;
        if (index === 0) {
            return this.head;
        }
        if (index === this.size - 1) {
            return node;
        }
        while (index--) {
            node = node.prev;
        }
        return node;
    }

    reverse() {
        if(this.size > 1) {
            let prev = this.head;
            let node = this.head.next;
            while(node) {
                const temp = node.next;
                node.next = prev;
                prev.prev = node;
                prev = node;
                node = temp;
            }
            this.tail = this.head;
            this.head = prev;
            this.head.prev = null;
            this.tail.next = null;
        }
    }

    print() {
        let head = this.head;
        while(head != null) {
            console.log(head.value);
            head = head.next;
        }
    }

    printBackwards() {
        let node = this.tail;
        while(node != null) {
            console.log(node.value);
            node = node.prev;
        }
    }

}


class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

const list = new DoublyLinkedList(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.print();
list.printBackwards();

console.log();
console.log('size: ' + list.size);
list.delete(3);
list.print();
list.printBackwards();

console.log();
console.log('size: ' + list.size);
console.log();

console.log(list.search(3));
console.log(list.search(1));

console.log();
list.prepend(0);
list.print()
list.printBackwards();
console.log('size: ' + list.size);

console.log();
list.insert(3, 3);
list.print()
list.printBackwards();
console.log('size: ' + list.size);

console.log();
list.insert(3, 10);
list.print()
list.printBackwards();
console.log('size: ' + list.size);

console.log();
list.insert(0, -1);
list.print()
list.printBackwards();
console.log('size: ' + list.size);

console.log();
list.delete( -1);
list.print()
list.printBackwards();
console.log('size: ' + list.size);

console.log();
list.remove( 0);
list.print()
list.printBackwards();
console.log('size: ' + list.size);

console.log();
list.remove( 1);
list.print()
list.printBackwards();
console.log('size: ' + list.size);

console.log();
list.remove( list.size - 1);
list.print()
list.printBackwards();
console.log('size: ' + list.size);

console.log();
list.delete( 4);
list.print()
list.printBackwards();
console.log('size: ' + list.size);

console.log();
console.log(list.get(0));
console.log(list.get(2));

console.log();
list.reverse( );
list.print()
list.printBackwards()
console.log('size: ' + list.size);

