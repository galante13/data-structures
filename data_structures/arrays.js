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
    array.splice(1, 2, 100,111, 112);
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
