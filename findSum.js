function findSum(array, sum) {
    if(!Array.isArray(array)) return false;
    if(isNaN(sum)) return false;
    let arrayOfIandJ = [];
    let found = new Set();

    for (let i = 0; i < array.length - 1; i++) {
        if(found.has(sum - array[i])) {
            arrayOfIandJ.push(new IandJ(array[i], sum - array[i]));
            found.delete(sum - array[i]);
        } else {
            found.add(array[i]);
        }
    }

    console.log(arrayOfIandJ);
}

function findSumSorted(array, sum) {
    if(!Array.isArray(array)) return false;
    if(isNaN(sum)) return false;
    let i = 0, j = array.length - 1;
    let arrayOfIandJ = [];

    while (i < j) {
        const checkSum = array[i] + array[j];
        if(checkSum == sum) {arrayOfIandJ.push(new IandJ(array[i], array[j])); i++; j--;}
        if(checkSum < sum) i++;
        if(checkSum > sum) j--;
    }

    console.log(arrayOfIandJ);
}

class IandJ {
    first;
    second;

    constructor(first, second) { this.first = first; this.second = second}

    // toString() { return `${this.i}, ${this.j}`};
}
console.log(findSum([1, 2, 3, 4, 4], 8),
findSum([1, 4, 3, 4, 2], 14),
findSum([1, 2, 3, 0, 4], 1),
findSum([4, 2, 3, 1, 4], 3),
findSum([1, 56, 3, 4, 56, 5, 6, 56, 111, 56, 56, 56, 56, 42131], 112),
findSum([2, 3, 4, 4, 5, 6, 111, 42131], null)
);

