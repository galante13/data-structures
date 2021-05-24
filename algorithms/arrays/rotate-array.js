const utils = require('../../utils/array-utils');

function rotate2(nums, k) {
    if (!Array.isArray(nums)) {
        return;
    }

    let newIndex = 0;
    let newArray = [];
    for (let i = 0; i < nums.length; i++) {
        newIndex = i + k;
        while (newIndex > nums.length - 1) {
            newIndex = newIndex - nums.length;
        }
        newArray[newIndex] = nums[i];
    }

    return newArray;
}

function rotate3(nums, k) {
    if (!Array.isArray(nums)) {
        return;
    }

    while (k--) {
        nums.unshift(nums.pop());
    }

    return nums;
}

function rotate(nums, k) {
    if (!Array.isArray(nums)) {
        return;
    }

    if(nums.length === 0 || nums.length === 1) {
        return nums;
    }

    k = k % nums.length;

    utils.reverse(nums, 0, nums.length - 1);
    utils.reverse(nums, 0, k - 1);
    utils.reverse(nums, k, nums.length - 1);

    return nums;
}

function shiftRight(nums, k) {
    for (let i = k; i < nums.length - 1; i++) {
        utils.swap(nums, k, k + 1);
    }
}

function rotateStep(nums, left, right) {
    for (let i = 0; i < right; i++) {
        utils.swap(nums, i + left, right);
    }
}


const fun = rotate;
console.log(fun([1,2,3,4,5,6,7], 3));
console.log(fun([1], 0));
console.log(fun([1, 2, 3], 4));
console.log(fun([-1,-100,3,99], 2));
