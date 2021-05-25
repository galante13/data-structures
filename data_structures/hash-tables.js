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
}

const myHashTable = new HashTable(1);
myHashTable.set('grapes', 10000)
console.log(myHashTable);
console.log(myHashTable.get('grapes'));
myHashTable.set('apples', 9)
console.log(myHashTable);
console.log(myHashTable.get('apples'));
