const linkedLists = require('./linked-lists');

class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    se2(key, value) {
        const address = this._hash(key);

        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
    }

    set(key, value) {
        const address = this._hash(key);

        if (!this.data[address]) {
            this.data[address] = new linkedLists.LinkedList({key, value});
        } else {
            this.data[address].append({key, value});
        }
    }

    get(key) {
        const bucket = this.data[this._hash(key)];
        if (bucket) {
            let node = bucket.head;
            while (node) {
                if (node.value.key === key) {
                    return node.value.value;
                }
                node = node.next;
            }
        }

        return undefined;
    }

    get2(key) {
        const bucket = this.data[this._hash(key)];
        if (bucket) {
            const val = bucket.filter(el => el[0] === key);
            if (val && val[0]) {
                return val[0][1];
            }
        }

        return undefined;
    }

    keys() {
        const keys = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                let node = this.data[i].head;
                while (node) {
                    keys.push(node.value.key);
                    node = node.next;
                }
            }
        }

        return keys;
    }

    keys2() {
        const keys = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                for (let j = 0; j < this.data[i].length; j++) {
                    keys.push(this.data[i][j][0]);
                }
            }
        }

        return keys;
    }

    values() {
        const values = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                let node = this.data[i].head;
                while (node) {
                    values.push(node.value.value);
                    node = node.next;
                }
            }
        }

        return values;
    }

    values2() {
        const values = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                for (let j = 0; j < this.data[i].length; j++) {
                    values.push(this.data[i][j][1]);
                }
            }
        }

        return values;
    }
}

const myHashTable = new HashTable(3);
myHashTable.set('grapes', 10000)
console.log(myHashTable);
console.log(myHashTable.get('grapes'));
myHashTable.set('apples', 9)
console.log(myHashTable);
console.log(myHashTable.get('apples'));
console.log(myHashTable.keys());
console.log(myHashTable.values());
