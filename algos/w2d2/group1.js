// This is an actual interview algorithm given to a Coding Dojo alum

// Find Consecutive Sums

// You are given arr, a list of positive integers 0-255
// You are given k, a integer between 1-255

// Find all the consecutive groups of integers that add up to the value k

// findConsqSums([2,5,3,6,7,0,0,23,11], 16)

// O(n2)

// inputs
// k = 16
// arr = [2,5,3,6,7,0,0,23,11]

// outputs
// [
//   [2, 5, 3, 6],
//   [3, 6, 7]  // 3, 6, 7 appear consecutively, so they are including in the solution
//   [3, 6, 7, 0],
//   [3, 6, 7, 0, 0],
// ]

function findConsqSums(arr, k) {
    let tempArr =[]
    let newArr = []
    let total= 0
    for(let i = 0; i < arr.length-1; i++){
        for(let j = i+1; j < arr.length; j++) {
            total = arr[i] + arr[j]
            if (total = k){
            newArr.push(arr[i],arr[j]);
            }

            else if (total < k){
                total+=arr[j+1];
                tempArr.push(arr[i], arr[j], arr[j+1])

        }
            else(console.log();
    }


    }
    return newArr
}
console.log(findConsqSums([2,5,3,6,7,0,0,23,11], 16))





function findConsqSums(arr, k) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] + arr[i+1] < k){

        }

        }