const utils = require('../../utils/array-utils');

function insertionSort(arr) {
    if (!Array.isArray(arr)) {
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[i]) {
                for (let k = i; k > j; k--) {
                    utils.swap(arr, k, k - 1);
                }
            }
        }
    }
    return arr;
}

function insertionSort2(arr) {
    if (!Array.isArray(arr)) {
        return;
    }
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        let j = i - 1;
        for (; j >= 0 && arr[j] > temp; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }
    return arr;
}

console.log(insertionSort2([1, 2, 3, 4, 5]));
console.log(insertionSort2([1, -2, 33, 4, 5]));
console.log(insertionSort2([17, 0, 1, 2, 33, 4, 5]));
