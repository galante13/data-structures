class Graph2 {
    #numberOfNodes = 0;
    #adjacentList = new Map();

    addVertex(node) {
        if (this.#adjacentList.has(node)) return;
        this.#adjacentList.set(node, []);
        this.#numberOfNodes++;
    }

    addEdge(node1, node2) {
        if (!this.#adjacentList.has(node1) || !this.#adjacentList.has(node1)) {
            return;
        }
        this.#adjacentList.get(node1).push(node2);
        this.#adjacentList.get(node2).push(node1);
    }

    showConnections() {
        for (let node of this.#adjacentList.keys()) {
            let nodeConnections = this.#adjacentList.get(node);
            let connections = "";
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + "-->" + connections);
        }
    }
}

class Graph {
    #numberOfNodes = 0;
    #adjacentList = {};

    addVertex(node) {
        if (this.#adjacentList[node]) return;
        this.#adjacentList[node] = [];
        this.#numberOfNodes++;
    }

    addEdge(node1, node2) {
        if (!this.#adjacentList[node1] || !this.#adjacentList[node2]) {
            return;
        }
        this.#adjacentList[node1].push(node2);
        this.#adjacentList[node2].push(node1);
    }

    showConnections() {
        const allNodes = Object.keys(this.#adjacentList);
        for (let node of allNodes) {
            let nodeConnections = this.#adjacentList[node];
            let connections = "";
            let vertex;
            for (vertex of nodeConnections) {
                connections += vertex + " ";
            }
            console.log(node + "-->" + connections);
        }
    }
}


const myGraph = new Graph2();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');

myGraph.showConnections();
