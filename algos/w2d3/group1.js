// #1 Missing Value

// You are given an array with the length of n that contains in no order integers from 0 to n.
// The length of the array is n and the largest number is no bigger than n.

// Quickly determine and return the missing value.

// The short version: If I give you an array of 0-9 and it's missing a number, how do you find it?

// given [3, 0, 1]
// return 2

// given [5, 2, 7, 8, 4, 9, 3, 0, 1]
// return 6

function findMissingValue(arr) {
    for (i=0; i<arr.length; i++) {
        n = arr.includes(i);
        if (n == false) {
            return i;
        }
    }
}
console.log(findMissingValue([5,2,7,8,4,9,3,0,1]));


// #2 Min of Sorted-Rotated

// You are given an an array of integers with a length of up to 255 thousand.
// This array has first been sorted, then rotated by an unknown amount.

// Find and return the minimum value.

// Ninja Goal: Do this faster than 0(n) ie: find your answer without visiting every single element
// (think binary search)

// Given [17, 18, 3, 5, 6, 9, 10, 11, 12, 13]
// return 3

function minOfSorted(arr, low = 0, high = arr.length - 1) {
    let min = arr[0];
    let mid = Math.floor(arr.length / 2)
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);
    console.log(leftArr, rightArr);
    for (let i = 0; i < rightArr.length; i++) {
        console.log("Loops " + i)
        if (leftArr[i] < min) {
            min = leftArr[i];
            console.log(min);
        }
        // if (leftArr[i] > leftArr[i+1]) {
        //     return rightArr[i+1];
        // }
        if (rightArr[i] < min) {
            min = rightArr[i];
            console.log(min);
        }
        // if (rightArr[i] > rightArr[i+1]) {
        //     console.log(rightArr[i+1]);
        //     return rightArr[i+1];
        // }
    }
    // if (rightArr.length > leftArr.length) {
    //     if (rightArr[rightArr.length - 1] < min) {
    //         min = rightArr[rightArr.length - 1];
    //         console.log(min);
    //     }
    // }
    return min;
}
console.log(minOfSorted([17, 18, 3, 5, 6, 9, 10, 11, 12, 13]));


// function minOfSorted(arr, low = 0, high = arr.length - 1){
    // var min = arr[i];
    // for(var i = 0; i <= arr.length-1; i++){
        // if(arr[i]<arr[i-1]){
            //min = arr[i]
        // }
    // }
    // return min
// }
// }