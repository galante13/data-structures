const utils = require('../../utils/array-utils');
function moveZeroes2(nums) {
    if(!Array.isArray(nums)) {
        return;
    }

   for(let i = 0; i < nums.length - 1; i++) {
       if(nums[i] === 0) {
           for(let j = i; j < nums.length - 1; j++) {
              utils.swap(nums, j, j + 1);
           }
       }

   }

    return nums;
}

function moveZeroes(nums) {
    if(!Array.isArray(nums)) {
        return;
    }
    let zeroCounter = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == 0) {
            zeroCounter++;
        } else {
            utils.swap(nums, i - zeroCounter, i);
        }
    }
    return nums;
}

const fun = moveZeroes;
console.log(fun([0,1,0,3,12]));
