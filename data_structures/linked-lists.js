class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.size = 1;
    }

    append(value) {
        this.tail.next = new Node(value);
        this.tail = this.tail.next;
        this.size++;
    }

    delete(value) {
        if(this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let prev = this.head;
        let next = this.head.next;
        while(next != null) {
            if(next.value === value) {
                prev.next = next.next;
                this.size--;
                return;
            }
            prev = next;
            next = next.next;
        }
    }

    remove(index) {
        if(index < 0) {
            return;
        }
        if(index >= this.size) {
            return;
        }
        if(index === 0) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let prev = this.traverseToIndex(index - 1);
        prev.next = prev.next.next;
        this.size--;
    }

    insert(index, value) {
        if(index === 0) {
           this.prepend(value);
            return;
        }
        if(index < 0) {
            return;
        }
        if(index >= this.size) {
            return;
        }
        let prev = this.traverseToIndex(index - 1);
        const newNode = new Node(value);
        newNode.next = prev.next;
        prev.next = newNode;

        this.size++;
    }

    prepend(value) {
        const newHead = new Node(value);
        newHead.next = this.head;
        this.head = newHead;
        this.size++;
    }

    search(value) {
        let head = this.head;
        while(head != null) {
            if(head.value === value){
                return head;
            }
            head = head.next;
        }

        return null;
    }

    traverseToIndex(index) {
        let node = this.head;
        if(index === 0) {
            return node;
        }
        while(index--) {
            node = node.next;
        }
        return node;
    }

    print() {
        let head = this.head;
        while(head != null) {
            console.log(head.value);
            head = head.next;
        }
    }

}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const list = new LinkedList(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.print();

console.log();
console.log('size: ' + list.size);
list.delete(3);
list.print();

console.log();
console.log('size: ' + list.size);
console.log();

console.log(list.search(3));
console.log(list.search(1));

console.log();
list.prepend(0);
list.print()
console.log('size: ' + list.size);

console.log();
list.insert(3, 3);
list.print()
console.log('size: ' + list.size);

console.log();
list.insert(3, 10);
list.print()
console.log('size: ' + list.size);

console.log();
list.insert(0, -1);
list.print()
console.log('size: ' + list.size);

console.log();
list.delete( -1);
list.print()
console.log('size: ' + list.size);

console.log();
list.remove( 0);
list.print()
console.log('size: ' + list.size);

console.log();
list.remove( 1);
list.print()
console.log('size: ' + list.size);

console.log();
list.remove( list.size - 1);
list.print()
console.log('size: ' + list.size);

console.log();
list.delete( 4);
list.print()
console.log('size: ' + list.size);




