// https://leetcode.com/problems/two-sum/

const twoSums = (arr, target) => {
    var resultsArr = [];
    for(i=0; i<arr.length; i++){
        for(j=0; j<arr.length; j++){
            if(arr[i] + arr[j] == target){
            resultsArr.push(arr[i],arr[j]);
            return resultsArr;
            }
        }
    }
}
console.log(twoSums([2, 7, 11, 15], 9))

twoSums([2, 7, 11, 15], 9);

//alt way------------------------------------------------
const twoSums2 =(arr, target) => {
    let idx1 = 0;
    let idx2 = 1;
    let resultsArr = [];

    while(idx2 <= arr.length){
        if(arr[idx1] + arr[idx2] == target){
            resultsArr.push(arr[idx1],arr[idx2]);
            return resultsArr;
        }
        idx2++;

        if(idx2 == arr.length) {
            idx1++;
            idx2=idx1 +1;
        }
    }
}
console.log(twoSums2([2, 11, 7, 15], 9))
console.log(twoSums2([5,5,6], 10))

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