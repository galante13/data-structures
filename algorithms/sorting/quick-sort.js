const utils = require('../../utils/array-utils.js');

function quickSort(arr, left, right) {
    let index;
    if (arr.length > 1) {
        index = partition(arr, left, right);
        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        }
        if (index < right) {
            quickSort(arr, index, right);
        }
    }
    return arr;
}

function partition(arr, left, right) {
    let pivot = Math.floor((left + right) / 2);
    let pivotValue = arr[pivot];
    while (left <= right) {
        while (arr[left] < pivotValue) {
            left++;
        }

        while (arr[right] > pivotValue) {
            right--;
        }

        if (left <= right) {
            utils.swap(arr, left, right);
            left++;
            right--;
        }
    }

    return left;
}

let arr = [9, 3, 7, 6, 2, 8];
console.log(quickSort(arr, 0, arr.length - 1));
