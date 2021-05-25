class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i =0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, value) {
        const address = this._hash(key);

        if(!this.data[address]) {
            this.data[address] = [];
        }
        this.data[this._hash(key)].push([key, value]);
    }

    get(key) {
        const bucket = this.data[this._hash(key)];
        if(bucket) {
            const val = bucket.filter(el => el[0] === key);
            if(val && val[0]) {
                return val[0][1];
            }
        }

        return undefined;
    }

    keys() {
        const keys = [];
        for(let i = 0; i < this.data.length; i++) {
            if(this.data[i]) {
                for(let j = 0; j < this.data[i].length; j++) {
                    keys.push(this.data[i][j][0]);
                }
            }
        }

        return keys;
    }

    values() {
        const values = [];
        for(let i = 0; i < this.data.length; i++) {
            if(this.data[i]) {
                for(let j = 0; j < this.data[i].length; j++) {
                    values.push(this.data[i][j][1]);
                }
            }
        }

        return values;
    }
}

const myHashTable = new HashTable(1);
myHashTable.set('grapes', 10000)
console.log(myHashTable);
console.log(myHashTable.get('grapes'));
myHashTable.set('apples', 9)
console.log(myHashTable);
console.log(myHashTable.get('apples'));
console.log(myHashTable.keys());
console.log(myHashTable.values());
