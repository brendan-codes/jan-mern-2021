//Daniel Havenss, Dakota Newman,Ling X, Viktram Malhotra

// https://leetcode.com/problems/two-sum/
const twoSums = (nums, target) => {
    let results = [];
    let idx1 = 0;
    let idx2 = 1;
     while (idx1 !== nums.length) {
       if (nums[idx1] + nums[idx2] === target) {
         results.push(idx1);
         results.push(idx2);
         return results;
       }
       else if (idx2 === nums.length){
         idx1++;
         idx2 = idx1 + 1;
       }
       else {
         idx2++;
       }
     }

  twoSums([11, 2,  15, 7],9)

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
