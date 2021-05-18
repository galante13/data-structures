function maxSubArray(nums) {
    let sums = [];
    for (let i = nums.length; i > 0; i--) {
        for (let j = 0; j <= nums.length - i; j++) {
            let sum = 0;
            for (let k = j; k < i + j; k++) {
                sum += nums[k];
            }
            sums.push(sum);
            sum = 0;
        }
    }
    return Math.max.apply(null, sums);
}

function maxSubArray2(nums) {
    let largestSum = nums[0];
    let currentSum = 0;
    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        if (largestSum < currentSum) {
            largestSum = currentSum;
        }

        if(currentSum < 0) {
            currentSum = 0;
        }
    }

    return largestSum;
}

const fun = maxSubArray2;

console.log(fun([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(fun([5, 4, -1, 7, 8]));
console.log(fun([-5, 4, -2, -3, 0]));
