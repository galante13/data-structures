const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function (line) {
    if (isNaN(line)) {
        console.log('Please provide a valid number!');
    }

    let array = [];

    for (let i = 0; i < line; i++) {
        array.push(i);
    }

    printArray('insert', array);
    array.splice(1, 2, 100, 111, 112);
    printArray('splice', array);

    printArray('push', array);

    array.pop();
    printArray('pop', array);

    array.unshift(1);
    printArray('unshift', array);

    array.shift();
    printArray('shift', array);
});

printArray = (executedAction, array) => console.log(executedAction + ': ', array);


class MyArray {
    constructor() {
        this.data = {};
        this.length = 0;
    }

    push(item) {
        this.data[this.length++] = item;
    }

    pop(){
        const item = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return item;
    }

    get(index) {
        return this.data[index];
    }

    delete(index) {
        const item = this.data[index];
        if(item) {
            this.shiftLeft(index);
        }
        return item;
    }

    shiftLeft(index) {
        if(index < this.length) {
            for(let i = index; i < this.length - 1; i++){
                this.data[i] = this.data[i + 1];
            }
            delete this.data[this.length - 1];
            this.length--;
        }
    }

    shift() {
        return this.delete(0);
    }

    unshift(item) {
        this.shiftRight(0);
        this.data[0] = item;
    }

    shiftRight(index) {
        for(let i = this.length; i > index; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.length++;
    }
}

const myArray = new MyArray();
myArray.push(0);
myArray.push(1);
myArray.push(2);
myArray.push(3);
myArray.push(4);
console.log(myArray.get(4));
console.log(myArray);
console.log(myArray.delete(4));
console.log(myArray.pop());
myArray.unshift('newFirst');
console.log(myArray);
console.log(myArray.shift());
console.log(myArray);
