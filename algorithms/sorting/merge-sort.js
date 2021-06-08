const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
    if (array.length === 1) {
        return array
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge2(left, right) {
    let result = [];
    while (left.length > 0 || right.length > 0) {
        if (!left.length) {
            result.push(right.shift());
        } else if (!right.length) {
            result.push(left.shift());
        } else if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    return result;
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
       if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    if(i < left.length) {
        result = result.concat(left.slice(i));
    }
    else if(j < right.length) {
        result = result.concat(right.slice(j));
    }
    return result;
}


const answer = mergeSort(numbers);
console.log(answer);
