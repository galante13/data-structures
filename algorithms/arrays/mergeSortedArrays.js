function mergeSortedArrays(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return [];
    }

    let greaterArray, shorterArray;
    let result = [];
    let i = 0;

    if (arr1.length > arr2.length) {
        greaterArray = arr1;
        shorterArray = arr2;
    } else {
        greaterArray = arr2;
        shorterArray = arr1;
    }

    for (; i < shorterArray.length; i++) {
        if (shorterArray[i] < greaterArray[i]) {
            result.push(shorterArray[i]);
            result.push(greaterArray[i]);
        } else {
            result.push(greaterArray[i]);
            result.push(shorterArray[i]);
        }

        if (result[result.length - 3] > result[result.length - 2]) {
            swap(result, result.length - 3, result.length - 2);
        }
    }

    for (; i < greaterArray.length; i++) {
        result.push(greaterArray[i]);
        if (result[result.length - 2] > result[result.length - 1]) {
            swap(result, result.length - 2, result.length - 1);
        }
    }

    return result;
}

function mergeSortedArrays2(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return [];
    }

    let result = [];

    while (arr1.length > 0 || arr2.length > 0) {
        if (arr1.length > 0) {
            result.push(arr1.shift());
        }
        if (arr2.length > 0) {
            result.push(arr2.shift());
        }
        if (result[result.length - 3] > result[result.length - 2]) {
            swap(result, result.length - 3, result.length - 2);
        }
        if (result[result.length - 2] > result[result.length - 1]) {
            swap(result, result.length - 2, result.length - 1);
        }
    }

    return result;
}

function mergeSortedArrays3(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return [];
    }

    let result = [];
    let i = 0;

    while (i < arr1.length || i < arr2.length) {
        if (i < arr1.length) {
            result.push(arr1[i]);
        }
        if (i < arr2.length) {
            result.push(arr2[i]);
        }
        if (result[result.length - 3] > result[result.length - 2]) {
            swap(result, result.length - 3, result.length - 2);
        }
        if (result[result.length - 2] > result[result.length - 1]) {
            swap(result, result.length - 2, result.length - 1);
        }
        i++;
    }

    return result;
}

function mergeSortedArrays4(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return [];
    }

    if (arr1.length === 0) {
        return arr2;
    }
    if (arr2.length === 0) {
        return arr1;
    }

    let array1Item = arr1[0];
    let array2Item = arr2[0];

    let i = 1;
    let j = 1;

    let result = [];

    while (true) {
        if ((array1Item !== undefined && array2Item === undefined) || array1Item <= array2Item) {
            result.push(array1Item);
            array1Item = arr1[i];
            i++;
        } else if ((array2Item !== undefined && array1Item === undefined) || array2Item <= array1Item) {
            result.push(array2Item);
            array2Item = arr2[j];
            j++;
        } else {
            break;
        }
    }

    return result;
}

function swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}


const merge = mergeSortedArrays4;
console.log(merge([0, 3, 4, 31], [4, 6, 30]));
console.log(merge([0, 3, 4, 1000], [4, 5, 6, 31, 31, 32, 34, 35, 37]));
console.log(merge([4, 5, 6, 31, 31, 32, 34, 35, 37], [0, 3, 4, 1000]));
console.log(merge(null, [4, 5, 6, 31, 31, 32, 34, 35, 37]));
console.log(merge([0, 3, 4, 1000], null));
console.log(merge([0, 3, 4, 1000], undefined));
console.log(merge(undefined, [4, 5, 6, 31, 31, 32, 34, 35, 37]));


