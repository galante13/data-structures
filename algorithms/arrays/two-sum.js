function twoSum(nums, target) {
    const dict = {};
    for(let i = 0; i < nums.length; i++) {
        if(dict[target - nums[i]] !== undefined){
            return [i, dict[target - nums[i]]];
        } else {
            dict[nums[i]] = i;
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));

