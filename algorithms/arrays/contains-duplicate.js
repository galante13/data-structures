function containsDuplicate2(nums) {
    if(!Array.isArray(nums)) {
        return;
    }

    const set = new Set();

    for(let i = 0; i < nums.length; i++) {
        if(set.has(nums[i]))
            return true;
        else
            set.add(nums[i]);
    }

    return false;
}

function containsDuplicate(nums) {
    if(!Array.isArray(nums)) {
        return false;
    }

    const set = {};

    for(let i = 0; i < nums.length; i++) {
        if(set[nums[i]] === 1)
            return true;
        else
            set[nums[i]] = 1;
    }

    return false;
}

const fun = containsDuplicate;
console.log(fun([1,2,3,1]));
console.log(fun([1,2,3,4]));
console.log(fun([1,1,1,3,3,4,3,2,4,2]));
