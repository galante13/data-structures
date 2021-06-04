class Tree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let currentNode = this.root;
        const newNode = new Node(value);
        if (!currentNode) {
            this.root = newNode;
            return;
        }
        while (true) {
            if (currentNode.value === value) {
                currentNode.valueCounter++;
                return this;
            } else if (value < currentNode.value) {
                if (currentNode.left === null) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            } else {
                if (currentNode.right === null) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
    }

    lookup(value) {
        let currentNode = this.root;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            } else if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }

        return null;
    }

    traverse(startNode) {
        const nodeTextRepresentation = {value: startNode.value};
        if (startNode.left) {
            nodeTextRepresentation.left = startNode.left.value;
        }
        if (startNode.right) {
            nodeTextRepresentation.right = startNode.right.value;
        }

        console.log(nodeTextRepresentation);

        if (startNode.left) {
            this.traverse(startNode.left);
        }
        if (startNode.right) {
            this.traverse(startNode.right);
        }
    }
}

class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
        this.valueCounter = 1;
    }
}

const tree = new Tree();

tree.insert(24);
tree.insert(24);
tree.insert(10);
tree.insert(7);
tree.insert(3);
tree.insert(5);
tree.insert(11);
tree.insert(21);
tree.insert(1);
tree.insert(2);

console.log(tree.lookup(21));
console.log(tree.lookup(1));
console.log(tree.lookup(11));
console.log(tree.lookup(111));

tree.traverse(tree.root);
