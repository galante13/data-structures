function findRecurringCharacter2(arr) {
    if(!Array.isArray(arr)) return;
    const set = new Set();

    for(let i = 0; i < arr.length; i++) {
        if(set.has(arr[i])) {
            return arr[i];
        }

        set.add(arr[i]);
    }

    return undefined;
}

function findRecurringCharacter(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if(input[i] === input[j]) {
                return input[i];
            }
        }
    }
    return undefined;
}

const fun = findRecurringCharacter;
console.log(fun([2, 3, 3, 1, 2]));
console.log(fun([2, 0, 11, 1, -2]));
console.log(fun([2, 2, 2, 2, -2]));
