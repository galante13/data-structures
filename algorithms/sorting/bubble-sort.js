const utils = require('../../utils/array-utils');

function bubbleSort(arr) {
    if (!Array.isArray(arr)) {
        return;
    }

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                utils.swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

console.log(bubbleSort([1, 2, 3, 4, 5]));
console.log(bubbleSort([1, -2, 33, 4, 5]));
console.log(bubbleSort([17, 0, 1, 2, 33, 4, 5]));


