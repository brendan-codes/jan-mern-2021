// https://leetcode.com/problems/two-sum/

// https://leetcode.com/problems/two-sum/

const twoSums = (nums, target) => {
    // loop through nums with for loop
    // add each num with the first index and compare the result with target
    // if true return those 2 indexes
    let result = []
    // for(let i = 0; i < nums.length; i++){
    //     if((nums[i]+ nums[i+1])==target ){
    //         result.push(nums[i]);
    //         result.push(nums[i+1])
    //     }
    // }
    let i=0;
    let j=nums.length-1;
    while(i<nums.length && j<nums.length){
        if((nums[i]+nums[j])==target){
            result.push(nums[j]);

        }
        i++
        j--
    }

    return result
};

console.log(twoSums([4, 80, 5, 11],15))


// Given an array of integers, return indices of the
// two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// the array is unsorted, the integers are positive, no floats, and there may be duplicates

// [5, 5, 6]
// 10
// [0, 1]

// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
