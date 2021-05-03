function checkCommons(array1, array2) {
    if(!Array.isArray(array1) || !Array.isArray(array2)) {
        return false;
    }

    if(array1.length == 0 || array2.length == 0) {
        return false;
    }

    if(array1.length > array2.length) {
        return oneLinerCheck(array1, array2);
    } else {
        return oneLinerCheck(array2, array1);
    }
}

function doTheCheck(largerArray, smallerArray) {
    const setOfLargerArray = new Set(largerArray);
    console.log(setOfLargerArray);
    for(let i = 0; i < smallerArray.length; i++) {
        if(setOfLargerArray.has(smallerArray[i])) {
            return true;
        }
    }

    return false;
}

function doTheCheckOldES(largerArray, smallerArray) {
    const mapOfArray = mapToArray(largerArray);
    console.log(mapOfArray);
    for(let i = 0; i < smallerArray.length; i++) {
        if(mapOfArray[smallerArray[i]]) {
            return true;
        }
    }

    return false;
}

function oneLinerCheck(array1, array2) {
    return array1.some(item => array2.includes(item));
}

function mapToArray(array) {
    let map = {};
    for(let i = 0; i < array.length; i++) {
        if(!map[array[i]]) {
            map[array[i]] = true;
        }
    }
    return map;
}

console.log(
    checkCommons([1, 2, 3, 4], [5, 4, 4, 1]),
    checkCommons([1, 2, 3, 4], [5, '4', 0, 11]),
    checkCommons([1, 7, 3, 4], [5, 4, 11, 10]),
    checkCommons(['a', 'b', 'c', 'd'], ['x', 'a', 4, 10]),
    checkCommons(['a', 'b', 'c', 'd'], ['x', 'f', 4, 10]),
    checkCommons(['a', 'b', 'c', 'd'], 0),
    checkCommons(['a', 'b', 'c', 'd'], null),
    checkCommons(['a', 'b', 'c', 'd'], undefined),
    )
