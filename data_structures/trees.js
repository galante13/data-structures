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

    breadthFirstSearch() {
        let result = [];
        let queue = [this.root];
        while(queue.length > 0) {
            let currentNode = queue.shift();
            result.push(currentNode);

            if(currentNode.left != null) {
                queue.push(currentNode.left);
            }

            if(currentNode.right != null) {
                queue.push(currentNode.right);
            }
        }
        return result.map(m => m.value);
    }

    breadthFirstSearchRecursive(queue, result) {
        if(!queue.length) {
            return result;
        }
        let currentNode = queue.shift();
        result.push(currentNode);

        if(currentNode.left != null) {
            queue.push(currentNode.left);
        }

        if(currentNode.right != null) {
            queue.push(currentNode.right);
        }
        return this.breadthFirstSearchRecursive(queue, result);
    }

    traverseInOrder(node, result) {
        if(node.left) {
            this.traverseInOrder(node.left, result);
        }

        result.push(node);

        if(node.right) {
            this.traverseInOrder(node.right, result);
        }

        return result;
    }

    traversePreOrder(node, result) {
        result.push(node);
        if(node.left) {
            this.traversePreOrder(node.left, result);
        }
        if(node.right) {
            this.traversePreOrder(node.right, result);
        }

        return result;
    }

    traversePostOrder(node, result) {
        if(node.left) {
            this.traversePostOrder(node.left, result);
        }
        if(node.right) {
            this.traversePostOrder(node.right, result);
        }
        result.push(node);
        return result;
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

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log(tree.lookup(21));
console.log(tree.lookup(1));
console.log(tree.lookup(11));
console.log(tree.lookup(111));

tree.traverse(tree.root);
console.log(tree.breadthFirstSearch());
console.log(tree.breadthFirstSearchRecursive([tree.root], []).map(v => v.value));
console.log(tree.traverseInOrder(tree.root, []).map(v => v.value));
console.log(tree.traversePreOrder(tree.root, []).map(v => v.value));
console.log(tree.traversePostOrder(tree.root, []).map(v => v.value));
