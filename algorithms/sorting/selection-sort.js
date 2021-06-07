const utils = require('../../utils/array-utils');

function selectionSort(arr) {
    if(!Array.isArray(arr)) return;
    for(let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        utils.swap(arr, i, minIndex);
    }

    return arr;
}

console.log(selectionSort([1, 2, 3, 4, 5]));
console.log(selectionSort([1, -2, 33, 4, 5]));
console.log(selectionSort([17, 0, 1, 2, 33, 4, 5]));
